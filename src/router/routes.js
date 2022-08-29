import { Navigate } from "react-router-dom";
import About from "../pages/About";
import Error from "../pages/Error";
import Login from "../pages/Login";
import PostPage from "../pages/PostPage";
import Posts from "../pages/Posts";

export const privateRoutes = [
	{ path: '/about', component: <About />, exact: false },
	{ path: '/posts', component: <Posts />, exact: true },
	{ path: '/posts/:id', component: <PostPage />, exact: true },
	{ path: '/', component: <Navigate to="/posts" replace />, exact: false },
	{ path: '/login', component: <Navigate to="/posts" replace />, exact: false },
	{ path: '*', component: <Error />, exact: true },
];

export const publicRoutes = [
	{ path: '/about', component: <About />, exact: false },
	{ path: '/login', component: <Login />, exact: false },
	{ path: '/', component: <Navigate to="/login" replace />, exact: false },
	{ path: '*', component: <Error />, exact: true },
];