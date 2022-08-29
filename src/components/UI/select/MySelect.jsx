import React from 'react';
import classes from './MySelect.module.css';

const MySelect = ({ options, changeSelect, currentName, currentValue, defaultValue }) => {
	return (
		<div>
			<select
				className={classes.sortPost}
				name={currentName}
				onChange={changeSelect}
				value={currentValue}
			>
				<option value="" disabled>
					{defaultValue}
				</option>
				{options.map((option) => (
					<option key={option.id} value={option.id}>
						{option.value}
					</option>
				))}
			</select>
		</div>
	);
};
export default MySelect;
