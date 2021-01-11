# BACK-END

## Postman

Clicar no símbolo do "olho", canto superior direito, e trocar a variável CURRENT VALUE para o endereço abaixo: 

<div align="center">
    <img src="/Postman.JPG" width="700px"</img> 
</div>

* Apontamento para endereço de produção (Heroku)  
https://andre-salgueiro-sds2.herokuapp.com

* Apontamento para localhost  
http://localhost:8080

## Arquivos .properties

Alterar o atributo para cada objetivo
* Teste  
Aponta para o banco de dados em memória  
spring.profiles.active=test

* Desenvolvimento  
Aponta para o banco de dados do Postgre local  
spring.profiles.active=dev

* Produção  
Aponta para o banco de dados do Postgre hospedado no Heroku  
spring.profiles.active=prod

