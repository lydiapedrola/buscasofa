/// <reference types="Cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("el usuario navega a {string}", function (string) {
    cy.visit("/xxx")
    cy.wait(5000);  // Añadido un delay para la carga de precios
});

Then("debería ver el texto {string}", function (string) {
    cy.contains(string).should("exist");
});