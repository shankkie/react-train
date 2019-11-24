import React, { PureComponent} from 'react';
import PropTypes from 'prop-types';
import Aux from '../../HOC/Aux';
import './Person.css';
import WithClass from "../../HOC/WithClass";
import withClassFn  from '../../HOC/withClassFn';
import AuthContext from '../../Context/auth-context';

// if we want to check the component for changes on all the props instead of one we can extend PureComponent to return true shouldComponentUpdate
// HOC high order components - basically that wrap other components
class Person extends PureComponent {
    constructor(props) {
        super(props);
        this.elementRef = React.createRef(); // react 16.3 or more
    }

    static contextType = AuthContext;
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Person.js] getDerivedFromProps');
    //     return state;
    // }

    // commenting the below to use PureComponent()
    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     console.log('[Person.js] shouldComponentUpdate');
    //     if( nextProps.name !== this.props.name) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    componentDidMount() {
        this.inputElementRef.focus();
        // this.elementRef.current.focus();
        console.log(this.context.authenticated); // can used static contextType to use context inside lifecycle hook
    }

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
                <AuthContext.Consumer>
                    { (context) => context.authenticated ? <p>Authenticated</p> : <p>please login</p> }
                </AuthContext.Consumer>
                <h1 key="i1" onClick={this.props.click}>Hi from {this.props.name} and I'm {this.props.age} years old</h1>
                <p key="i2">{this.props.children}</p>
                <form key="i3">
                    <input type="text"
                           ref={ (inputEl) => {this.inputElementRef = inputEl} }
                           // ref={this.elementRef}
                           onChange={this.props.changeName}
                           value={this.props.name}/>
                </form>
            </Aux>
        )
    }
}

// propTypes- we can add it to any JS obj as react will watch it in dev mode
Person.propTypes = {
    click : PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number

};



export default withClassFn(Person, 'something');
