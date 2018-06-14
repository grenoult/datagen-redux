describe('Pages', () => {
    beforeEach(() => {
        cy.loadPage()
    });

    it('Check nav bar', () => {
        cy.get('a.navbar-brand').contains('Data Generator');
        cy.get('a.nav-link:first').contains('Help');
        cy.get('a.nav-link:last').contains('About');
    });

    it('Check Data Generator link', () => {
        cy.get('a.navbar-brand').should('have.attr', 'href')
            .then((href) => {
                cy.visit(href)
            })
    });

    it('Check Help link', () => {
        cy.get('a.nav-link:first').should('have.attr', 'href').and('include', 'help')
            .then((href) => {
                cy.visit(href)
            })
    });

    it('Check About link', () => {
        cy.get('a.nav-link:last').should('have.attr', 'href').and('include', 'about')
            .then((href) => {
                cy.visit(href)
            })
    });
});