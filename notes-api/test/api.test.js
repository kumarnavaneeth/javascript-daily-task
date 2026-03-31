const app=require('../server');
const { expect } = require('chai');
const request=require("supertest");
describe('GET/notes',()=>{
    it('should return all notes',async()=>{
        console.log(request);
        const res=await request(app).get('/notes');
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('array');
    });
    it('should return 404 for non existent noteID',async()=>{
        console.log(request);
        const res=await request(app).get('/notes/123');
        expect(res.status).to.equal(404);
    });
    it('test create new note',async()=>{
        const res=await request(app).post('/notes/').send({title:"task1",content:"this is a note"});
        expect(res.status).to.equal(201);
    });
    it('should return 400 if title is empty',async()=>{
        const res=await request(app).post('/notes/').send({title:"",content:"some task"});
        expect(res.status).to.equal(400);
    });
    it('should return 400 if content is empty',async()=>{
        const res=await request(app).post('/notes/').send({title:"task2",content:""});
        expect(res.status).to.equal(400);
    })
    it('should return 400 if both tile and content is empty',async()=>{
        const res=await request(app).post('/notes/').send({title:"",content:""});
    });
})