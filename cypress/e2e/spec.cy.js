import * as LoginActions from '../support/actions/signin_page'
import * as SignInActions from '../support/actions/home_page'
import * as SidebarActions from '../support/actions/sidebar'
import * as Data from '../fixtures/data.json'
import * as Assert from '../support/helper/assert'


describe('Sketch UI Login Tests', () => {
  beforeEach(() => {
    cy.visit('/')
    SignInActions.goToSignInPage();
  })

  it('Log in - Email format validation ', () => {    
    LoginActions.loginWithoutSSO("thisIsNotAFormatEmailInput.com",Cypress.env("userPassword"))
    Assert.contains(LoginActions.getValidationMessage(), Data.validationMessages.noEmailFormatAlert)
  })

  it('Log in - Blank email Validation', () => {
    LoginActions.fillPasswordField(Cypress.env("userPassword"));
    Assert.contains(LoginActions.getValidationMessage(Data.validationMessages.blankEmailAlert), Data.validationMessages.blankEmailAlert)
  })

  it('Log in - Blank password Validation', () => {
    LoginActions.fillEmailField(Cypress.env("userEmail"));
    Assert.contains(LoginActions.getValidationMessage(Data.validationMessages.BlankPasswordAlert), Data.validationMessages.BlankPasswordAlert)
  })

  it('Log in - invalid credentials', () => {
    LoginActions.loginWithoutSSO(Data.invalidEmail,Data.invalidPassword)
    Assert.contains(LoginActions.getValidationMessage(),Data.validationMessages.invalidCredentials)
  })

  it('Log in - Successful case', () => {
    LoginActions.loginWithoutSSO(Cypress.env("userEmail"),Cypress.env("userPassword"))
    Assert.contains(SidebarActions.getWorkspaceName(), Data.defaultWorkspace)
    Assert.eq(cy.title(),'Sketch - Documents')
  })
})