import React from 'react';
import PostItem from './PostItem';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const PostList = ({ posts, title, deletePost }) => {
	return (
		<div>
			<h1 className="font-bold text-3xl text-center m-5">
				{posts.length ? title : 'Посты не найдены'}
			</h1>
			<TransitionGroup>
				{posts.length > 0 &&
					posts.map((post) => (
						<CSSTransition
							key={post.id}
							timeout={500}
							classNames="post"
							unmountOnExit
						>
							<PostItem post={post} deletePost={() => deletePost(post.id)} />
						</CSSTransition>
					))}
			</TransitionGroup>
		</div>
	);
};
export default PostList;
