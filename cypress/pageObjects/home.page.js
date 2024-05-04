import { BasePage } from "./base.page";

export class HomePage extends BasePage {
    static get url() {
        return "";
    }
    static get makeAppointmentbutton(){
        return cy.get('[id="btn-make-appointment"]');
    }
    static get menuToggleIcon(){
        return cy.get('[id="menu-toggle"]');
    }
    static get sidebarWrapper(){
        return cy.get('[id="sidebar-wrapper"]');
    }
    static get listElement(){
        return cy.get('li');
    }
    static get historyContent(){
        return cy.get('[id="history"]');
    }
    
}