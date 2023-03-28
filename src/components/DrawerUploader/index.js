import CloseIcon from "../../svg/A_Close_Icon";
import Input from "../Input";
import Select from "../Select";
import "./style.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "../Button";
import UploadIcon from "../../svg/A_Upload_Icon";


const Drawer = ({onClose = () => null, title="Загрузка", isOpen=false}) => {
    const [tags, setTags] = useState([]);
    const [fileName, setFileName] = useState("");
    const [shumName, setShumName] = useState("");
    const [tagSelected, setTagSelected] = useState("");

    const [shumSelectedName, setShumSelectedName] = useState("");
    const [shumSelectedLocation, setShumSelectedLocation] = useState("");
    const [shumSelectedFile, setShumSelectedFile] = useState("");
    const [shumSelectedSound, setShumSelectedSound] = useState("");


    // const debouncedSearchTerm = useDebounce(shumSelectedName, 500);

    useEffect(() => {
    axios.get("http://localhost:3000/api/v1/tags")
    .then((res) => {
        setTags(res.data);
        })
    }, [])

    function getExtension(filename) {
        var parts = filename.split('.');
        return parts[parts.length - 1];
      }
      
      function isImage(filename = "none") {
        var ext = getExtension(filename);
        switch (ext.toLowerCase()) {
          case 'jpg':
          case 'gif':
          case 'jpeg':
          case 'png':
            return true;
        default: {
            return false;
        }
        }
      }

      function isSound(filename = "none") {
        var ext = getExtension(filename);
        switch (ext.toLowerCase()) {
          case 'm4a':{
             return true;
          }
          default: {
            return false;
        }
        } 
      }

if (!isOpen) return <></>

    return (
        <div className="shum-drawer-bg">
            <div className="shum-drawer">
                <h1 className="h1-text-style">{title}</h1>
                <CloseIcon 
                onClick={onClose}
                size={40} color="var(--main-black)" 
                style={{position: "absolute", top: 24, right: 24}}/>

            
                <div className="flex-column gap-24">
                    <Input width={"100%"} placeholder="Название" onChange={(e) => setShumSelectedName(e.target.value)}/>
                    <Input width={"100%"} placeholder="Место" onChange={(e) => setShumSelectedLocation(e.target.value)}/>

                    <Select isMultiple={true} listItems={tags}
                        placeholder="Тэги" 
                        onSelect={(e) => setTagSelected(e.map(item => item.name).join(", "))}/>
                            
                       <div className="flex-row gap-16" style={{height: 48}}> 
                       <UploadIcon color={isImage(fileName) ? "var(--main-green)" : "var(--main-black)"}/> 
                       <label 
                            className={"h3-text-style shum-label"} htmlFor="upload-photo">{fileName || "Обложка"}</label>

                       <input 
                       style={{width:0, position: "absolute"}}  
                       type="file" id={"upload-photo"} onChange={(e) => {
                            setFileName(e.target.files[0].name)
                            setShumSelectedFile(e.target.files[0])
                       }}/>

                       </div>
                       <div className="flex-row gap-16" style={{height: 48}}> 
                       <UploadIcon color={isSound(shumName) ? "var(--main-green)" : "var(--main-black)"}/> 
                       <label 
                            className={"h3-text-style shum-label"} htmlFor="upload-shum">{shumName || "Ваш звук"}</label>
                       <input 
                       style={{width:0, position: "absolute"}}  
                       type="file" id={"upload-shum"} onChange={(e) => {
                            setShumName(e.target.files[0].name)
                            setShumSelectedSound(e.target.files[0])
                       }}/>
                       </div>
                </div>

                <Button 
                onClick={() => {
                    const formData = {
                        soundcard: {
                            name: shumSelectedName,
                            location: shumSelectedLocation,
                            image: shumSelectedFile,
                            audiofile: shumSelectedSound
                        }
                        
                    }
                    axios
                    .post("http://localhost:3000/api/v1/soundcards", formData, {
                      headers: {
                        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwic2NwIjoidXNlciIsImF1ZCI6bnVsbCwiaWF0IjoxNjc5OTY2ODAxLCJleHAiOjE2ODEyNjI4MDEsImp0aSI6ImVhOWIxYzI5LTJhZWEtNDY4Ny1hYjViLTlkOTc0OWYwN2U4YiJ9.8E2l0g0yA1Fi77qFUmb_p3zFKush3v0QFeICfVtjNJE",
                        "Content-Type": "multipart/form-data",
                      },
                    })
                    .then((r) => {
                      console.log(r);
                    })
                }}
                isDisabled={!tagSelected || !shumSelectedName || !shumSelectedLocation || !shumSelectedFile || !shumSelectedSound}
                title="Опубликовать" 
                style={{position: "absolute", 
                width: "calc(100% - 48px)", 
                bottom: 24}} />
            </div>
        </div>
    )
}

export default Drawer;