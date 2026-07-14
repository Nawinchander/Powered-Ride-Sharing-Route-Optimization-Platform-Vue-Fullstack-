const request = require("supertest");

const app = require("../src/app");

describe("Ride API",()=>{test("Create Ride",async()=>{

const response = await request(app).post("/api/rides")

.send({ pickup:"A", destination:"B" });

expect(response.status)
.toBeDefined();

});

});



