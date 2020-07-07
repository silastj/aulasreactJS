// AQUI VEREMOS AS PROPRIEDADES DO REACT
console.log(React)

// IREMOS CRIAR UM ELEMENTO
var h1 = React.createElement('h1', null, 'Hello h1 React');
console.log(h1);

//IREMOS REDENRIZAR O MEU H1 NA TELA COM O DOM RENDER
ReactDOM.render(h1, document.getElementById('app'));

//COLOCANDO ELEMENTO DENTRO DO OUTRO NO HTML
var h2 = React.createElement('h2', null, React.createElement('span', null, "Texto do span"))
ReactDOM.render(h2, document.getElementById('app1'));



//RENDERIZAR MAIS DE 1 ELEMENTO e ELEMENTOS ANINHADOS
var h3 = React.createElement('h3', null, [
    React.createElement('p', null, "Paragrafo01"),
    React.createElement('p', null, 'Paragrafo02')
])
ReactDOM.render(h3, document.getElementById('app2'));




