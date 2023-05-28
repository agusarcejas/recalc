const request = require('supertest');
const api = require('../src/api.js');
const { seed } = require('../src/seed.js')

beforeEach(async () => {
    await seed()
})

describe("API substract", () => {
    test("Deberia responder con un 200 ok", async () => {
        const app = await api.build()

        const res = await request(app)
            .get('/api/v1/sub/2/1')
            .expect(200)
            .expect('Content-Type', "application/json; charset=utf-8")
        expect(res.body.result).toEqual(1);
    })
})

describe('Suma con segundo parámetro negativo', () => {
    test('Debe devolver un resultado menor al primer parámetro y un status 200', async () => {
        const app = await api.build()

        const res = await request(app)
            .get('/api/v1/add/2/-3')
            .expect(200)
            .expect('Content-Type', "application/json; charset=utf-8")

        expect(res.body.result).toBeLessThan(2)
    })
});
