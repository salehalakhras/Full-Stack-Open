import { useEffect, useState } from 'react';
import Form from './components/Form';
import Persons from './components/Persons';
import Filter from './components/Filter';
import personsAPI from './services/personsAPI';

const App = () => {
  const [persons, setPersons] = useState([])
  const [shownPersons, setShownPersons] = useState([]);
  const [statusBar, setStatusBar] = useState('');

  useEffect(() => {
    personsAPI.getAll()
      .then(response => {
        setPersons(response);
      })
  }, [])

  useEffect(() => {
    setShownPersons(persons);
  }, [persons])

  useEffect(() => {
    if (statusBar) {
      setTimeout(() => {
        setStatusBar('');
      }, 5000);
    }

  }, [statusBar])

  const statusBarStyle = {
    color: statusBar.includes('Info:') ? 'red' : 'green',
    backgroundColor: 'lightgray',
    padding: '10px',
    marginBottom: '10px',
    fontSize: 25,
    fontWeight: 'bold',
    borderRadius: 10,
    border: '1px solid green'
  };

  return (
    <div>
      <h2>Phonebook</h2>
      {statusBar ? <p style={statusBarStyle}>{statusBar}</p> : null}
      <Filter persons={persons} setShownPersons={setShownPersons}></Filter>
      <h2>Add a new</h2>
      <Form personsState={persons} setPersonsState={setPersons} setStatusBar={setStatusBar}></Form>
      <h2>Numbers</h2>
      {shownPersons.length? <Persons persons={shownPersons} setPersons={setPersons} setStatusBar={setStatusBar}></Persons>: <div>No contacts found</div>}
    </div>
  )
}
export default App;

