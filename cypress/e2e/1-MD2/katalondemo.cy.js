const { AppointmentPage } = require("../../pageObjects/appointment.page");
const { HomePage } = require("../../pageObjects/home.page");
const { LoginPage } = require("../../pageObjects/login.page");

describe("Demoqa", () => {
    context("Grid", () => {
        beforeEach(() => {
            HomePage.visit();
        });
        it("Make Appontment", () => {
            // Click - Make Appointment
            HomePage.makeAppointmentbutton.click();
            // Set username and password fields with the demo account credentials
            LoginPage.demoUsername.then(($input) => {
                const val = $input.val()
                LoginPage.usernameInputField.type(val);
            });
            LoginPage.demoPassword.then(($input) => {
                const val = $input.val()
                LoginPage.passwordInputField.type(val);
            });
            // Click - Login
            LoginPage.loginButton.click();
            // Set the following values:
            // 1. Facility - Seoul CURA Healthcare Center
            AppointmentPage.facilitySelect.select('Seoul CURA Healthcare Center');
            // 2. Check - Apply for hospital readmission
            AppointmentPage.checkboxHospitalReadmission.click();
            // 3. Select - Medicaid
            AppointmentPage.radioButtonMedicaid.click();
            // 4. Set Date value by using the widget - 30
            AppointmentPage.calendarInput.click();
            AppointmentPage.calendarDayInput.contains('30').click();
            // 5. Set comment - CURA Healthcare Service
            AppointmentPage.commentInput.type('CURA Healthcare Service');
            // 6. Click - Book Appointment
            AppointmentPage.bookAppointmentButton.click();
            // Validate that previously set values are correct
            AppointmentPage.facilityOutput.should('have.text', 'Seoul CURA Healthcare Center');
            AppointmentPage.hospitalReadmissionOutput.should('have.text', 'Yes');
            AppointmentPage.programOutput.should('have.text', 'Medicaid');
            AppointmentPage.visitDateOutput.should('contain.text', '30');
            AppointmentPage.commentOutput.should('have.text', 'CURA Healthcare Service');
        });
    });
});