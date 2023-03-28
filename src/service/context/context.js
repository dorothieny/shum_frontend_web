import { createContext, useState } from "react";
export const AuthContext = createContext();

export const setSessionInLocalStorage = (token) => {
localStorage.setItem('session', JSON.stringify(token))
return true
};

export const getSession = () => {
return JSON.parse(localStorage.getItem('session'));

};

export const ProvideAuth = ({ children }) => {
/**
* setToken from localstorage
*/
const auth = getSession();
const [session, setSession] = useState(auth || '');
const setAuth = (token) => {
setSession(token);
setSessionInLocalStorage(token);
};
const { user, token } = session;

return (
<AuthContext.Provider value={{ user, token, setAuth }}>
    {children}
</AuthContext.Provider>
)
};
