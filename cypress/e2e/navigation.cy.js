beforeEach(() => {
  cy.visit("/");
});
it("should go to contact page from header", () => {
  cy.get('[data-cy="contact-us"]').click();
  cy.url().should("contain", "/contact");
  cy.contains("Envoyez-nous un message !").should("be.visible");
});

it("should go to contact page from footer", () => {
  cy.get('[data-cy="contact-us-footer"]').click();
  cy.url().should("contain", "/contact");
  cy.contains("Envoyez-nous un message !").should("be.visible");
});
