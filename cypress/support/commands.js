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

import URL from "../../src/services/URL";

Cypress.Commands.add("login", (email, password) => {
    cy.visit("http://localhost:3000/");

    cy.get("input[type=email]").type(email);
    cy.get("input[type=password]").type(password);
    cy.get("button").click();
});

Cypress.Commands.add("signup", (user) => {
    cy.request({
        method: "POST",
        url: `${URL}/sign-up`,
        body: {
            email: user.email,
            password: user.password,
            name: user.name,
        },
    });
});

Cypress.Commands.add("getToken", (user) => {
    cy.request({
        method: "POST",
        url: `${URL}/sign-in`,
        body: user,
    });
});
Cypress.Commands.add("createEntry", (user, entryData) => {
    cy.getToken(user).then((response) => {
        const token = response.body.token;
        cy.request({
            method: "POST",
            url: `${URL}/entries`,
            body: entryData,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    });
});
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
