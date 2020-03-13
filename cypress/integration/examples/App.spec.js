describe("Test App", () => {
  it("launches", () => {
    cy.visit("/");
  });

  it("opens with Bottombar", () => {
    cy.visit("/");
    cy.get("[data-cy=BottomBar]").should("contain", "Filter");
  });
  it("shows FilterView when filter button clicked", () => {
    cy.visit("/");
    cy.get("[data-cy=BottomBar]").click();
    cy.get("[data-cy=FilterView]").should("contain", "Filter");
  });
});
