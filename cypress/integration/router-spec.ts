// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe("Home page", function () {
  beforeEach(function () {
    cy.visit("/");
  });

  it("renders the home page", function () {
    cy.get(".container").should("contain.html", "button");
  });
});