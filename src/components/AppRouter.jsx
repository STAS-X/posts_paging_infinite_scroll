import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthContext } from '../context';
import { privateRoutes, publicRoutes } from '../router/routes';

const AppRouter = () => {

    const {isAuth} = useContext(AuthContext);

	return (
		<Routes>
			{/* <Route path="/about" element={<About />}></Route>
			<Route exact path="/posts" element={<Posts />}></Route>
			<Route exact path="/posts/:id" element={<PostPage />}></Route>
			<Route path="/" element={<Navigate to="/posts" replace />}></Route>
			<Route exact path="*" element={<Error />}></Route> */}
			{isAuth?privateRoutes.map((route, ind) => (
				<Route
					key={ind}
					path={route.path}
					element={route.component}
					exact={route.exact}
				/>
			))
			:
			publicRoutes.map((route, ind) => (
				<Route
                    
					key={ind}
					path={route.path}
					element={route.component}
					exact={route.exact}
				/>
			))}
			
		</Routes>
	);
};
export default AppRouter;
