describe("Game", () => {
  // const stubGetUsers = {
  //   method: "GET",
  //   url: "/users",
  //   response: [{ id: 1, username: "Aude", credit: 100 }],
  // };

  beforeEach(() => {
    cy.server();
    cy.fixture("users.json").as("users");
    cy.route("GET", "/users", "@users").as("getUsers");
    cy.visit("http://localhost:3000/");
    cy.wait("@getUsers");
    cy.login("Aude");
  });

  it("should display username and credit", () => {
    cy.get("#current-user").contains("Aude");
    cy.get("h1").find("span").contains(100);
  });

  // it("should default bet to £10", () => {
  //   cy.get("#bet-header > span").contains("10");
  // });

  // it("should not allow to bet less than 10", () => {
  //   cy.get("button").contains("-").should("have.attr", "disabled");
  // });

  // it("should not allow to bet more than current credit", () => {
  //   cy.get("button").contains("Bet MAX").click();
  //   cy.get("button").contains("Bet MAX").should("have.attr", "disabled");
  //   cy.get("button").contains("+").should("have.attr", "disabled");

  //   cy.get("button").contains("-").click();
  //   cy.get("button").contains("+").click();
  //   cy.get("button").contains("Bet MAX").should("have.attr", "disabled");
  //   cy.get("button").contains("+").should("have.attr", "disabled");
  // });

  // it("should be set to Sloth theme by default", () => {
  //   cy.get("select[id='theme-dropdown']").contains("Sloth");
  //   cy.get("button.spin-button").click();
  //   cy.get("#image-1 > img")
  //     .should("have.attr", "src")
  //     .should("include", "images/themes/sloth/");
  // });

  // it("should allow user to choose theme", () => {
  //   cy.get("select[id='theme-dropdown']").select("Cat");
  //   cy.get("button.spin-button").click();
  //   cy.get("#image-1 > img")
  //     .should("have.attr", "src")
  //     .should("include", "images/themes/cat/");
  // });

  // it("should display a leaderboard", () => {
  //   cy.get("table > tbody > tr").contains("1");
  //   cy.get("table > tbody > tr").contains("Aude");
  //   cy.get("table > tbody > tr").contains("100");
  // });
});
