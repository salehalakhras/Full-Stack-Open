import React, {useState} from 'react'

const Form = ({ personsState, setPersonsState }) => {
    const [newName, setNewName] = useState({
        name: '',
        number: ''
      })

    const handleSubmit = (event) => {
        event.preventDefault()
        if(personsState.find((p) => p.name === newName.name))
          alert(newName.name + ' already exists');
        else
        setPersonsState(personsState.concat(newName))
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
