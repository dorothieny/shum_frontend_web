import CloseIcon from "../../svg/A_Close_Icon";
import React, {useState, useEffect} from "react";
import Input from "../Input";
import Button from "../Button";
import UploadIcon from "../../svg/A_Upload_Icon";
import { isImage } from "../DrawerUploader";

const DrawerEdit = ({onClose = () => null, title="Редактирование профиля", isOpen=false, profile = null}) =>  {

    const [selectedUserName, setSelectedUserName] = useState("");
    const [avatar, setAvatar] = useState(null);
    const [fileName, setFileName] = useState("");

    useEffect(() => {
        // if(profile){
        //     setSelectedUserName(profile.name);
        // }
        return () => {
            setSelectedUserName("");
            setAvatar(null);
            setFileName("");
        }
    }, [])

    if(!isOpen) return null;
    return (
        <div className="shum-drawer-bg">
        <div className="shum-drawer">
            <h2 className="h2-text-style">{title}</h2>
            <CloseIcon 
            onClick={onClose}
            size={40} color="var(--main-black)" 
            style={{position: "absolute", top: 24, right: 24}}/>

            <div className="flex-column gap-24"
            style={{paddingTop: 104}}
            >
            <div style={{
                    backgroundImage: `url("http://localhost:3000${profile?.avatar?.url}")`, 
                    width: 160, 
                    height: 160, 
                    backgroundColor: "var(--main-white)", 
                    borderRadius: 2,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    }}
                    className="profile"
                    />
                    <div className="flex-row gap-16" style={{height: 48}}> 
                       <UploadIcon color={isImage(fileName) ? "var(--main-green)" : "var(--main-black)"}/> 
                       <label 
                            className={"h3-text-style shum-label"} htmlFor="upload-photo">{fileName || "Новое фото"}</label>

                       <input 
                       style={{width:0, position: "absolute"}}  
                       type="file" id={"upload-photo"} 
                       accept=".jpeg,.jpg,.png" 
                       onChange={(e) => {
                        console.log(e.target.files)
                            setFileName(e.target.files[0].name)
                            setAvatar(e.target.files[0])
                       }}/>

                       </div>
                    <Input width={"100%"} 
                        value={profile?.name}
                        placeholder="Никнейм" onChange={(e) => setSelectedUserName(e.target.value)}/>
                    </div>
   <Button 
                onClick={() => { 
                    
                }}

                isDisabled={!selectedUserName && !avatar}
                title={"Сохранить"} 
                style={{position: "absolute", 
                width: "calc(100% - 48px)", 
                bottom: 24}} /> 
    </div>
    
    </div>
    )
}
export default DrawerEdit;