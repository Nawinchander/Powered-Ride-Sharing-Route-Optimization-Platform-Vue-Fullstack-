/// login cy

describe("Login Page",()=>{

it("Login",()=>{

cy.visit("/");

cy.get("input")
.first()

.type("test@test.com");

cy.get(
"input[type=password]"
)

.type("123456");

cy.contains("Login")
.click();

});

});



