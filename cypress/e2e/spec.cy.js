import * as LoginActions from '../support/actions/signin_page'
import * as SignInActions from '../support/actions/home_page'
import * as SidebarActions from '../support/actions/sidebar'
import * as Data from '../fixtures/data.json'
import * as Assert from '../support/helper/assert'


describe('Sketch UI Login Tests', () => {  

  it('Log in - Email format validation ', () => {
    cy.visit('/') 
    SignInActions.goToSignInPage();
    LoginActions.loginWithoutSSO("thisIsNotAFormatEmailInput.com",Data.userPassword)
    Assert.contains(LoginActions.getValidationMessage(), Data.validationMessages.noEmailFormatAlert)
  })

  it('Log in - Blank email Validation', () => {
    cy.visit('/')
    SignInActions.goToSignInPage();
    LoginActions.fillPasswordField(Data.userPassword);
    Assert.contains(LoginActions.getValidationMessage(Data.validationMessages.blankEmailAlert), Data.validationMessages.blankEmailAlert)
  })

  it('Log in - Blank password Validation', () => {
    cy.visit('/')
    SignInActions.goToSignInPage();
    LoginActions.fillEmailField(Data.userEmail);
    Assert.contains(LoginActions.getValidationMessage(Data.validationMessages.BlankPasswordAlert), Data.validationMessages.BlankPasswordAlert)
  })

  it('Log in - invalid credentials', () => {
    cy.visit('/')
    SignInActions.goToSignInPage();
    LoginActions.loginWithoutSSO(Data.invalidEmail,Data.invalidPassword)
    Assert.contains(LoginActions.getValidationMessage(),Data.validationMessages.invalidCredentials)
  })

  it('Log in - Successful case ', () => {
    cy.visit('/')
    SignInActions.goToSignInPage();
    LoginActions.loginWithoutSSO(Data.userEmail,Data.userPassword)
    Assert.contains(SidebarActions.getWorkspaceName(), Data.defaultWorkspace)
    Assert.eq(cy.title(),'Sketch - Documents')
  })
})