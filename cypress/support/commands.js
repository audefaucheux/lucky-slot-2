// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("login", (username) => {
  cy.get("input[name='username']").type(username);
  cy.get("input[value='PLAY']").click();
});

// fix to xhr request not working in CI
Cypress.Commands.overwrite("visit", (originalFn, url, options) => {
  const opts = Object.assign({}, options, {
    onBeforeLoad: (window, ...args) => {
      window.fetch = null;
      if (options.onBeforeLoad) {
        return options.onBeforeLoad(window, ...args);
      }
    },
  });
  return originalFn(url, opts);
});
