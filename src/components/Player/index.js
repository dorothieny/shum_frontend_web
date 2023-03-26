
import React from'react'
import Button from '../Button';
import PlusIcon from '../../svg/A_Plus_Icon';

const Player = ({file}) => {
  
    const audion = new Audio(file);
    const play =() => {
        audion.play();
    }

    const pause =() => {
        audion.pause();
    }

    function touchStarted() {
       const  context = new AudioContext();
        context.resume();
      }

    // if (!ready && !loading) return <div>No audio to play</div>
    // if (loading) return <div>Loading audio</div>

    return (
        <div style={{
             bottom: 0,
             zIndex: 10,
             padding: 10,
             width: "2fr"
              }}>

                <Button 
                icon={<PlusIcon size={40}/>}
                title={"Загрузить"} 
                onClick={() => {
                Promise.resolve()
                .then(() => {
                    touchStarted();
                })
                .then(() => {
                    play();
                })
                }}/>
        </div>
    )

}
export default Player;