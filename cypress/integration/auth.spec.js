describe('Auth', () => {

    it('Logs in', () => {
        cy.create('App\\User').then(user => {
            cy.visit('/login');

            cy.get('input[name="email"]').type(user.email);
            cy.get('input[name="password"]').type('password');
            cy.get('button[type="submit"]').click();

            cy.url().should('contain', '/private')
            cy.contains(user.name).should('be.visible');
        });
    });

});
