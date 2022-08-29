import React from 'react';
import { useNavigate } from 'react-router-dom';
import MyButton from './UI/button/MyButton';

const PostItem = ({ post, deletePost }) => {
	const { id, title, body } = post;
	const router = useNavigate();

	return (
		<div className="post">
			<div className="post_content">
				<strong>
					{id}. {title}
				</strong>
				<div>{body}</div>
			</div>
			<div className="post_btn">
				<MyButton
					btnClass="btnShow"
					onClick={() => {
						router(`/posts/${id}`);
					}}
				>
					Показать пост
				</MyButton>
				<MyButton
					btnClass="btnDel"
					onClick={() => {
						deletePost(id);
					}}
				>
					Удалить пост
				</MyButton>
			</div>
		</div>
	);
};
export default PostItem;
