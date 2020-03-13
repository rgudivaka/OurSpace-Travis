describe("Test App", () => {
  it("launches", () => {
    cy.visit("/");
  });

  it("opens with PageLoader", () => {
    cy.visit("/");
    cy.get("[data-cy=PageLoader]").should("contain", "light");
  });
});
