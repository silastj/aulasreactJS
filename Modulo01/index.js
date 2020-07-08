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

//RENDERIZANDO DE OUTRA FORMA
// var h4 = React.DOM.p( null, [
//     React.DOM.p(null, React.DOM.i(mull,"Itálico")),
//     React.DOM.p(null, 'Paragrafo04')
// ])
// ReactDOM.render(h4, document.getElementById('app3'));


//CONHECENDO O JSX
//PRIMEIRO ELEMENTO VAI SER O ELEMENTO <H1> 
// SEGUNDO ELEMENTO ONDE ELE VAI RENDERIZAR
// POR FINAL ELE PRECISA SER RENDERIZADO PARA RODAR
// BABEL QUE VAI FAZER A RENDERIZAÇÃO BABEL COR

ReactDOM.render(
    <h1>Hello WOrd</h1>,
    document.querySelector('app3')
)

// CRIANDO O PRIMEIRO COMPONENTE
//SEMPRE UTILIZANDO LETRA MAISCULA NO INICIO
//SEMPRE PRECISAR TER O METODO RENDER E TER O CREATE CLASS

var Title = React.createClass({
    render: function () {
        return (<h1>Hello Word Title</h1>)
    }
})

ReactDOM.render(
    <Title/>,
    document.getElementById('app4')
)

