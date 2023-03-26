import "./style.css"
import Smth from "./components/smth";
import { Link } from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";
import TrackListBlock from "../../components/TrackListBlock";
import ProfilesBlock from "../../components/ProfilesBlock";

const MainScreen = () => {
    const [randomCard, setRandomCard] = useState({});
    const [newTracks, setNewTracks] = useState([]);
    const [followees, setFollowees] = useState([]);
    const [popularTracks, setPopularTracks] = useState([]);


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
            axios.get("http://localhost:3000/api/v1/users/1/followed")
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
            <TrackListBlock title={"Новое"} items={newTracks}/>
        </div>

        <div style={{height: 48}}/>

        <div className="grid-style">
            <div></div>
            <ProfilesBlock title={"Подписки"} items={followees}/>
        </div>

        <div style={{height: 48}}/>

        <div className="grid-style">
            <div></div>
            <TrackListBlock title={"Популярное"} items={popularTracks}/>
        </div>

        </>
    )

}

export default MainScreen;