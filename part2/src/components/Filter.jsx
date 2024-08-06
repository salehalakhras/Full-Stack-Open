import React, { useState } from 'react'

const Filter = ({ persons, setShownPersons}) => {
    const [filterInput, setFilterInput] = useState('');

    const handleFilterInputChange = (event) => {
        setFilterInput(event.target.value);
        setShownPersons(persons.filter(person => person.name.toLowerCase().includes(event.target.value.toLowerCase())));
    }

  return (
    <div>
      filter shown with <input value={filterInput} onChange={handleFilterInputChange}></input>
    </div>
  )
}

export default Filter