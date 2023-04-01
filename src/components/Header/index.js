import { Link } from "react-router-dom";
import "./style.css";
import Logo from "./components/Logo";
import React, {useEffect, useState} from "react";
import { useLocation } from 'react-router-dom';
import { useLocalStorage } from "../../hooks/useLocalStorage";

const Header = () => {
const [token, setToken] = useState(null);
const {getItem} = useLocalStorage();

  const location = useLocation();

  console.log(location.pathname);

    useEffect(() => {
       const token = getItem('token');
        console.log(token);
        setToken(token);
    }, [])

    // if(location?.pathname === "/auth") return null;

    return (
        <div className="shum-main-header grid-style" style={{padding: "16px 0", height: 32 }}>
            { !(location?.pathname === "/auth") && 
            <><div style={{padding: "0 40px"}}><Logo /></div>
            <div className="shum-main-navigation flex-row gap-64" style={{padding: "4px 8px"}}>
                <Link to="/"><h3 className="h3-text-style">Главная</h3></Link>
                <Link to="/seach"><h3 className="h3-text-style">Поиск</h3></Link>
                <Link to={token ? "/profile" : "/auth"}><h3 className="h3-text-style">{token ? "Профиль" : "Вход"}</h3></Link>
            </div>
            </>
            }
        </div>
    )
}
export default Header;