describe("Pruebas de búsqueda de datos", () => {
  beforeEach(() => {
    cy.visit("/ ");
  });
  it("Debería hacer clic en #header-data, esperar a que se abra el componente Dataviews y realizar acciones", () => {
    cy.get("#header-data").should("exist").click();
    cy.get("#views-container")
      .should("exist")
      .then(() => {
        cy.get("#datePickers-start").should("exist").click().type("01/03/2024");
        cy.get("#datePickers-End").should("exist").click().type("31/03/2024");
        cy.get("#button-search-data").should("exist").click();
      });
  });
});

// cy.visit("http://localhost:3000/");
