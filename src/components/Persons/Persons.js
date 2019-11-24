import React, { Component }from 'react';
import Person from './Person/Person';
import AuthContext  from  '../Context/auth-context';

class Persons extends Component {
   render() {
        return (
            this.props.persons.map( (person, index) => {
                        return (
                            <Person name={person.name} age={person.age} key={index} click={() => this.props.deleteNameHandler(index)} login={this.props.authenticate}
                                    changeName= {(evt) => this.props.nameChangeHandler(evt, index)}>
                            </Person>
                        )
                    } )
        )

   }
}
export default Persons;
