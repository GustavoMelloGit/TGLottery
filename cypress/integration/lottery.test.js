/// <reference types="cypress" />;
describe("Authentication", () => {
  it("type invalid email", () => {
    cy.visit("localhost:3000/");
    cy.get(".dVedgF").click();
    cy.get('[type="text"]').type("Name");
    cy.get('[type="email"]').type("test.com");
    cy.get('[type="password"]').type("password");
    cy.get(".sc-furwcr > .sc-dkPtRN").click();
    cy.get(".sc-furwcr > .sc-dkPtRN").should("exist");
  });
  it("register a person", () => {
    cy.get('[type="email"]').clear();
    cy.get('[type="email"]').type("test@test.com");
    cy.get(".sc-furwcr > .sc-dkPtRN").click();
    cy.get(".sc-furwcr > .sc-dkPtRN").should("exist");
  });
  it("makes login", () => {
    cy.get('[type="email"]').clear();
    cy.get('[type="email"]').type("test@test.com");
    cy.get('[type="password"]').type("password");
    cy.get(".sc-furwcr > .sc-dkPtRN").click();
    cy.url().should("include", "/home");
  });
});
describe("Gambling", () => {
  it("play mega-sena", () => {
    cy.get(":nth-child(2) > .sc-giYglK").click();
    for (let i = 0; i < 6; i++) {
      cy.get(`.sc-egiyK > :nth-child(${Cypress._.random(1, 60)})`).click();
    }
    cy.get(":nth-child(3) > .sc-iJKOTD").click();
    cy.get(".sc-hGPBjI").find("li").should("have.length", 1);
  });
  it("uses complete game", () => {
    cy.get(":nth-child(1) > .sc-iJKOTD").click();
    cy.get(":nth-child(3) > .sc-iJKOTD").click();
    cy.get(".sc-hGPBjI").find("li").should("have.length.greaterThan", 1);
  });
});
