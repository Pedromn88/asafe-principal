describe("Pruebas del encabezado", () => {
  beforeEach(() => {
    // Visitar la página donde está el encabezado
    cy.visit("http://localhost:3000/");
  });

  it("Debería encontrar y hacer clic en el elemento Home", () => {
    cy.get("#header-home").should("exist").click();
  });

  it("Debería encontrar y hacer clic en el elemento Data", () => {
    cy.get("#header-data").should("exist").click();
  });

  it("Debería encontrar y hacer clic en el elemento Notes", () => {
    cy.get("#header-notes").should("exist").click();
  });
});
