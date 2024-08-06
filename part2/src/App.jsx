import { useEffect, useState } from 'react';
import Form from './components/Form';
import Persons from './components/Persons';
import Filter from './components/Filter';
import personsAPI from './services/personsAPI';

const App = () => {
  const [persons, setPersons] = useState([])
  const [shownPersons, setShownPersons] = useState(persons);

  useEffect(() => {
    personsAPI.getAll()
    .then(response => {
      setPersons(response);
    })
  },[])

  useEffect(()=>{
    setShownPersons(persons);
  },[persons])

  return (
    <div>
      <h2>Phonebook</h2>
        <Filter persons={persons} setShownPersons={setShownPersons}></Filter>
      <h2>Add a new</h2>
        <Form personsState={persons} setPersonsState={setPersons}></Form>
      <h2>Numbers</h2>
        <Persons persons={shownPersons} setPersons={setPersons}></Persons>
    </div>
  )
}

export default App;

