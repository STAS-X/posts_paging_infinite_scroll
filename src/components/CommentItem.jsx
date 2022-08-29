import React from 'react';

const CommentItem = ({ comment }) => {
	const { id, name, body } = comment;

	return (
		<div className="comment">
			<div className="comment_content">
				<strong>
					{id}. {name}
				</strong>
				<div>{body}</div>
			</div>
		</div>
	);
};
export default CommentItem;
