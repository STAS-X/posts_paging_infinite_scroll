import React, { useContext, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Navbar from './components/UI/Navbar/Navbar';
import { AuthContext } from './context';
import './styles/app.css';

function App() {
	const { isAuth: auth } = useContext(AuthContext);
	const [isAuth, setIsAuth] = useState(auth);

	return (
		<AuthContext.Provider value={{ isAuth, setIsAuth }}>
			<BrowserRouter>
				<Navbar />
				<AppRouter />
			</BrowserRouter>
		</AuthContext.Provider>
	);
}

export default App;
