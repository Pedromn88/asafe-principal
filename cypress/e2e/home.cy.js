describe("Prueba del componente de noticias", () => {
  it("Verifica la existencia del componente y la cantidad de tarjetas de noticias", () => {
    cy.visit("/");
    cy.get("[data-cy=#news-card]").should("exist");
    cy.get(".flex.items-center.justify-center.flex-wrap")
      .find(".card-news")
      .should("have.length.gt", 0);
  });
  it("Interactuar con una tarjeta de noticias", () => {
    cy.visit("/");
    cy.get(".flex.items-center.justify-center.flex-wrap")
      .find(".card-news")
      .first()
      .click();
  });
});
