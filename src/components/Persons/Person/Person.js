import React, { PureComponent} from 'react';
import PropTypes from 'prop-types';
import Aux from '../../HOC/Aux';
import './Person.css';
import WithClass from "../../HOC/WithClass";
import withClassFn  from '../../HOC/withClassFn';
// if we want the component to update for all the props instead of one we can extend PureComponent
// HOC high order components - basically that wrap other components
class Person extends PureComponent {

    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Person.js] getDerivedFromProps');
    //     return state;
    // }

    // commenting the below to use purecomponent
    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     console.log('[Person.js] shouldComponentUpdate');
    //     if( nextProps.name !== this.props.name) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Person.js] getSnapshotBeforeUpdate');
        return { message: 'shout from get snapshot before update'};
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Person.js] componentDidUpdate');
        console.log('[Person.js] componentDidUpdate snapshot:', snapshot)
    }
    // unsubscribe
    componentWillUnmount() {
        console.log('[Person.js] componentWillUnmount');
    }

    render() {
        console.log('[Person.js] rendering..');
        // return (
        //     <div className="Person">
        //         <h1 onClick={this.props.click}>Hi from {this.props.name} and I'm {this.props.age} years old</h1>
        //         <p>{this.props.children}</p>
        //         <form>
        //             <input type="text" onChange={this.props.changeName}  value={this.props.name}/>
        //         </form>
        //     </div>
        // )

        // Adjacent JSX without the enclosing tag

        // return [
        //     <h1 key="i1" onClick={this.props.click}>Hi from {this.props.name} and I'm {this.props.age} years old</h1>,
        //     <p key="i2">{this.props.children}</p>,
        //     <form key="i3">
        //     <input type="text" onChange={this.props.changeName}  value={this.props.name}/>
        //     </form>
        // ]
        return (
            <Aux>
                <h1 key="i1" onClick={this.props.click}>Hi from {this.props.name} and I'm {this.props.age} years old</h1>
                <p key="i2">{this.props.children}</p>
                <form key="i3">
                    <input type="text" onChange={this.props.changeName}  value={this.props.name}/>
                </form>
            </Aux>
        )
    }
}

export default withClassFn(Person, 'something');
