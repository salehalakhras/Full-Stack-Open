import React, {useState} from 'react';
import personsAPI from '../services/personsAPI';

const Form = ({ personsState, setPersonsState, setStatusBar }) => {
    const [newName, setNewName] = useState({
        name: '',
        number: '',
      })

    const handleSubmit = (event) => {
        event.preventDefault()
        if(personsState.find((p) => p.name === newName.name)){
            if(confirm(`${newName.name} already exists do you want to update the number?`)){
                const updatedPerson = {
                    ...personsState.find((p) => p.name === newName.name),
                    number: newName.number
                }
                personsAPI.update(updatedPerson.id ,updatedPerson)
                .then(response => {
                    setPersonsState(personsState.map((p) => p.id === response.id? response : p));
                    setStatusBar(`${newName.name} number updated`);
                })
            }
        }
        else{
            personsAPI.create(newName)
            .then(response => {
                setPersonsState(personsState.concat(response));
                setStatusBar(`${newName.name} with number: ${newName.number} added.`)
            })
        }

        setNewName({
          name: '',
          number: '' 
        })
      }
    
      const handleNameInputChange = (event) => {
        setNewName({...newName, name: event.target.value})
      }
    
      const handleNumberInputChange = (event) => {
        setNewName({...newName, number: event.target.value})
      }
  return (
    <div>
    <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName.name} onChange={handleNameInputChange}/>
        </div>
        <div>
        number: <input value={newName.number} onChange={handleNumberInputChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )
}

export default Form