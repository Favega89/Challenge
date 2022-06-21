export const getEmailTextBox = () => {
    return cy.get('#text-input')
}

export const getPassword = () => {
    return cy.get('#password-input')
}

export const getSubmitButtonNoSSO = () => {
    return cy.get('button').contains('Sign In')
}

export const getNoEmailFormatValidation = () => {
    return cy.get('.sc-dYPeNj')
}
