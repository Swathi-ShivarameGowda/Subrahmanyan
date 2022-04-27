describe("renders home page", () =>{
    it("renders correctly", () => {
        cy.visit("/");
        cy.get('[data-cy=earlylife-learnmore]').click();
        cy.get('[data-cy=menu-home]').click();
        cy.get('[data-cy=soilscience-learnmore]').click();
        cy.get('[data-cy=menu-home]').click();
        cy.get('[data-cy=foodtech-learnmore]').click();
        cy.get('[data-cy=menu-home]').click();
        cy.get('[data-cy=awards-learnmore]').click();
        cy.get('[data-cy=menu-home]').click();
        cy.get('[data-cy=youtube]').click();
    })

    it("render menu bar items", ()=> {
        cy.get('[data-cy=menu-early]').click();
        cy.get('[data-cy=menu-soil1]').click({force:true});
        cy.get('[data-cy=menu-iisc]').click({force:true});
        cy.get('[data-cy=menu-rothamsted]').click({force:true});
        cy.get('[data-cy=menu-food1]').click({force:true});
        cy.get('[data-cy=menu-philippines]').click({force:true});
        cy.get('[data-cy=menu-pprc]').click({force:true});
        cy.get('[data-cy=menu-cftri1]').click({force:true});
        cy.get('[data-cy=menu-infant]').click({force:true});
        cy.get('[data-cy=menu-tapioca]').click({force:true});
        cy.get('[data-cy=menu-spices]').click({force:true});
        cy.get('[data-cy=menu-pencillin]').click({force:true});
        cy.get('[data-cy=menu-awards]').click({force:true});
        cy.get('[data-cy=menu-contact]').click({force:true});
        cy.get('[data-cy=menu-sitemap]').click({force:true});
        
    })
})