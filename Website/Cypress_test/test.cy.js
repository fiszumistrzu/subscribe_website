describe('Test application', () => {
    beforeEach(() => {
        cy.viewport(1550, 1750);
        cy.visit('http://127.0.0.1:8887/heading.html');
        cy.get('.getButton').contains("Get first inspirations");
        cy.get('.getButton').click();
        cy.get('.subButton').click();
        cy.get('input').type("hello@test.pl");
        cy.get('.subButton').click();
        cy.get('input').type("hello");
        cy.get('.subButton').click();
        cy.get('input').type("hello@");
        cy.get('.subButton').click();
        cy.get('input').type("hello@test");
        cy.get('.subButton').click();
        cy.get('#wylacz').click();
        cy.get('.botButton').contains("I want to study faster and have fun");
        cy.get('.botButton').click();
        cy.get('.subButton').click();
        cy.get('input').type("hello@test.pl");
        cy.get('.subButton').click();
        cy.get('input').type("hello");
        cy.get('.subButton').click();
        cy.get('input').type("hello@");
        cy.get('.subButton').click();
        cy.get('input').type("hello@test");
        cy.get('.subButton').click();
        cy.get('#wylacz').click();
    })
        
    it('Open modal', () => {
    })
});