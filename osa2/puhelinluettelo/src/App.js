import React, { useEffect, useState } from 'react'
import PersonsForm from './components/PersonsForm'
import Persons from './components/Persons'
import axios from 'axios'
  
const App = () => {
  const [ persons, setPersons] = useState([
    /*{ name: 'Arto Hellas', number: '040-1231244' }*/
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'persons')

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber,
      id: persons.length +1
    }

  const names = persons.map(person => person.name.toLowerCase())
  
  if (names.includes(nameObject.name.toLowerCase())) {
    alert(nameObject.name + ' is already added to phonebook')
  }
  else {
    setPersons(persons.concat(nameObject))
    setNewName('')
  }
}

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <PersonsForm 
        onSubmit={addName}
        name={newName}
        number={newNumber}
        onNameChange={handleNameChange} 
        onNumberChange={handleNumberChange}
        type="submit"
      />
      <h2>Numbers</h2>
      <Persons persons={persons}/>
    </div>
  )

}

export default App