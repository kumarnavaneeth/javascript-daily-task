const app = require('../server');
const request = require('supertest');
const { expect } = require('chai');

describe('GET/forms', () => {
    it('should return all questions', async () => {
        const res = await request(app).get('/forms');
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('array');
    });
    it('should return 404 for invalid route', async () => {
        const res = await request(app).get('/forms/123');
        expect(res.status).to.equal(404);
    });
 
    it('should save form successfully', async () => {
        const res = await request(app)
            .post('/forms')
            .send({
                answers: [
                    { questionId: 1, answer: "test1" },
                    { questionId: 2, answer: "test2" }
                ]
            });

        expect(res.status).to.equal(201);
        expect(res.body).to.have.property('userId');
        expect(res.body.answers).to.be.an('array');
    });
    it('should return 400 for missing answer',async()=>{
        const res=await request(app).post('/forms').send({});
        expect(res.status).to.equal(400);
    });
    it('it should return 400 for answer array is empty',async()=>{
        const res=await request(app).post('/forms').send({answers:[]});
        expect(res.status).to.equal(400);
    })
});