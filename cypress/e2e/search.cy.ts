import SEARCH_RESULT from '../fixtures/search-result.json';

describe('Search check', () => {
  const [result1, result2] = SEARCH_RESULT;

  beforeEach(() => {
    cy.visit('/');
  });

  it('Search for "Ki"', () => {
    cy.get('[data-cy="search-bar-input"]').type('Ki');

    cy.get('[data-cy="table-body"] tr').should('have.length', 2);

    cy.get('[data-cy="table-body"] tr').each(($row, index) => {
      const result = index === 0 ? result1 : result2;
      const {
        name,
        taxId,
        abundanceScore,
        relativeAbundance,
        uniqueMatchesFrequency,
      } = result;

      cy.wrap($row).within(() => {
        cy.get('td').eq(0).should('contain.text', name);
        cy.get('td').eq(1).should('contain.text', taxId);
        cy.get('td').eq(2).should('contain.text', abundanceScore);
        cy.get('td').eq(3).should('contain.text', relativeAbundance);
        cy.get('td').eq(4).should('contain.text', uniqueMatchesFrequency);
      });
    });
  });

  it('Search for "kiki"', () => {
    cy.get('[data-cy="search-bar-input"]').type('kiki');

    cy.get('[data-cy="table-body"] tr').should('have.length', 0);
  });
});
