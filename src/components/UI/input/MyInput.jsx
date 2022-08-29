import React from 'react';
import classes from './MyInput.module.css'
    
const MyInput = ({
	type = 'text',
	inputClass = 'inputPost',
	placeholder,
	...props
}) => {
	return (
		<input
			{...props}
			className={classes[inputClass]}
			type={type}
			placeholder={placeholder}
		/>
	);
};
export default MyInput;