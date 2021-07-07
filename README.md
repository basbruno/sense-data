# Como executar o projeto

tenha em seu computador o node.js

como no projeto utilizei parametros xpath 
 execute - npm install cypress-xpath
 
 
Agora para abrir o Cypress basta digitar o comando

./node_modules/.bin/cypress open ou npm run cypress

# detalhes adcionais

o arquivo cypress.json ja disponibilizado no repositorio possui a seguinte configuração 

{
   
    
     "chromeWebSecurity": false,
        
     "baseUrl": "https://www.saucedemo.com"
          
      
}
 O arquivo cypress\support\index.js possui a inclusão do comando 
 
 {
 
 
require('cypress-xpath')
 
 }



