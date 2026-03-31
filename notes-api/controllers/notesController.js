const { request, response } = require('express');
const service=require('../services/notesService')

exports.getAllNotes=async(request,response)=>{
    const notes=await service.getNotes();
    response.json(notes);
    // console.log(request.method);
    // response.send(200);
}
exports.getNoteById=async(request,response)=>{
    const notes=await service.getNotes();
    const note=notes.find(n=>n.id==request.params.id);
    if(!note) return response.status(404).json({error:'not found'});
    response.json(note);
}

exports.createNote=async(request,response)=>{
 const {title,content} =request.body;
 if(!title || !content){
     return response.status(400).end();
  }
const notes=await service.getNotes();
const newNote={
    id:Date.now(),
    title,
    content
};
notes.push(newNote);
await service.saveNotes(notes);
response.status(201).json(newNote);
};

exports.deleteNote=async(request,response)=>{
    const notes=await service.getNotes();
    const filtered=notes.filter(n=>n.id!=request.params.id);//not matching ids will be saved,entered id is removed
    await service.saveNotes(filtered);
    response.json({message:'deleted'});
};
