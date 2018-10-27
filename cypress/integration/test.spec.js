describe("Open Banking Regration", () => {
    beforeEach(() => {
        cy.given().goToLoginPage();
    })
    it("AC1: Should see John Login Area", () => {
        cy.get("#username").clear().type("john");
        cy.get("#pwd").clear().type("doe");
        cy.get(".button_background").click();

        cy.contains("4,800").should("be.visible");
        cy.contains("£ 5,700").should("be.visible");
        cy.contains("OPTIMIZE").click();

        cy.contains("Recommended for you").should("be.visible");
        cy.contains("Here are our \"Smart Recommendations\" to pay-off your credit dues ! Choose this option to be free from any additional charges on your Credit Cards. '").should("be.visible");
        cy.contains("Total Amount Due").should("be.visible");
        cy.contains("Outstanding balance").should("be.visible");

        cy.contains("AGREE & PAY").click();

        cy.contains("Your payments are moved to the standing instructions!").should("be.visible");
        cy.contains("Save more annually by Switching to LBG’s 0% Purchase and Balance Transfer, with a very low Annual Percentage Rate of 19.9% !").should("be.visible");

        cy.contains("Switch Now").click();

        cy.contains("Your transaction is being processed.").should("be.visible");
    });
    it("AC1: Should see lice Login Area", () => {
        cy.get("#username").clear().type("alice");
        cy.get("#pwd").clear().type("wonderland");
        cy.get(".button_background").click();

        cy.contains("8,600").should("be.visible");
        cy.contains("£ 3,800").should("be.visible");
        cy.contains("OPTIMIZE").click();

        cy.contains("Recommended for you").should("be.visible");
        cy.contains("Here are our \"Smart Recommendations\" to pay-off your credit dues ! Choose this option to be free from any additional charges on your Credit Cards. '").should("be.visible");
        cy.contains("Total Amount Due").should("be.visible");
        cy.contains("Outstanding balance").should("be.visible");

        cy.contains("AGREE & PAY").click();

        cy.contains("Your payments are moved to the standing instructions!").should("be.visible");
        cy.contains("Are you hoping to get the best possible return on your hard earned savings? Switch to` LGB - Club Llyods Saver Account and enjoy a high rate of 0.6% annual returns on your savings !").should("be.visible");

        cy.contains("Switch Now").click();

        cy.contains("Your transaction is being processed.").should("be.visible");
    });
});