import React from 'react';
import personsAPI from '../services/personsAPI';

const Persons = ({ persons, setPersons, setStatusBar }) => {

    const handleDeleteClick = (id) => {
        if (confirm('Are you sure you want to delete ' + persons.find(person => person.id === id).name + '?')) {
            const name = persons.find(person => person.id === id).name;
            personsAPI.remove(id)
                .then(response => {
                        setPersons(persons.filter(p => p.id !== id ? p : undefined))
                        setStatusBar(`Info: ${name} is deleted successfully`);
                })
                .catch(err => {
                    setStatusBar(`Info: could not delete ${name}`);
                });
        }
    }
    return (
        <div>
            {persons.map(person => (
                <p key={person.id}>
                    {person.name} : {person.number}
                    <button key={person.id} onClick={() => handleDeleteClick(person.id)}>Delete</button>
                </p>
            ))}
        </div>
    )
}

export default Persons