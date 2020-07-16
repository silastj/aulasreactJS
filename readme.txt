Fernando Daciuk


QUAIS PROBLEMAS O REACT RESOLVE?

Modularização( Eparação de responsabilidades);
Componentização;
Perfimance( manipulação de DOM);

https://pt-br.reactjs.org/docs/getting-started.html

IREMOS CHAMAR ESSES LINKS ABAIXO O REACT E O REACT DOM

<script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.13.1/umd/react.production.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.13.1/umd/react-dom.production.min.js"></script>

OQ MAIS IREMOS USAR ANBAIXO:
Iremos mais utilizar é: Componente / CreateClass / CreateElement


Seção2 Modulo React + Webpack

INSTALANDO O WEBPACK

Webpack é um module bundler para compactar na versão do Ecma5 que o browser reconhece.
Usamos tb no React root loader
Instalando o webpack => npm install --save-dev webpack

Instalamos webpack / Criamos os arquivos package.json e webpack.config.js
Depois criamos a pasta src e o arquivo index.js

Para instalar o webpack global
npm install -g webpack@1

depois digite webpack para executar

INSTALANDO WEBPACK DEV SERVER

npm i --save-dev webpack-dev-server

ADD O PUBLICPATH NO WEBPACK CONFIG

instalando o webpack server global ( servidor de desenvolvimento )

npm install -g webpack-dev-server@1

Digite webpack-dev-server

MODULARIZAR A APLICAÇÃO
Criaremos um arquivo no src app.js

Como funciona o module require e commonJS

CRIANDO UMA APLICAÇÃO EM REACT

Instalando dependencias react reactDOM

npm install --save react react-dom


Criando um componente

OBS: Usamos o creatElement no lugar do JSX ... 
Para usar o jsx é preciso isntalar o babell

Para rodar nessa versão anterior precisamos rodar esses comandos
npm install --save react@15.4 react-dom@15.4

INSTALANDO O babell

dependências do babel:

npm install --save-dev babel-core@6 babel-loader@6 babel-preset-es2015@6 babel-preset-stage-0@6

Precisa criar um arquivo babelrc/ configurar  e depois alterar o arquivo webpackconfig.js

Deu um problema com o babell, mas atualizei a verão 8 que precisa da 7 que roda oq estou precisando

  npm install -D babel-loader@latest @babel/core@latest @babel/preset-env@latest

MUDAREMOS O MODULE EXPORTS
ANTES=> ( module.exports = Title )

P/ EXPORT DEFAULT
DEPOIS => ( export default Title )

E O IMPORT 

ANTES => var Title = require('./app');
DEPOIS => import Title from './app';

ANTES=> var React = require('react');
DEPOIS => 

Para setar o caminho colocaremos para quando precisar, sem barra ( / ) ele vai direto na pasta node_modulos

Podemos dar um nome: ( import { render } from 'react-dom'; ) ou ( import { render as render } from 'react-dom';)


JSX Para não ficar criando (React.creatElement) 

npm install --save-dev babel-preset-react

ANTES =>  return React.createElement('h1', null, 'Título')
DEPOIS => return <h1>Titulo</h1>

ANTES => return React.createElement(Title),
DEPOIS => <Title/>,

SOURCEMAPS COM WEBPACK => Ele cria uma mapa do arquivo principal

Após a configuração no webpackconfig.js colamos o devtool 






