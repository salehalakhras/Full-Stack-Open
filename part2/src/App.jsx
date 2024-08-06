import { useEffect, useState } from 'react';
import axios from 'axios';
import Form from './components/Form';
import Persons from './components/Persons';
import Filter from './components/Filter';

const App = () => {
  const [persons, setPersons] = useState([])
  const [shownPersons, setShownPersons] = useState(persons);

  useEffect(() => {
    axios.get('http://localhost:3001/persons/')
    .then((response) => {
      setPersons(response.data)
      setShownPersons(response.data)
    });
  },[])
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

export default App;

