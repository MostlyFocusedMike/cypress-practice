describe('template spec', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('Page Should Containt The Following Strings', () => {
    cy.get('#heading').contains('Hello there').should('be.visible')
    cy.contains('How about this?').should('be.visible')
  })
})