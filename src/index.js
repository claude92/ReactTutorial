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
 * jsp can contain child elements
 */
// const element = (
//   <div>
//     <h1>Hello!</h1>
//     <h2>Good to see you here.</h2>
//   </div>
// );


/**
 * jsp in if(for),assign it,function argument,return argument
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
  ReactDOM.render(element,document.getElementById('root'));
}
setInterval(tick,1000);

