describe('Open Weather API test application', () => {
  it('should visit weather test homepage', () => {
    cy.visit('/');
  });

  it('should call the api with no city name', () => {
    cy.get('button.btn-search').click();
    cy.get('div.alert').should('have.text', ' City name is required ');
  });

  it('should call the api for London', () => {
    cy.get('input[id="city"]').type('London').should('have.value', 'London');
    cy.get('button.btn-search').click();
    cy.get('ul>li>a[href="#menu0"]').click();
    cy.get('ul>li>a[href="#menu1"]').click();
    cy.get('ul>li>a[href="#menu2"]').click();
    cy.get('ul>li>a[href="#menu3"]').click();
    cy.get('ul>li>a[href="#menu4"]').click();
    cy.get('ul>li>a[href="#menu5"]').click();
  });
});
