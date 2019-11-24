import React from 'react';

const withClassFn = (WrappedComponent, classes) => {
    return props => (
        <div className={classes}>
            <WrappedComponent {...props}/>
        </div>
    )
};

export default withClassFn;

