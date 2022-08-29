import React, { useState } from 'react';
import MyInput from './UI/input/MyInput';
import MySelect from './UI/select/MySelect';

const PostFilter = ({ filter, setFilter }) => {
	const [value, setValue] = useState({ sort: 3, paging: 1 });

	const sortOptions = [
		{ id: 1, value: 'По названию' },
		{ id: 2, value: 'По содержанию' },
		{ id: 3, value: 'По порядку' },
	];

	const pageOptions = [
		{ id: 1, value: 'по 15' },
		{ id: 2, value: 'по 20' },
		{ id: 3, value: 'по 30' },
		{ id: 4, value: 'все' },
	];

	const handlerChange = ({ target }) => {
		setValue({ ...value, [target.name]: Number(target.value) });
		setFilter({ ...filter, [target.name]: Number(target.value) });
	};

	return (
		<div>
			<hr style={{ margin: '15px 0' }} />

			<h3 className="font-bold text-2xl m-5">Поиск постов:</h3>
			<MyInput
				value={filter.query}
				onChange={({ target }) => setFilter({ ...filter, query: target.value })}
				placeholder="Поиск"
			/>

			<hr style={{ margin: '15px 0' }} />
			<h1 className="font-bold text-2xl text-left m-5">Сортировать посты:</h1>
			<MySelect
				currentName="sort"
				options={sortOptions}
				changeSelect={handlerChange}
				currentValue={value.sort}
				defaultValue={'Сортировать посты'}
			/>

			<hr style={{ margin: '15px 0' }} />
			<h1 className="font-bold text-2xl text-left m-5">Перелистывать посты:</h1>
			<MySelect
				currentName="paging"
				options={pageOptions}
				changeSelect={handlerChange}
				currentValue={value.paging}
				defaultValue={'Перелистывать по'}
			/>
		</div>
	);
};
export default PostFilter;
