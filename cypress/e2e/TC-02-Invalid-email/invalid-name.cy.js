describe('Kontaktný formulár - Vitalis', () => {
    beforeEach(() => {
        cy.visit('/')
    })


    it('TC_02: Prázdne meno', () => {

        cy.get('input[name="user_email"]')
            .type('test@example.com');

        cy.get('textarea[name="message"]')
            .type('Správa test.');

        cy.get('input[type="checkbox"]')
            .check();

        cy.get('button[type="submit"]')
            .click();

        cy.get('input[name="user_name"]')
            .should('have.value', '');

        cy.contains('Prosím zadajte meno')
            .should('be.visible');


        cy.contains('Formulár obsahuje chyby')
            .should('be.visible');

    });

})