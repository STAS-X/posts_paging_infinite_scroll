import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context';

const Navbar = () => {
	const { isAuth, setIsAuth } = useContext(AuthContext);

	const handleLogout = () => {
		localStorage.removeItem('auth');
        setIsAuth(false);
	};
	return (
		<div className="navbar">
			<div className="navbar_link">
				<Link className="navbar_path" to="/about">
					О сайте
				</Link>
				{' | '}
				{isAuth ? (
					<>
						<Link className="navbar_path" to="/posts">
							Посты
						</Link>
						{' | '}
						<Link className="navbar_path" to="/login" onClick={handleLogout}>
							Выйти
						</Link>
					</>
				) : (
					<Link className="navbar_path" to="/login">
						Войти
					</Link>
				)}
			</div>
		</div>
	);
};
export default Navbar;
