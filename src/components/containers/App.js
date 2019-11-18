// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import './App.css';
// import Person from '../Persons/Person/person';
import Persons from '../Persons/Persons';
import Cockpit from "../cockpit/cockpit";

class App extends Component {

    constructor(props) {
        super(props);
        console.log('[App.js constructor');
        this.state = {
            persons: [
                { name: 'Shankar', age: 33},
                { name: 'Sasi', age: 31},
                { name: 'Tiara', age: 7}
            ],
            showPersons: false,
            showCockpit: true,
            counterState: 0
        }
    }

    static getDerivedStateFromProps(props, state) {
        console.log('[App.js] getDerivedState', props);
        return state;
    }

    componentDidMount() {
        console.log('[App.js] component did mount');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[App.js] component did update');
        return true;
    }

    deleteNameHandler = (idx) => {
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(idx, 1);
        this.setState({persons: persons})
    };

  nameChangeHandler = (evt, idx) => {
      const person = {...this.state.persons[idx]};
      person.name = evt.target.value;

      const persons = [...this.state.persons];
      persons[idx] = person;

      this.setState((prevState, props) => {
          return {
              persons: persons,
              counterState: prevState.counterState + 1
          }
      })
  };

  togglePersonsHandler = () => {
    const doShow = this.state.showPersons;
    this.setState({
      showPersons: !doShow
    })
  };
  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons =(
        <div>
          {/*{this.state.persons.map( (state, index) => {*/}
          {/*   return (*/}
          {/*        <Person name={state.name} age={state.age} key={index} click={() => this.deleteNameHandler(index)}*/}
          {/*          changeName= {(evt) => this.nameChangeHandler(evt, index)}/>*/}
          {/*    )*/}
          {/*  })}*/}
          <Persons persons={this.state.persons} deleteNameHandler={this.deleteNameHandler} nameChangeHandler={this.nameChangeHandler}/>
        </div>
      )
    }
    return (
        <div className="App">
            <button onClick={() =>this.setState({showCockpit: false})}>Remove cockpit</button>
            { this.state.showCockpit ? <Cockpit togglePersonsHandler={this.togglePersonsHandler}  person={this.state.persons} title={this.props.appTitle}/> : null}
          {persons}
        </div>
    );
  }
}

export default App;

// const [persons, setPersons] = useState({persons: [
//   { name: 'Shankar', age: 33},
//   { name: 'Sasi', age: 31},
//   { name: 'Tiara', age: 7}
//   ]})
// const [otherState, setOtherState] = useState({ otherState: 'Some State'});
// const switchNameHandler = () => {
//   setPersons({
//     persons: [
//       { name: 'Scimble', age: 33},
//       { name: 'Kals', age: 31},
//       { name: 'Tocoyo', age: 7}
//     ]
//   })
// }
