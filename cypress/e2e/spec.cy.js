describe('Rock Paper Scissors Test', () => {
  it('Check Rock Paper Scissors', () => {
    const name = 'Dominic';

    cy.visit('http://127.0.0.1:8080');

    cy.get('#username').type(name);
    cy.get('#start-game-button').click();

    cy.get('#user-selection').select('rock');
    cy.get('#go-button').click();

    cy.get('#game-history').should('contain.text', `${name}`);
  })
})