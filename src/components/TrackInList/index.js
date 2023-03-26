import Tag from "../Tag";
import "./style.css";
import LikeIcon from "../../svg/A_Like_Icon";
import DownloadIcon from "../../svg/A_Download_Icon";
import MoreIcon from "../../svg/A_More_Icon";
import React, {useState} from "react";

const TrackInList = ({item, isLight=true, onTagClick=() => null, onClick=() => null}) => {
    const imageUrl = item?.soundcard ? item?.soundcard?.image?.url : item?.image?.url;
    const location = item?.soundcard?.location || item?.location;
    const name = item?.soundcard?.name || item?.name;
    const [visible, setVisible] = useState(false);

    return (
        <div className="flex-row gap-16" 
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        onClick={() => onClick(item?.id)}
        >
            <div style={{
                backgroundImage: `url("http://localhost:3000${imageUrl}")`, 
                width: 155, 
                height: 155, 
                backgroundColor: "var(--main-white)", 
                borderRadius: "50%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                border: isLight && !imageUrl ? "2px solid var(--main-green)" : "none"
                }}></div>

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
                            <LikeIcon color={isLight ? "var(--main-black)" : "var(--main-white)"}/>
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