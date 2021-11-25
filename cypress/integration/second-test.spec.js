describe("Página - Countries / Cities - Testeando funcionamiento y estilos", () => {
  beforeEach(() => {
    // Para Mockear la respuesta de la API sin tener que usarla
    // tenemos que introducir la misma ruta que en la app y listo
    // https://docs.cypress.io/api/commands/intercept#With-a-StaticResponse-object
    const staticResponse = [{ name: "Spain", capital: "Madrid" }];
    cy.intercept("/countries", staticResponse);
    cy.visit("/");
  });

  it("Check Country element take correct base styles", () => {
    cy.get("li").invoke("css", "cursor").should("equal", "pointer");
    cy.get("li").invoke("css", "width").should("equal", "300px");
  });

  it("should display city when clicking on country", () => {
    cy.contains("Spain").click();
    cy.get("h1").contains("Madrid");
  });

  it("Check City element take correct base styles", () => {
    cy.contains("Spain").click();

    cy.get("h1").invoke("css", "position").should("equal", "fixed");

    cy.get("h1").invoke("css", "color").should("equal", "rgb(255, 255, 255)");

    cy.get("h1").invoke("css", "top").should("equal", "20px");

    cy.get("h1").invoke("css", "right").should("equal", "0px");

    cy.get("h1").invoke("css", "text-align").should("equal", "right");

    cy.get("h1")
      .invoke("css", "background-color")
      .should("equal", "rgba(133, 194, 10, 0.7)");
  });
});
