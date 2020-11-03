import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}
const user = {
  firstName: 'Giuseppe',
  lastName: 'Verdi'
}
// const element = (<h1>
//   Hello, {formatName(user)}
// </h1>)
/**
 * "" for string valutation
 */
//const element = <div tabIndex="0"></div>
/**
 * jsx in attribute html
 */
// const element = <img alt="ok" src={user.avatar}></img>
/**
 * compilation with babel
 */
// const element = (
//   <h1 className="greeting">
//     Hello world!
//   </h1>
// )
// const element = React.createElement(
//   'h1',
//   { className: 'greeting' },
//   'Hello, world!'
// )

/**
 * 
 * output of babel 
 */
// Nota: questa struttura è semplificata
// const element = {
//   type: 'h1',
//   props: {
//     className: 'greeting',
//     children: 'Hello, world!'
//   }
// };

/**
 *
 * jsx can contain child elements
 */
// const element = (
//   <div>
//     <h1>Hello!</h1>
//     <h2>Good to see you here.</h2>
//   </div>
// );


/**
 * jsx in if(for),assign it,function argument,return argument
 */
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>
  } else {
    return <h1>Hello, Stranger</h1>
  }
}
ReactDOM.render(
  getGreeting(user),
  document.getElementById('root')
)
function tick() {
  const element = (
    <div>
      <h1>Hello, world</h1>
      <h2>It is {new Date().toLocaleTimeString()}</h2>
    </div>
  )
  ReactDOM.render(element, document.getElementById('root'));
}
// setInterval(tick, 1000);
/**
 * Componenti 
 */
// function Ciao(props) {
//   return <h1>Ciao,{props.name}</h1>
// }
/**
 * ES6
 */
class Ciao extends React.Component {
  render() {
    return <h1>Ciao, {this.props.nome}</h1>
  }
}
const elemento = <Ciao nome="Sara" />
ReactDOM.render(
  elemento,
  document.getElementById('root')
);
/**
 * Comporre Componenti
 */
function App() {
  return (
    <div>
      <Ciao nome="Sara"></Ciao>
      <Ciao nome="Cahal"></Ciao>
      <Ciao nome="Edite"></Ciao>
    </div>
  )
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
)
/**
 * Estrarre Componenti
 */
// function Commento(props) {
//   return (
//     <div className="Commento">
//       <div className="InfoUtente">
//         <img className="Avatar"
//           src={props.autore.avatarUrl}
//           alt={props.autore.nome}
//         />
//         <div className="InfoUtente-nome">
//           {props.autore.nome}
//         </div>
//       </div>
//       <div className="Commento-testo">
//         {props.testo}
//       </div>
//       <div className="Commento-data">
//         {formatDate(props.data)}
//       </div>
//     </div>
//   )
// }
const utente = {
  avatarUrl: '',
  nome: 'Gianni'
}
const testo = 'prova';
const data = new Date().toString();
function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.utente.avatarUrl}
      alt={"alt"+props.utente.nome}
    />
  )
}
function InfoUtente(props) {
  return (
    <div className="InfoUtente">
      <Avatar utente={props.utente} />
      <div className="InfoUtente-nome">
        {props.utente.nome}
      </div>
    </div>
  )
}
function formatDate(data) {
  return data
}
function Commento(props) {
  return (
    <div className="Commento">
      <InfoUtente utente={props.autore} />
      <div className="Commento-testo">
        {props.testo}
      </div>
      <div className="Commento-data">
        {formatDate(props.data)}
      </div>
    </div>
  )
}
ReactDOM.render(<Commento autore={utente} testo={testo} data={data} />, document.getElementById('root'))
