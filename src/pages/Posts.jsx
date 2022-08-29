import React, { useEffect, useRef, useState } from 'react';
import PostFilter from '../components/PostFilter';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
import MyButton from '../components/UI/button/MyButton';
import { usePosts } from '../components/UI/hooks/usePosts';
import MyModal from '../components/UI/modal/MyModal';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';
import { useFetching } from '../components/UI/hooks/useFetching';
import { getPagesCount } from '../utils/pages';
import Pagination from '../components/UI/pagination/Pagination';
import { useObserver } from '../components/UI/hooks/useObserver';

const Posts = () => {
	const [posts, setPosts] = useState([]);
	const [filter, setFilter] = useState({ sort: 3, query: '', paging: 1 });
	const [visible, setVisible] = useState(false);
	const {
		isLoading,
		error: postError,
		fetching: fetchingPosts,
	} = useFetching(fetchPosts);
	const [totalPages, setTotalPages] = useState(0);

	const [limit, setLimit] = useState(15);
	const [page, setPage] = useState(1);

	const filterdPosts = usePosts(posts, filter.sort, filter.query);
	const lastElement = useRef();
	useObserver(
		lastElement,
		isLoading,
		filter.paging,
		page < totalPages && filter.paging === 4,
		() => setPage(page + 1)
	);

	async function fetchPosts() {
		const response = await PostService.getAll(limit, page);
		if (filter.paging < 4) {
			setPosts(response.data);
		} else {
			if (page === 1) {
				setPosts(response.data);
			} else {
				setPosts([...posts, ...response.data]);
			}
		}

		//console.info(response.headers['x-total-count']);
		setTotalPages(getPagesCount(response.headers['x-total-count'], limit));
	}

	useEffect(() => {
		const limitByFilter =
			filter.paging === 1
				? 15
				: filter.paging === 2
				? 20
				: filter.paging === 3
				? 30
				: limit;

		if (filter.paging === 4) {
			if (page > 1) setPage(1);
		} else {
			if (page > totalPages && totalPages > 0) {
				setPage(totalPages);
				return;
			}
		}

		setLimit(limitByFilter);
	}, [filter.paging, totalPages]);

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => {
		fetchingPosts();
	}, [limit, page]);

	const createPost = (newPost) => {
		const newPostId = Math.max(...posts.concat({ id: 0 }).map((p) => p.id)) + 1;

		setPosts((prevPosts) => [...prevPosts, { ...newPost, id: newPostId }]);
		setVisible(false);
	};

	const deletePost = (id) => {
		setPosts((prevPosts) => [...prevPosts.filter((p) => p.id !== id)]);
	};

	const changePage = ({ target }) => {
		if (target.tagName === 'SPAN' && Number(target.textContent) !== page)
			setPage(Number(target.textContent));
	};

	return (
		<div className="Posts">
			{/* <h3 className="font-bold text-3xl m-5">{value?value:'Text in input' }</h3>
			<input
				className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg ml-2 mb-5 focus:ring-blue-500 focus:border-blue-500 block w-[350px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				type="text"
				value={value}
				onChange={(e) => changeHandler(e)}
			></input> */}

			<MyModal visible={visible} setVisible={setVisible}>
				<PostForm createPost={createPost} />
			</MyModal>

			<MyButton btnClass="btnAdd" onClick={() => setVisible(true)}>
				Создать пост
			</MyButton>

			<PostFilter setFilter={setFilter} filter={filter} />
			<PostList
				posts={filterdPosts}
				deletePost={deletePost}
				title="Список постов"
			/>
			<div
				ref={lastElement}
				style={{
					height: 10,
					display: filter.paging < 4 ? 'none' : '',
				}}
			></div>
			{isLoading && (
				<div
					style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}
				>
					<Loader message="Загрузка постов..." />
				</div>
			)}
			{postError && (
				<div
					style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}
				>
					<h1 className="postError">{`Произошла ошибка ${postError}`}</h1>
				</div>
			)}
			{filter.paging < 4 && (
				<Pagination
					totalPages={totalPages}
					page={page}
					changePage={changePage}
				/>
			)}
		</div>
	);
};
export default Posts;
