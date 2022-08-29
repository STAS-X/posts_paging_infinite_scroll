import React, { useContext, useState } from 'react';
import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';
import { AuthContext } from '../context';

const Login = () => {
	const { isAuth, setIsAuth } = useContext(AuthContext);
	const [data, setData] = useState({});

	const handleChange = ({ target }) => {
		setData((prevData) => {
			return { ...prevData, [target.name]: target.value };
		});
	};
    const handleLogin = (e) => {
			e.stopPropagation();
			localStorage.setItem('auth', !isAuth);
			setIsAuth((prevAuth) => !prevAuth);
		};

	return (
		<div>
			<h1 className="font-bold text-3xl my-3 mb-5">Страница для логина</h1>
			<form>
				<MyInput
					type="text"
                    name="login"
					placeholder="Введите логин"
					onChange={handleChange}
				/>
				<MyInput
					type="password"
                    name="password"
					placeholder="Введите пароль"
					onChange={handleChange}
				/>
				<MyButton
					btnClass="btnAdd"
					onClick={handleLogin}
                    disabled={!(data.login && data.password)}

				>
					Войти на сайт
				</MyButton>
			</form>
		</div>
	);
};
export default Login;
