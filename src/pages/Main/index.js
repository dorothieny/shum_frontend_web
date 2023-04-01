import "./style.css"
import Smth from "./components/smth";
import { Link } from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";
import TrackListBlock from "../../components/TrackListBlock";
import ProfilesBlock from "../../components/ProfilesBlock";
import RightTopArrow from "../../svg/A_Right_Top_Arrow";
import Drawer from "../../components/DrawerUploader";
import { useDispatch, useSelector } from "react-redux";
import { useLocalStorage } from "../../hooks/useLocalStorage";


const MainScreen = () => {
    const [randomCard, setRandomCard] = useState({});
    const [newTracks, setNewTracks] = useState([]);
    const [followees, setFollowees] = useState([]);
    const [popularTracks, setPopularTracks] = useState([]);
    const [users, setUsers] = useState([]);
    const dispatch = useDispatch();
    const {isShowDrawer} = useSelector((state) => state.mainReducer);
    const {getItem} = useLocalStorage();
    const [authorized, setAuthorized] = useState(false);

    useEffect(() => {
       
        setAuthorized(getItem("token"))
    }, [])

    useEffect(() => {
    axios.get("http://localhost:3000/api/v1/random/")
    .then((r) => {
        setRandomCard(r.data);
    })
    }, [])

    useEffect(() => {
    axios.get("http://localhost:3000/api/v1/soundcards/")
    .then((r) => {
        setNewTracks(r.data);
    })
    }, [])

    useEffect(() => {
    axios.get("http://localhost:3000/api/v1/users/2/feed")
    .then((r) => {
        setFollowees(r.data);
    })
    }, [])

    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/popular")
        .then((r) => {
            setPopularTracks(r.data);
        })
    }, [])

    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/users")
        .then((r) => {
            setUsers(r.data);
        });
    }, []);


    return (
        <>
        <div className="grid-style">
            <div></div>
            <div className="shum-main-hero">
                <div></div>
                <div className="flex-column" style={{justifyContent:"space-between", padding: "48px 0 40px 0"}}>
                    <div>
                        <h1 className="h1-text-style" style={{padding: "4px 8px"}}>звуки окружают нас всегда.</h1>
                            <Smth />
                        <h1 className="h1-text-style" style={{padding: "4px 8px"}}> каждый шорох важен.</h1>
                    </div>

                    <TrackListBlock title={"Звук дня"} items={[randomCard]} lightTheme={false}/>
                </div>
                </div>
        </div>

        <div className="grid-style">
            <div></div>
            <TrackListBlock 
              linkTo={"/newest"}
            title={"Новое"} items={newTracks} icon={<RightTopArrow  size={40}/>}/>
        </div>

        <div style={{height: 48}}/>

        <div className="grid-style">
            <div></div>
            { authorized ? <ProfilesBlock title={"Подписки"} items={followees} showOutline={true} icon={<RightTopArrow  size={40}/>}/> :  <ProfilesBlock 
            linkTo={"/community"}
            title={"Сообщество"} items={users} icon={<RightTopArrow  size={40}/>}/>}
        </div>

        <div style={{height: 48}}/>

        <div className="grid-style">
            <div></div>
            <TrackListBlock 
             linkTo={"/popular"}
            title={"Популярное"} items={popularTracks} icon={<RightTopArrow  size={40}/>}/>
        </div>

        <div style={{height: 48}}/>

        <div className="grid-style">
            <div></div>
            {authorized && <ProfilesBlock 
            linkTo={"/community"}
            title={"Сообщество"} items={users} icon={<RightTopArrow  size={40}/>}/>}
        </div>

        <div style={{height: 128}}/>

        <div className="grid-style">
            <div></div>
        <div className="flex-row" style={{justifyContent: "space-between", paddingRight: 40}}> 
        <p className="p-text-style" style={{color: "var(--main-black)"}}>о нас</p>
        <p className="p-text-style" style={{color: "var(--main-black)"}}>политика конфиденциальности</p>
        <p className="p-text-style" style={{color: "var(--main-black)"}}>2023</p>
        </div>
        </div>

        <div style={{height: 24}}/>
        {/* <Drawer 
            title={"Загрузка нового шума"} 
            isOpen={isShowDrawer} 
            onClose={() => {
                dispatch({
                    type: "SET_MAIN_REDUCER",
                    payload: {
                        isShowDrawer: false
                    }
                })
            }}
            /> */}
        </>
    )

}

export default MainScreen;