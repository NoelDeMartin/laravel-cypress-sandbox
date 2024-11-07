describe('Custom commands', () => {

    it('Finds models', () => {
        cy.create('User').then(user => {
            cy.findModel('User', user.id).then(fetchedUser => {
                expect(fetchedUser).to.deep.equal(user);
            });
        });
    });

});
