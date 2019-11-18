import React, { useEffect } from 'react';

const style = {
    backgroundColor: '#006699',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    color: '#fff',
    cursor: 'pointer'
};

const Cockpit = (props) => {
    useEffect( () => {
        console.log('[cockpitJS], useEffect done');

       const timer = setTimeout(() => {
            console.log('[cockpitJS], saved data to cloud');
        }, 1000)
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
            <button onClick={props.togglePersonsHandler} style={style}>Toggle</button>
        </div>
    )
};
// reacts stores the snapshot of this component, only when the input changes it will be rendered
export default React.memo(Cockpit);
