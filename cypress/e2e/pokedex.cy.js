const URL='192.168.0.122:8081';

 it("testea que se creen las paginas y completen cuadros",()=> {

  cy.intercept('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0',{
     fixture:"firstPage.json"
  })
  cy.visit(URL);
  cy.get(".page-item").should("have.length",58)
  cy.get(".page-item").first().click();
  cy.get(".page-item").first().should("have.class","active");
  cy.get(".page-link").should("have.length",58);
  cy.get(".col").first().should("have.text","bulbasaur")
  cy.get(".col").not("have.text","").should("have.length",20);

 })

 it("testea que complete la card al clickear un poke y que la pagina 58 no cargue 20 pokes",()=> {

  cy.intercept('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0',{
    fixture:"firstPage.json"
  })
  cy.visit(URL);
  cy.intercept('https://pokeapi.co/api/v2/pokemon/1/',{
    fixture:"bulbasaur.json"
  })
  cy.get(".page-item").first().click();
  cy.get(".col").first().click(); 
  
  cy.get(".card-img-top").should("have.attr","src","https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg");
  cy.get(".card-title").should("have.text","bulbasaur");
  cy.get(".altura").should("have.text","7mm");
  cy.get(".peso").should("have.text","6.9kg");
  cy.get(".tipo").should("have.text","grass,poison");

  cy.intercept('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=1140',{
    fixture:"lastPage.json"
  })
  cy.get(".page-item").last().click();
  cy.get(".col").eq(14).should("have.text","")
  cy.get(".col").eq(15).should("have.text","")
  cy.get(".col").eq(16).should("have.text","")
  cy.get(".col").eq(17).should("have.text","")
  cy.get(".col").eq(18).should("have.text","")
  cy.get(".col").eq(19).should("have.text","")


 })





