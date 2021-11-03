// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { signIn, logIn } from "../../src/store/auth";
import { completeGame, addToCart } from "../../src/store/games";
import api from "../../src/api/api.json";

Cypress.Commands.add("RandomNumbers", (min, max) => {
  const numbers = [];
  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  function selectRandomNumbers() {
    if (numbers.length < max) {
      const random = randomNumber(min, 27);
      if (!numbers.includes(random)) numbers.push(random);
      selectRandomNumbers();
    } else return;
  }
  selectRandomNumbers();
  Cypress.env("randomNumbers", numbers);
});

Cypress.Commands.add("SignIn", () => {
  const user = {
    email: "test@test.com",
    name: "Gustavo",
    password: "password",
  };

  const dispatch = (action) =>
    cy.window().its("store").invoke("dispatch", action);

  dispatch(signIn(user));
});

Cypress.Commands.add("LogIn", () => {
  const dispatch = (action) =>
    cy.window().its("store").invoke("dispatch", action);

  const user = {
    email: "test@test.com",
    password: "password",
  };

  dispatch(logIn(user));
});

Cypress.Commands.add("FillGames", () => {
  const dispatch = (action) =>
    cy.window().its("store").invoke("dispatch", action);

  const game = api.types[2];
  const { max_number: max, range, type, price } = game;
  const min = max;
  for (let i = 0; i < 12; i++) {
    dispatch(completeGame({ max, range, type }));
    dispatch(addToCart({ type, min, price }));
  }
});
