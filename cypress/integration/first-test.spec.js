// first-test.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe("First test", () => {
  it("Start Main Page", () => {
    cy.visit("/");
  });
  it("Get Countries is 234", () => {
    cy.get("ul > :nth-child(n)").its("length").should("be.gte", 220);
  });
  it("should display correct city when clicking on country", () => {
    cy.contains("Anguilla").click();
    cy.get("h1").contains("The Valley");
    cy.contains("Spain").click();
    cy.get("h1").contains("Madrid");
  });
});
