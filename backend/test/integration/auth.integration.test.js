const request = require("supertest");

const app = require("../src/app");

describe("Login API",()=>{

test("POST Login",async()=>{

const response = await request(app)

.post("/api/auth/login")

.send({ email:"test@test.com", password:"123456"});

expect(response.status).toBeDefined();

});

});


