import { createContext } from "react";

export const AuthContext = createContext({
	isAuth: localStorage.getItem('auth') ? localStorage.getItem('auth') : false,
});