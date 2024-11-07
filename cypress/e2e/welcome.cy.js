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

    it('Route is defined', () => {
        cy.artisan('route:list --json').then(routes => {
            expect(Array.isArray(routes)).to.be.true;

            const welcomeRoute = routes.find(route => route.name === 'welcome');
            expect(welcomeRoute).not.to.be.null;
            expect(welcomeRoute.uri).to.equal('/');
            expect(welcomeRoute.method).to.equal('GET|HEAD');
        });
    });

});
