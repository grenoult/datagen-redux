describe('Pages', () => {
    beforeEach(() => {
        cy.loadPage()
    });

    it('Check nav bar', () => {
        cy.get('a.navbar-brand').contains('Data Generator');
        cy.get('a.nav-link:first').contains('Import SQL (New!)');
        cy.get('a.nav-link:last').contains('About');
    });

    it('Check Data Generator link', () => {
        cy.get('a.navbar-brand').should('have.attr', 'href')
            .then((href) => {
                cy.visit(href)
            })
    });

    it('Check Help link', () => {
        cy.get('a.nav-link:contains("Help")').click();
    });

    it('Check About link', () => {
        cy.get('a.nav-link:contains("About")').click();
    });
});