import { Link } from "react-router-dom";
import "./style.css";
import Logo from "./components/Logo";
import React, {useEffect, useState} from "react";
import { useLocation } from 'react-router-dom';
import { useLocalStorage } from "../../hooks/useLocalStorage";
import Input from "../Input";
import { useSelector, useDispatch } from "react-redux";
import { ResponseList } from "./components/ResponseList";
import TextButton from "../ButtonText";
import { useNavigate } from "react-router-dom";

const Header = () => {
const [token, setToken] = useState(null);
const {getItem} = useLocalStorage();
const [searchPhrase, setSearchPhrase] = useState("");
const dispatch = useDispatch();
const {search} = useSelector(store => store.mainReducer);
  const location = useLocation();
  
  const handleSearch = () => {
    navigate(`/search?multiple=${searchPhrase}`);
    setSearchPhrase('');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  }
    useEffect(() => {
       const token = getItem('token');
        console.log(token);
        setToken(token);
    }, [])

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
          dispatch({
            type: "SET_MAIN_REDUCER",
            payload: { search: searchPhrase },
            })
        }, 1000)
    
        return () => clearTimeout(delayDebounceFn)
      }, [searchPhrase])

      const navigate = useNavigate();
   

    return (
        <div className="shum-main-header grid-style" style={{padding: "16px 0px"}}>
            { !(location?.pathname === "/auth") && 
            <><Link to="/" style={{paddingLeft: 40}} ><Logo /></Link>
            <div className="shum-main-navigation flex-row gap-64" style={{padding: "4px 8px", justifyContent: "space-between"}}>
                <div style={{position: 'relative', flex: 1}}>
                {search && <ResponseList />}
                <Input
                    width="100%"
                    isLight={false}
                    showLabel={false}
                    placeholder="Поиск"
                    value={searchPhrase}
                    onChange={(e) => setSearchPhrase(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <TextButton
                    style={{ position: 'absolute', top: 0, right: 0 }}
                    onClick={handleSearch}
                >
                    Поиск
                </TextButton>
                        </div>   
                
                <Link to={token ? "/profile" : "/auth"} style={{paddingRight: 40}}><h3 className="h3-text-style">{token ? "Профиль" : "Вход"}</h3></Link>
            </div>
            </>
            }
        </div>
    )
}
export default Header;