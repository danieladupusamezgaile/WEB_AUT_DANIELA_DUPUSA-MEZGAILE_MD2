import { BasePage } from "./base.page";

export class LoginPage extends BasePage {
    static get url() {
        return "/profile.php#login";
    }
    static get demoUsername(){
        return cy.get('input').get('[placeholder="Username"]');
    }
    static get demoPassword(){
        return cy.get('input').get('[placeholder="Password"]');
    }
    static get usernameInputField(){
        return cy.get('[id="txt-username"]');
    }
    static get passwordInputField(){
        return cy.get('[id="txt-password"]');
    }
    static get loginButton(){
        return cy.get('[id="btn-login"]');
    }
    
}