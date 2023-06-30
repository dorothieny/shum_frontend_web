import Tag from "../Tag";
import "./style.css";
import LikeIcon from "../../svg/A_Like_Icon";
import DownloadIcon from "../../svg/A_Download_Icon";
import MoreIcon from "../../svg/A_More_Icon";
import React, {useState, useEffect} from "react";
import PlayIcon from "../../svg/A_Play_Icon";
import { useSelector } from "react-redux";
import PauseIcon from "../../svg/A_Pause_Icon";
import FilledLikeIcon from "../../svg/A_Filled_Like_Icon";
import axios from "axios";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const TrackInList = ({item, isLight=true, onTagClick=() => null, onClick=() => null}) => {
    const imageUrl = item?.soundcard ? item?.soundcard?.image?.url : item?.image?.url;
    const location = item?.soundcard?.location || item?.location;
    const name = item?.soundcard?.name || item?.name;
    const id = item?.soundcard?.id || item?.id;
    const [visible, setVisible] = useState(false);
    const {shumId, isPlaying, userId} = useSelector(state => state.mainReducer);
    const [liked, setLiked] = useState(false);
    const {getItem} = useLocalStorage();
    
    const likeSmth = (e) => {
        console.log()
    e.preventDefault();
    axios.post(`http://localhost:3000/api/v1/soundcards/${id}/likes`, {like: {}},
    { headers: {
        Authorization: `${getItem("token")}`,
        "Content-Type": "application/json",
    }})
    }

    const unlikeSmth = (e) => {
        e.preventDefault();
        axios.delete(`http://localhost:3000/api/v1/soundcards/${id}/likes/${item?.likes?.filter((item) => item?.user_id === userId)?.[0]?.id}`, 
        { headers: {
            "Authorization": `${getItem("token")}`
        }})
        }

    useEffect(() => {
    const s = Boolean(item?.likes?.filter((item) => item?.user_id === userId).length);
    setLiked(s);
    }, [item]);

    return (
        <div className="flex-row gap-16" 
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        onClick={() => onClick(item?.id)}
        >
            <div 
            className="shum-track-image flex-column"
            style={{
                overflow:"hidden",
                width: 155, 
                height: 155, 
                position: "relative",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "var(--main-white)", 
                borderRadius: "50%",
                border: isLight && !imageUrl ? "2px solid var(--main-green)" : "none"
                }}>
                   {shumId === item?.id && isPlaying ?
                    <PauseIcon style={{zIndex: 1}} color={!imageUrl ?  "var(--main-green)" : " var(--main-white)"}/>: 
                    <PlayIcon style={{zIndex: 1}} color={!imageUrl ?  "var(--main-green)" : " var(--main-white)"}/>}
                    {imageUrl && <div className="inside" 
                    style={{
                        width: 155,
                        transform: visible ? "scale(1.1)" : "none",
                        transition: "all 0.3s ease-in-out",
                        height: 155,
                        backgroundImage: `url("http://localhost:3000${imageUrl}")`, 
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",}}/>}
                        
                </div>

                <div className="flex-row" style={{width: "calc(100% - 171px)", justifyContent: "space-between"}}>
                
                <div 
                    className="flex-column" 
                    style={{paddingTop: 16, paddingBottom: 16, justifyContent: "space-between"}}>
                    
                    <div>
                    <h3 className={"h3-text-style"}>
                        {name}
                    </h3>
                    <p className="p-text-style">{location}</p>
                    </div>
                   
                    <div className="flex-row gap-8" style={{flexWrap: "wrap"}}>{item?.tags?.map((item) => {
                        return <Tag key={item.id} tagname={item?.tagname} id={item?.id} 
                        onClick={(e) => {
                            e.stopPropagation();
                            onTagClick(item?.id)
                        }}/>
                    })}</div>
                </div>

                <div 
                className="flex-column" 
                style={{paddingTop: 16, paddingBottom: 16, justifyContent: "space-between", alignItems: "flex-end"}}>
                    <div>
                    <h3 className={"h3-text-style"}>
                        2:45
                    </h3>
                    </div>
                   
                    <div className="flex-row gap-16">  
                      {visible && (
                        <>
                            <DownloadIcon color={isLight ? "var(--main-black)" : "var(--main-white)"}/>
                            {liked ? 
                            <FilledLikeIcon 
                             onClick={(e) => unlikeSmth(e)}
                            color={isLight ? "var(--main-black)" : "var(--main-white)"}/> : 
                            <LikeIcon 
                            onClick={(e) => {
                                if(getItem("token")) {
                                likeSmth(e)
                                } else {
                                    window.location.href = "/auth";
                                }
                            }}
                            color={isLight ? "var(--main-black)" : "var(--main-white)"}/>}
                            <MoreIcon color={isLight ? "var(--main-black)" : "var(--main-white)"}/>
                        </>
                        )}
                    </div>
                </div>

            </div>
        </div>
    )
}
export default TrackInList;