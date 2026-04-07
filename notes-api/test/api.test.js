const app = require('../server');
const { expect } = require('chai');
const { response } = require('express');
const request = require("supertest");
describe('GET/notes', () => {
    it('should return all notes', async () => {
        console.log(request);
        const res = await request(app).get('/notes');
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('array');
    });
    it('should return 404 for non existent noteID', async () => {
        console.log(request);
        const response = await request(app).get('/notes/123');
        expect(response.status).to.equal(404);
    });
    it('should return note for the valid id', async () => {
        console.log(request);
        const saveResponse=await request(app).post(/notes/).send({"title":"react","content":"setup"});
        const response = await request(app).get('/notes/'+saveResponse.body.id);
        expect(response.status).to.equal(200);
    });
    it('test create new note', async () => {
        const response = await request(app).post('/notes/').send({ title: "task1", content: "this is a note" });
        expect(response.status).to.equal(201);
    });
    it('should return 400 if title is empty', async () => {
        const response = await request(app).post('/notes/').send({ title: "", content: "some task" });
        expect(response.status).to.equal(400);
    });
    it('should return 400 if content is empty', async () => {
        const res = await request(app).post('/notes/').send({ title: "task2", content: "" });
        expect(res.status).to.equal(400);
    })
    it('should return 400 if both tile and content is empty', async () => {
        const response = await request(app).post('/notes/').send({ title: "", content: "" });
        expect(response.status).to.equal(400);
    });
    it('test for successful deletion', async () => {
        const saveResponse = await request(app).post('/notes/').send({ "title": "Testing", "content": "chaiMocha" });
        const response = await request(app).delete('/notes/' + saveResponse.body.id);
        expect(response.status).to.equal(200);
    });
    it('should return 404 if id for deletion is not found', async () => {
        const response = await request(app).delete('/notes/01/');
        expect(response.status).to.equal(404);
    });
    it("should return 400 if title is numeric", async () => {
        const response = await request(app).post('/notes/').send({ "title": 1, "content": "hello world" });
        expect(response.status).to.equal(400);
    })
    it("should return 400 if content is numeric", async () => {
        const response = await request(app).post('/notes/').send({ "title": "tasks", "content": 12 });
        expect(response.status).to.equal(400);
    });
    it('should return 400 if title and content is numeric', async () => {
        const response = await request(app).post('/notes/').send({ "titl": 2, "content": 3 });
        expect(response.status).to.equal(400);
    });
    it('it should rturn 200 for successful update', async () => {
        const saveresponse = await request(app).post('/notes/').send({ "title": "test", "content": "chaimocha","status":"created"});
        const response = await request(app).put('/notes/' + saveresponse.body.id).send({ "status": "created" });
        expect(response.status).to.equal(200);
    });
    it('should return 404 for wrong updation id', async () => {
        const response = await request(app).put('/notes/121').send({ "status": "created"});
        expect(response.status).to.equal(404);
    });
    it('should display 400 for date modification',async()=>{
        const saveResponse=await request(app).post('/notes/').send({"title":"task8","content":"datemodify"});
        const response=await request(app).put('/notes/'+saveResponse.body.id).send({"created":"2025-01-23"});
        expect(response.status).to.equal(400);
    });
})