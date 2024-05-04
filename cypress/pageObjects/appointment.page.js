import { BasePage } from "./base.page";

export class AppointmentPage extends BasePage {
    static get url() {
        return "/#appointment";
    }
    static get facilitySelect(){
        return cy.get('[id="combo_facility"]');
    }
    static get checkboxHospitalReadmission(){
        return cy.get('[id="chk_hospotal_readmission"]');
    }
    static get radioButtonMedicaid(){
        return cy.get('[id="radio_program_medicaid"]');
    }
    static get calendarInput(){
        return cy.get('[class="glyphicon glyphicon-calendar"]');
    }
    static get calendarDayInput(){
        return cy.get('[class="day"]');
    }
    static get commentInput(){
        return cy.get('[id="txt_comment"]');
    }
    static get bookAppointmentButton(){
        return cy.get('[id="btn-book-appointment"]');
    }
    static get facilityOutput(){
        return cy.get('[id="facility"]');
    }
    static get hospitalReadmissionOutput(){
        return cy.get('[id="hospital_readmission"]');
    }
    static get programOutput(){
        return cy.get('[id="program"]');
    }
    static get visitDateOutput(){
        return cy.get('[id="visit_date"]');
    }
    static get commentOutput(){
        return cy.get('[id="comment"]');
    }
}