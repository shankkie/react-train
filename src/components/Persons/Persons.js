import React from 'react';
import Person from './Person/Person';

const Persons = (props) => props.persons.map( (state, index) => {
      return (
           <Person name={state.name} age={state.age} key={index} click={() => props.deleteNameHandler(index)}
             changeName= {(evt) => props.nameChangeHandler(evt, index)}>
                Testing
             </Person>
       )
     });

export default Persons;
