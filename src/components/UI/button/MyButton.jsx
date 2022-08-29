import React from 'react';
import classes from './MyButton.module.css'
    
const MyButton = ({children, btnClass, ...props}) => {
    
    return (
			<button {...props} className={classes[btnClass]}>
				{children}
			</button>
		);
};
export default MyButton;