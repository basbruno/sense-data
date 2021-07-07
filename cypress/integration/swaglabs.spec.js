/// <reference types="cypress-xpath" />






context('SwagLabs sense data', () => {


    before(() => {
        cy.visit('/')




    });



    it('Realizar Login', () => {

        cy.xpath('//*[@id="user-name"]').type('standard_user')
        cy.xpath('//*[@id="password"]').type('secret_sauce')

        cy.xpath('//*[@id="login-button"]').click()

        Cypress.Cookies.preserveOnce('session-username')

    });


    it('Ordenar do menor ao maior', () => {

        //cy.setCookies('session-username', 'standard_user')

        cy.xpath('//*[@id="header_container"]/div[2]/div[2]/span/select').select('Price (low to high)', { force: true })
        Cypress.Cookies.preserveOnce('session-username')




    });


    it('selecionar camiseta', () => {

        //adcionar duas camisetas ao carrinho
        cy.xpath('//*[@id="add-to-cart-sauce-labs-onesie"]').click()
        cy.xpath('//*[@id="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()
        Cypress.Cookies.preserveOnce('session-username')

    });

    it('Clicar no botão do carrinho', () => {
        // clicar no botão carrinho
        cy.xpath('//*[@id="shopping_cart_container"]').click()
        Cypress.Cookies.preserveOnce('session-username')

    });

    it('selecionar a opção checkout', () => {
        
        cy.xpath('//*[@id="checkout"]').click()
        Cypress.Cookies.preserveOnce('session-username')

    });

    it('preencher informações pessoais e continuar ', () => {
        // prencher os dados com suas informações

        cy.xpath('//*[@id="first-name"]').type('João')
        cy.xpath('//*[@id="last-name"]').type('Silva')
        cy.xpath('//*[@id="postal-code"]').type('00090-000')

        // selecionar o botão continuar

        cy.xpath('//*[@id="continue"]').click()
        Cypress.Cookies.preserveOnce('session-username')

    });

    it('Finalizar Compra', () => {
        
        cy.xpath('//*[@id="finish"]').click()
        Cypress.Cookies.preserveOnce('session-username')

    });


});