/// <reference types="cypress" />
import generateFakeUser from "../factories/userFactory";

describe("Sign in", () => {
    const user = generateFakeUser();
    before(() => {
        cy.signup(user);
    });
    it("should sign in successfully if user is valid", () => {
        cy.visit("http://localhost:3000/");

        cy.get("input[type=email]").type(user.email);
        cy.get("input[type=password]").type(user.password);
        cy.contains("Sign In")
            .click()
            .then(() => {
                cy.url().should("equal", "http://localhost:3000/mywallet");
            });
    });

    it("should show error message if user doesn't exist", () => {
        cy.visit("http://localhost:3000/");

        cy.get("input[type=email]").type("idontexist@user.com");
        cy.get("input[type=password]").type("123456");
        cy.contains("Sign In")
            .click()
            .then(() => {
                cy.contains("Not Found").should("be.visible");
            });
    });
});
