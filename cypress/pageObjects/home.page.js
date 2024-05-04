import { BasePage } from "./base.page";

export class HomePage extends BasePage {
    static get url() {
        return "";
    }
    static get makeAppointmentbutton(){
        return cy.get('[id="btn-make-appointment"]');
    }
    
}