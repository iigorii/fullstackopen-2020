import React from 'react';
import ReactDOM from 'react-dom';

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
  </div>
  )
}

const App = () => {  
  const nimi = 'jokke'
  const ika = 41
  return (
    <>
      <h1>Greetings</h1>
      <Hello name={nimi} age={11 + 10}/>
      <Hello name="papa" age={ika}/>
  </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));



