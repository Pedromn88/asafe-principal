describe("login", () => {
  it("Verifica los botones del login", () => {
    cy.visit("/");
    cy.get("#button-login-github").should("exist").click();
    cy.get("#button-login-google").should("exist").click();
  });
});
