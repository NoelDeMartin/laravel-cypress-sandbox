describe('Authentication', () => {

    it('Logs in users', () => {
        cy.create('User').then(user => {
            cy.visit('/login');

            cy.get('input[name="email"]').type(user.email);
            cy.get('input[name="password"]').type('password');
            cy.get('button[type="submit"]').click();

            cy.url().should('contain', '/private');
            cy.contains(user.name);
        });
    });

    it('Shows private section to logged in users', () => {
        cy.login();

        cy.visit('/private');

        cy.contains('You are logged in!');
    });

});
