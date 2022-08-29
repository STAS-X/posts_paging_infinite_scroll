import React from 'react';
import classes from './Loader.module.css';
    
const Loader = ({message}) => {
    
    return (
        <div className={classes.container}>
           <div className={classes.loader}></div>
           <div className={classes.message}>{message}</div>
        </div>

    );
};
export default Loader;