
describe('TS_01 - Contact Form', () => {

    beforeEach(() => {
        cy.visit('/');
    });

    // TC_01 - Positive test
    it('TC_01 - Successful form submission', () => {
        cy.get('input[name="user_name"]').type('Jana Testová');
        cy.get('input[name="user_email"]').type('jana@example.com');
        cy.get('textarea[name="message"]').type('Testovacia správa');
        cy.get('input[type="checkbox"]').check();

        cy.get('button[type="submit"]').click();

        cy.contains('Správa bola úspešne odoslaná')
            .should('be.visible');
    });

    // TC_02 - Negative test
    it('TC_02 - Empty name', () => {
        cy.get('input[name="user_email"]').type('jana@example.com');
        cy.get('textarea[name="message"]').type('Testovacia správa');
        cy.get('input[type="checkbox"]').check();

        cy.get('button[type="submit"]').click();

        cy.contains('Prosím zadajte meno')
            .should('be.visible');
    });

    // TC_03 - Negative test
    it('TC_03 - Invalid email', () => {
        cy.get('input[name="user_name"]').type('Jana Testová');
        cy.get('input[name="user_email"]').type('abc@');
        cy.get('textarea[name="message"]').type('Testovacia správa');
        cy.get('input[type="checkbox"]').check();

        cy.get('button[type="submit"]').click();

        cy.contains('Formulár obsahuje chyby')
            .should('be.visible');
    });

    // TC_04 - Negative test
    it('TC_04 - Empty message', () => {
        cy.get('input[name="user_name"]').type('Jana Testová');
        cy.get('input[name="user_email"]').type('jana@example.com');
        cy.get('input[type="checkbox"]').check();

        cy.get('button[type="submit"]').click();

        cy.contains('Formulár obsahuje chyby')
            .should('be.visible');
    });

    // TC_05 - Negative test
    it('TC_05 - GDPR not accepted', () => {
        cy.get('input[name="user_name"]').type('Jana Testová');
        cy.get('input[name="user_email"]').type('jana@example.com');
        cy.get('textarea[name="message"]').type('Testovacia správa');

        cy.get('button[type="submit"]').click();

        cy.contains('Formulár obsahuje chyby')
            .should('be.visible');
    });

});
