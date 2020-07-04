describe("Login", () => {
  const newUser = "Jane";

  const stubGetUsers = {
    method: "GET",
    url: "/users",
    response: [{ id: 1, username: "Aude", credit: 100 }],
  };

  const stubCreateUser = {
    method: "POST",
    url: "/users",
    response: [{ id: 2, username: newUser, credit: 100 }],
  };

  beforeEach(() => {
    cy.server();
    cy.route(stubGetUsers);
    cy.route(stubCreateUser);
    cy.visit("/");
  });

  it("should allow existing user to login", () => {
    cy.get("input[name='username']").type("Aude");
    cy.get("input[value='PLAY']").click();
    cy.contains("Your current credit is £100");
  });

  it("should create new user and login", () => {
    cy.get("input[name='username']").type(newUser);
    cy.get("input[value='PLAY']").click();
  });

  it("should logout user", () => {
    cy.get("input[name='username']").type("Aude");
    cy.get("input[value='PLAY']").click();
    cy.get("button").contains("LOGOUT").click();
    cy.get("h1").contains("Welcome to the Lucky Sloth!");
  });
});
