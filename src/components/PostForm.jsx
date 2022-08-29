import React, { useState } from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

const PostForm = ({createPost}) => {
	const [post, setPost] = useState({title: '', body:''})

	const changeInputState = ({target}) => {
		setPost((prev) => {
			return { ...prev, [target.name]: target.value };
		});
	}

    const addNewPost = (e) => {
        e.preventDefault();

        const newPost = {...post};
        createPost(newPost);
        setPost({title: '', body:''});
    }


	return (
		<form>
			<h3 className="font-bold text-3xl m-5">Форма добавления поста</h3>
			<MyInput
				placeholder="Название поста"
				name="title"
				value={post.title}
				onChange={changeInputState}
				style={{ marginTop: 5 }}
			/>
			<MyInput
				placeholder="Описание поста"
				name="body"
				value={post.body}
				onChange={changeInputState}
			/>

			<MyButton
				btnClass="btnAdd"
				disabled={!post.title || !post.body ? true : false}
				onClick={addNewPost}
			>
				Добавить пост
			</MyButton>
		</form>
	);
};
export default PostForm;
