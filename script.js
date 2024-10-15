//your JS code here. If required.
() => {
  ['h2', 'p', 'div', 'a', 'img'].forEach(tag => {
    cy.get(tag).should('have.length.at.least', 1);
  });
}
