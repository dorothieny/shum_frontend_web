import { Link } from "react-router-dom";
import "./style.css";
import Logo from "./components/Logo";
import React, {useEffect, useState} from "react";
import { useLocation } from 'react-router-dom';
import { useLocalStorage } from "../../hooks/useLocalStorage";
import Input from "../Input";

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
        <div className="shum-main-header grid-style" style={{padding: "16px 0px"}}>
            { !(location?.pathname === "/auth") && 
            <><Link to="/" style={{paddingLeft: 40}} ><Logo /></Link>
            <div className="shum-main-navigation flex-row gap-64" style={{padding: "4px 8px", justifyContent: "space-between"}}>
                {/* <Link to="/"><h3 className="h3-text-style">Главная</h3></Link> */}
                {/* <Link to="/seach"><h3 className="h3-text-style">Поиск</h3></Link> */}
                <Input 
                    width={"50%"} 
                    isLight={false}
                        showLabel = {false}
                        placeholder="Поиск" onChange={(e) => console.log(e.target.value)} />
                <Link to={token ? "/profile" : "/auth"} style={{paddingRight: 40}}><h3 className="h3-text-style">{token ? "Профиль" : "Вход"}</h3></Link>
            </div>
            </>
            }
        </div>
    )
}
export default Header;