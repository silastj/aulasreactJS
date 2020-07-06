// AQUI VEREMOS AS PROPRIEDADES DO REACT
console.log(React)

// IREMOS CRIAR UM ELEMENTO
var h1 = React.createElement('h1', null, 'Hello h1 React');
console.log(h1);

//IREMOS REDENRIZAR O MEU H1 NA TELA COM O DOM RENDER
ReactDOM.render(h1, document.getElementById('app'));
