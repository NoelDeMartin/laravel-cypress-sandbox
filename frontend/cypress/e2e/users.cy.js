const { useDatabaseMigrations } = require("cypress-laravel");

describe('Users', () => {

    useDatabaseMigrations();

    it('Shows users', () => {
        cy.create('User', 5).then(users => {
            cy.visit('/');
            cy.contains('Users');

            users.forEach(user => cy.contains(user.name));
        });
    });

});
