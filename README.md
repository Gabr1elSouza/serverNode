# pass.in

O pass.in é uma aplicação de **gestão de participantes em evento presenciais.**

A ferramenta permite que o organizador cadastre um evento e abra uma página de inscrição.

Os participantes inscritos podem emitir uma credencial para check-in no dia do evento.

O sistema fará scan de credencial do participante para permitir a entrada no evento.

## Requisitos

### Requisitos funcionais
 - [ ] O organizador deve poder cadastrar um novo evento;
 - [ ] O organizador deve poder visualizar dados de um evento;
 - [ ] O organizador deve poder visualizar a lista de participantes;
 - [ ] O participante deve poder se inscrever em um evento;
 - [ ] O participante deve poder visualizar seu crachá de inscrição;
 - [ ] O participante deve poder realizar check-in no evento;

 ### Regras de negócio

 - [ ] O participante só pode se inscrever em um evento uma única vez;
 - [ ] O participante só pode se inscrever em eventos com vagas disponíveis; 
 - [ ] O participante só pode realizar check0in em um evento uma única vez;

 ### Requisitos não funcionais
 - [ ] O check-in no evento será realizado através de um QRCode;

 ## Anotações 
 
 Métodos HTTP: GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS ...

 Corpo de requisição (Request body)

 Parâmetros de busca (Search Params / Query Params)

 Parâmetros de rota (Route Params) -> identificação de Recuros

 Cabeçalhos (Hearder) -> Contexto


 Semânticas = significado


 Driver nativo / Quey Builders / ORMs


 Object Relational Mapping (Hibernate / Doctrine / ActiveRecord)


 20x =>>SucessO

 30x => Redirecionamento

 40x => Erro do cliente (Erro em alguma informação enviada por QUEM está fazendo a chamada p/ API)

 50X => ERRO DO SERVIDOR (um erro que está acontecendo INDEPENDENTE do que está sendo enviado p/ o servidor)