/// <reference types="cypress" />

import generateFakeUser from "../factories/userFactory";

describe("/sign-up", () => {
    const user = generateFakeUser();

    it("Should redirect to sign in page and show success message if sign up is sucessful", () => {
        cy.visit("http://localhost:3000/sign-up");

        cy.get("input[placeholder=Name]").type(user.name);
        cy.get("input[placeholder=E-mail]").type(user.email);
        cy.get("input[placeholder=Password]").type(user.password);
        cy.get("input[placeholder='Confirm your password']").type(
            user.password
        );

        cy.contains("Sign Up")
            .click()
            .then(() => {
                cy.contains("Success!").should("be.visible");
            });
    });
});
