import React, { useState } from 'react';
import MySelect from './UI/select/MySelect';
    
const PostSort = ({setSortBy}) => {
    const [value, setValue] = useState(3);

    const options = [
			{ id: 1, value: 'По названию' },
			{ id: 2, value: 'По содержанию' },
			{ id: 3, value: 'По порядку' },
		];

    const handlerChange = ({target}) => {
        setValue(target.value);
        setSortBy(target.value);
    }
    
    return (
			<div>
				<hr style={{ margin: '15px 0' }} />
				<h1 className="font-bold text-2xl text-left m-5">
					Сортировать посты по:
				</h1>
				<MySelect
					options={options}
					changeSelect={handlerChange}
					currentSort={value}
					defaultValue={'Сортировать посты'}
				/>
			</div>
		);
};
export default PostSort;
