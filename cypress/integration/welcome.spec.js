import { useDatabaseMigrations } from 'cypress-laravel';

describe('Welcome', () => {

    useDatabaseMigrations();

    it('Shows "Laravel"', () => {
        cy.visit('/');

        cy.contains('Laravel');
    });

    it('Shows registered users count', () => {
        cy.create('User');

        cy.visit('/');

        cy.contains('There is one user registered');
    });

});
