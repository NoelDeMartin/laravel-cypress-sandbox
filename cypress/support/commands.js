Cypress.Commands.add('csrfToken', () => cy.request('/_cypress/csrf_token').its('body'));

Cypress.Commands.add('create', modelClass => {
    return cy.csrfToken().then(
        csrfToken => cy.request({
            url: '/_cypress/create_models',
            method: 'POST',
            body: {
                _token: csrfToken,
                modelClass,
            },
        })
            .its('body')
    );
});
