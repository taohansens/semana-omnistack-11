const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG',() => {
    beforeEach(async () => {
        await connection.migrate.latest();
    });

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
        .post('/ongs')
            .send({
            name: "Teste1",
            email: "contato@contato.com",
            whatsapp: "0885462254",
            city: "Centro de Teste",
            uf: "TE"
            });

            expect(response.body).toHaveProperty('id');
            expect(response.body.id).toHaveLength(8);
    })
})