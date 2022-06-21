export const getSignInBtn = () => {
    return cy.get(".main-nav__link").contains('Sign In')
}