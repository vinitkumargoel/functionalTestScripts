let url = Cypress.env('URL') || "192.168.1.13:8082/"


Cypress.Commands.add("given", () => {
    cy.server();
});

Cypress.Commands.add("goToLoginPage", () => {
    console.log("http://" + url);
    
    cy.visit("http://" + url);
});