
import React, {useEffect, useState} from'react'
import Button from '../Button';
import PlusIcon from '../../svg/A_Plus_Icon';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import PlayIcon from '../../svg/A_Play_Icon';
import PauseIcon from '../../svg/A_Pause_Icon';
import "./style.css";

const Player = () => {
  const {shumId, isPlaying} = useSelector(state => state.mainReducer);
  const [shum, setShum] = useState(null);
  const imageUrl = shum?.soundcard?.image?.url || null;
  const [file, setFile] = useState(null);

  const dispatch = useDispatch();

    useEffect(() => {
        if(shumId) {
             axios.get(`http://localhost:3000/api/v1/soundcards/${shumId}`)
             .then((r) => {
                setShum(r.data);
                setFile(`http://localhost:3000${r.data?.soundcard?.audiofile?.url}`);
             })
        }
       
    },[shumId])


    useEffect(() => {
        if(file) {
            play("play");
        }
    }, [file])

    useEffect(() => {
        if(!isPlaying) {
            pause("play");
        } else {
            play("play");
        }
    }, [isPlaying])

    const play =(id) => {
        document.getElementById(id)?.play();
        // audion.play();
        dispatch({
            type: "SET_MAIN_REDUCER", 
            payload: {
                isPlaying: true
            }
        })
    }

    const pause =(id) => {
        document.getElementById(id)?.pause();
        dispatch({
            type: "SET_MAIN_REDUCER", 
            payload: {
                isPlaying: false
            }
        })
    }


    return (
        <div 
        className="flex-column gap-16"
        style={{
             bottom: 0,
             padding: 10,
             pointerEvents: "auto"
              }}>
                {(shum && file) && <div 
                    className="shum-track-image flex-column"
                    style={{
                        overflow:"hidden",
                        width: "100%", 
                        height: 155, 
                        position: "relative",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "var(--main-white)", 
                        borderRadius: 10,
                        pointerEvents: "auto"
                    }}>
                    {isPlaying ? <PauseIcon style={{zIndex: 1}} 
                        onClick={(() => pause("play"))}
                        color={!imageUrl ?  "var(--main-green)" : " var(--main-white)"}/>
                    : <PlayIcon style={{zIndex: 1}} 
                    onClick={(() => {
                        console.log("play")
                        Promise.resolve()
                        .then(() => {
                            // touchStarted();
                        })
                        .then(() => {
                            play("play");
                        })
                        })}
                    color={!imageUrl ?  "var(--main-green)" : " var(--main-white)"}/>}
                    
                    {imageUrl && <div className="inside" 
                    style={{
                        width: "100%",
                        height: 155,
                        backgroundImage: `url("http://localhost:3000${imageUrl}")`, 
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",}}/>}

                <audio
                    id='play' 
                    controls
                    style={{position: "absolute", bottom: 0, width: "100%", backgroundColor: "var(--main-white)"}}
                    src={file}>
                    Your browser does not support the
                            <code>audio</code> element.
                </audio>
                        
                </div>}

                <Button 
                icon={<PlusIcon size={40}/>}
                title={"Загрузить"} 
                onClick={() =>  {
                    dispatch({
                    type: "SET_MAIN_REDUCER",
                    payload: {
                        isShowDrawer: true
                    }
                })}}/>
        </div>
    )

}
export default Player;