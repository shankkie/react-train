import React, { useEffect, useRef, useContext } from 'react';
import AuthContext  from '../Context/auth-context';
import Style from '../../index.css';

const Cockpit = (props) => {
    const toggleBtnRef =  useRef(null);
    const authContext = useContext(AuthContext);
    useEffect( () => {

       console.log('[cockpitJS], useEffect done');

       const timer = setTimeout(() => {
            console.log('[cockpitJS], saved data to cloud');
        }, 1000);

       toggleBtnRef.current.click();

        // clean up work in useeffect like ngOnDestroy(angular), componentWillUnmount(react)
        return () => {
           clearTimeout(timer);
            console.log('[Cockpit.js] cleaning up useEffect')
        }
    }, []);

    return (
        <div>
            <h1>{props.title}</h1>
            {/* <button onClick={this.switchNameHandler.bind(this, 'Shankkie')} style={style}>Change Name</button> */}
            <button ref={toggleBtnRef} onClick={props.togglePersonsHandler} className={'btnBlue'}>Toggle</button>
            {/*<AuthContext.Consumer>*/}
            {/*    { (context) =>  <button onClick={context.login} className={'btnRed'}>Authenticate</button>}*/}
            {/*</AuthContext.Consumer>*/}
                {  <button onClick={authContext.login} className={'btnRed'}>Authenticate</button>}

        </div>
    )
};
// reacts stores the snapshot of this component, only when the input changes it will be rendered (same like shouldComponentUpdate but this is for functional component)
export default React.memo(Cockpit);
// export default Cockpit;
