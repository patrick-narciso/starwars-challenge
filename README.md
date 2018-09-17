# <img src="https://s3.amazonaws.com/star-wars-challenge/Yoda.png" alt="SW" width="40" /> Star Wars Challenge
<p align="center">
  <img src="https://s3.amazonaws.com/star-wars-challenge/bit.png" alt="Cabeçalho Challenge Charlie"/>
</p>


## Introdução
O desafio consiste em construir uma aplicação para auxiliar o apresentador de uma brincadeira
que dado um planeta aleatório da franquia star wars, apresente seus dados e pergunte aos participantes
como seria o clima, o terreno e em quantos filmes da franquia ele apareceu. 


## Tecnologias Utilizadas

- HTML 5
- CSS 3
  - [Arcade Button](https://codepen.io/mkvug/pen/meJyr/)
  - [Parallax Star](https://codepen.io/saransh/pen/BKJun)
- SASS
- Javascript (ES6)
- [VUE.JS](https://vuejs.org/)
- [VUEX](https://vuex.vuejs.org/)
- [Amazon AWS S3](https://aws.amazon.com/pt/s3/)
- [Docker](https://www.docker.com/)
- API's
    - [SWAPI](https://swapi.co/) (API com os dados dos planetas)

## Execução do Projeto

### NPM
Para execução deste projeto com NPM, será necessário ter o [Node](https://nodejs.org),
então certifique-se que o tenha instalado localmente. Primeiramente clone este repositório.
Na pasta do projeto, execute o comando:
```
npm install
```
Este comando irá instalar as dependências do projeto.
 
Logo após, execute o comando:
```
npm run serve
```
A aplição estará disponível no endereço 
```
http://localhost:8080
```

### Docker
Você pode também executar este projeto em um container docker. Para isso, certifique-se que tenha o [Docker](https://www.docker.com/) instalado. E então,
construa uma imagem baseada no Dockerfile existente na raiz do projeto com o comando abaixo:
```
docker build -t starwars-challenge .
```
Logo após, suba o container para acessar a aplicação com o seguinte comando:
```
docker run -it -p 8080:80 starwars-challenge
```

Também já existe uma imagem gerada no docker hub, caso deseje, basta pular as etapas anteriores e executar o seguinte comando:
```
docker run -d -p 8080:80 pnarciso/sw-challenge
```
Em ambos os casos a aplicação estará disponível no endereço 
```
http://localhost:8080
```

## Testes
Foram feitos testes unitários com [Mocha](https://mochajs.org/) e [Chai](http://www.chaijs.com/) (Bilioteca de asserção).
Para executá-los, basta executar o seguinte comando:
```
npm run test:unit
```
