import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import CommentItem from '../components/CommentItem';
import { useFetching } from '../components/UI/hooks/useFetching';
import Loader from '../components/UI/Loader/Loader';

const PostPage = () => {
	const { id } = useParams();
	const [post, setPost] = useState({});
	const [comments, setComments] = useState([]);    
	const {
		isLoading: isPostLoading,
		fetching: fetchingPost,
	} = useFetching(async (postId) => {
		const response = await PostService.getById(postId);
		setPost(response.data);
	});
	const {
		isLoading: isCommentsLoading,
		fetching: fetchingComments,
	} = useFetching(async (postId) => {
		const response = await PostService.getCommentsById(postId);
		setComments(response.data);
	});


	useEffect(() => {
		fetchingPost(id);
        fetchingComments(id);
	}, []);

	return (
		<>
			{(isPostLoading && !isCommentsLoading) ? (
				<div>
					<Loader message={`Загрузка поста ${id}`} />
				</div>
			) : (
				<div style={{width: 800}}>
					<h1 className="font-bold text-3xl my-3 mb-5">
						Вы попали на страницу поста {id}
					</h1>
					<p>{post.title}</p>
					<p>{post.body}</p>
				</div>
			)}
			<h3 className="font-bold text-2xl my-3 mt-[50px]">Комментарии</h3>
			{isCommentsLoading ? (
				<div>
					<Loader message={`Загрузка комментов ${id}`} />
				</div>
			) : (
				<div className="Comments">
					{comments.length > 0 &&
						comments.map((c) => <CommentItem key={c.id} comment={c} />)}
				</div>
			)}
		</>
	);
};
export default PostPage;
