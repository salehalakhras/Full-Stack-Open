import { useState } from 'react'
import Form from './components/Form'
import Persons from './components/Persons'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [shownPersons, setShownPersons] = useState(persons);

  return (
    <div>
      <h2>Phonebook</h2>
        <Filter persons={persons} setShownPersons={setShownPersons}></Filter>
      <h2>Add a new</h2>
        <Form personsState={persons} setPersonsState={setPersons}></Form>
      <h2>Numbers</h2>
        <Persons persons={shownPersons}></Persons>
    </div>
  )
}

export default App