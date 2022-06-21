import * as LoginPO from '../page_objects/signin/signin_modal'

export const loginWithoutSSO = (email,password) => {
    fillEmailField(email)
    fillPasswordField(password)
    clickSubmitButton()
}

export const fillPasswordField = (password) => {
    LoginPO.getPassword().clear().type(password)
}   

export const fillEmailField = (email) => {
    LoginPO.getEmailTextBox().clear().type(email)
    clickSubmitButton();
}

export const clickSubmitButton = () => {
    LoginPO.getSubmitButtonNoSSO().click()
} 

export const getValidationMessage = () => {
    return LoginPO.getNoEmailFormatValidation()
}