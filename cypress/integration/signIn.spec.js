/// <reference types="cypress" />
// sim, três barras mesmo e com todos os espaços certinhos

describe("Sign in", () => {
    it("should sign in successfully if user is valid", () => {
        cy.visit("http://localhost:3000/");

        cy.get("input[type=email]").type("gian@example.com");
        cy.get("input[type=password]").type("123456");
        cy.get("button").click();

        cy.url().should("equal", "http://localhost:3000/mywallet");
    });

    it("should show error message if user doesn't exist", () => {
        cy.visit("http://localhost:3000/");

        cy.get("input[type=email]").type("idontexist@user.com");
        cy.get("input[type=password]").type("123456");
        cy.get("button").click();

        cy.contains("Not Found").should("be.visible");
    });
});
