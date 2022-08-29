import React from 'react';
import { getPagesArray } from '../../../utils/pages';

const Pagination = ({totalPages, page, changePage}) => {

	return (
		<div className="page_wrapper" onClick={(e) => changePage(e)}>
			{getPagesArray(totalPages).map((p) => (
				<span key={p} className={page === p ? 'page page_current' : 'page'}>
					{p}
				</span>
			))}
		</div>
	);
};
export default Pagination;
