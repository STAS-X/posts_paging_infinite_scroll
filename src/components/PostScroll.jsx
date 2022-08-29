import React, { useState } from 'react';
import MySelect from './UI/select/MySelect';
    
const PostScroll = ({setScrollBy}) => {
    const [value, setValue] = useState(3);

    const options = [
			{ id: 1, value: 'Постранично' },
			{ id: 2, value: 'П' },
		];

    const handlerChange = ({target}) => {
        setValue(target.value);
        setScrollBy(target.value);
    }
    
    return (
			<div>
				<hr style={{ margin: '15px 0' }} />
				<h1 className="font-bold text-2xl text-left m-5">
					Перелистывание постов по:
				</h1>
				<MySelect
					options={options}
					changeSelect={handlerChange}
					currentSort={value}
					defaultValue={'Пагинация постов'}
				/>
			</div>
		);
};
export default PostScroll;
