import React, { useState } from 'react'

const Filter = ({ persons, setShownPersons }) => {
  const [filterInput, setFilterInput] = useState('');

  const handleFilterInputChange = (event) => {
    setFilterInput(event.target.value);
    console.log(persons);
    
    if (persons.length == 0)
      setShownPersons([]);
    else if (filterInput === '')
      setShownPersons(persons);
    else
      setShownPersons(persons.filter(person => person.name.toLowerCase().includes(event.target.value.toLowerCase())));
  }

  return (
    <div>
      filter shown with <input value={filterInput} onChange={handleFilterInputChange}></input>
    </div>
  )
}

export default Filter