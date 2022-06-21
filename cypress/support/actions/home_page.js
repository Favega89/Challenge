import * as Navbar from '../page_objects/home/navbar'

export const goToSignInPage = () => {
    Navbar.getSignInBtn().click({force: true})
}