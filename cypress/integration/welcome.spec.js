describe('Welcome', () => {

    it('Sees "Laravel"', () => {
        cy.visit('/');

        cy.contains('Laravel').should('be.visible');
    });

});
