describe("app", () => {
  beforeEach(() => {
    cy.server(); // enable response stubbing
    cy.route({
      method: "GET", // Route all GET requests
      url: "/countries", // that have a URL that matches '/countries'
      response: [{ name: "Spain", capital: "Madrid" }], // and force the response to be this one
    });
    cy.visit("/");
  });

  it("should display city when clicking on country", () => {
    cy.contains("Spain").click();
    cy.get("h1").contains("Madrid");
  });

  it('Check City element take correct base styles', () => {
    cy.contains("Spain").click();
    
    cy.get('h1').invoke('css', 'position')
    .should('equal', 'fixed');
    
    cy.get('h1')
    .invoke('css', 'color')
    .should('equal', 'rgb(255, 255, 255)');

    cy.get('h1')
    .invoke('css', 'top')
    .should('equal', '20px');

    cy.get('h1')
    .invoke('css', 'right')
    .should('equal', '0px');

    cy.get('h1')
    .invoke('css', 'text-align').should('equal', 'right');

    cy.get('h1')
    .invoke('css', 'background-color').should('equal', 'rgba(133, 194, 10, 0.7)')
  })
});
