describe('Welcome', () => {

    it('Shows "Laravel"', () => {
        cy.visit('/');

        cy.contains('Laravel');
    });

});
