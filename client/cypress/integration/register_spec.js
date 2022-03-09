describe('register', () => {
    it('user can register', () => {
        cy.visit('/register');
      cy.get('#name').type('Cypress Honey');
      cy.get('#email').type('cypress@gmail.com');
      cy.get('#password').type('password1');
      cy.get('#password2').type('password1');
      cy.get('#languages').type('python, javascript, typscript');
      cy.get('#bio').type('I want to improve my pyhton skills by pairing with others');
      cy.get('button[type="submit"]')
      .should('be.visible')
      .click()      
    })
})