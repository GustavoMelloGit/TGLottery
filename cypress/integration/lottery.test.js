/* eslint-disable cypress/no-unnecessary-waiting */
/* eslint-disable jest/valid-expect-in-promise */
/// <reference types="cypress" />;

describe("Authentication", () => {
  it("type invalid email in register", () => {
    cy.get("[data-cy=signup-button]").click();
    cy.get("[data-cy=name-input]").type("Name");
    cy.get("[data-cy=email-input]").type("test.com");
    cy.get("[data-cy=password-input]").type("password");
    cy.get("[data-cy=register-button]").click();
    cy.get("[data-cy=register-button]").should("exist");
  });
  it("register a person", () => {
    cy.get("[data-cy=email-input]").clear();
    cy.get("[data-cy=email-input]").type("test@test.com");
    cy.get("[data-cy=register-button]").click();
    cy.get("[data-cy=login-button]").should("be.visible");
  });
  it("makes login", () => {
    cy.get("[data-cy=email-input]").clear();
    cy.get("[data-cy=email-input]").type("test@test.com");
    cy.get("[data-cy=password-input]").type("password");
    cy.get("[data-cy=login-button]").click();
    cy.url().should("include", "/home");
  });
});
describe("Gambling", () => {
  it("play mega-sena", () => {
    cy.LogIn();

    cy.get('[data-cy="gameType-button(1)"]')
      .should("have.text", "Mega-Sena")
      .click();

    const numbers = Cypress.env("randomNumbers");

    for (let i = 0; i < 6; i++) {
      cy.get(`[data-cy="numbers-button(${numbers[i]})"]`)
        .scrollIntoView()
        .click();
    }
    cy.get("[data-cy=addToCart-button]").click();
    cy.get("[data-cy=cartList-ul]")
      .find("li")
      .should("have.length.greaterThan", 0);
  });
  it("uses complete game", () => {
    cy.get("[data-cy=completeGame-button]").click();
    cy.get("[data-cy=addToCart-button]").click();
    cy.get("[data-cy=cartList-ul]")
      .find("li")
      .should("have.length.greaterThan", 0);
  });
  it("saves a game", () => {
    cy.FillGames();
    cy.get("[data-cy=saveCart-button]").click();
  });
});
