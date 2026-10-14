
describe('Kontaktný formulár – Vitalis', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('TC_03: Neplatný e-mail', () => {
        cy.get('input[name="user_email"]')
            .type('nespravny-email');

        cy.get('button[type="submit"]')
            .click();

        cy.get('input[name="user_email"]')
            .then(($input) => {
                expect($input[0].validity.valid).to.be.false;
            });
    });
});
