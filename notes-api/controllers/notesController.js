const { request, response } = require('express');
const service = require('../services/notesService')

exports.getAllNotes = async (request, response) => {
    const notes = await service.getNotes();
    response.json(notes);
    // console.log(request.method);
    // response.send(200);
}
exports.getNoteById = async (request, response) => {
    const notes = await service.getNotes();
    const note = notes.find(n => n.id == request.params.id);
    if (!note) return response.status(404).json({ error: 'not found' });
    response.json(note);
}

exports.createNote = async (request, response) => {
    const { title, content,status,dateTime } = request.body;
    if (!title || !content) {
        return response.status(400).end();
    }
    if (!isNaN(title) || !isNaN(content)) {
        return response.status(400).end();
    }
    const notes = await service.getNotes();
    const newNote = {
        id: Date.now(),
        title,
        content,
        status: status || "created",
        created:new Date().toISOString(),
        dateTime:dateTime||null
    };
    notes.push(newNote);
    await service.saveNotes(notes);
    response.status(201).json(newNote);
};

exports.updateNote = async (req, res) => {
    const notes = await service.getNotes();
    const notexExists = notes.some(n => n.id == req.params.id);
    if (!notexExists) {
        return res.status(404).end();
    }
    if('created' in req.body){
        return res.status(400).json({error:"cannot update createdDate"});
    }
    if(notexExists.status=='closed' && req.body.status!=='closed'){
        return res.status(400).json({error:"cannot modify status"});
    }
    const updated = notes.map(n =>
        n.id == req.params.id ? { ...n, ...req.body } : n
    );
    await service.saveNotes(updated);
    const updatedNotes = updated.find(n => n.id == req.params.id);
    res.status(200).json(updatedNotes);
};

exports.deleteNote = async (request, response) => {
    const notes = await service.getNotes();
    const filtered = notes.filter(n => n.id != Number(request.params.id));//not matching ids will be saved,entered id is removed
    if (notes.length == filtered.length) {
        return response.status(404).end();
    }
    await service.saveNotes(filtered);
    response.json({ message: 'deleted' });
};
