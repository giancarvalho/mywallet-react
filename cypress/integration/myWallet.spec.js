/// <reference types="cypress" />
import createFakeEntries from "../factories/entriesFactory";
import generateFakeUser from "../factories/userFactory";

describe("/mywallet", () => {
    const user = generateFakeUser();
    const entry = createFakeEntries();
    before(() => {
        cy.signup(user);
        cy.createEntry(user, entry);
    });

    it("should find one entry in mywallet page", () => {
        cy.login(user.email, user.password).then(() => {
            cy.contains(entry.description).should("be.visible");
        });
    });
});
