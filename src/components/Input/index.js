import "./style.css"; 
import React, {useState, useEffect} from "react";
import Tag from "../Tag";
import ChevronDownIcon from "../../svg/A_Chevron_Down";
import ChevronUpIcon from "../../svg/A_Chevron_Up";

const Input =({
    placeholder = "Введите значение",
    value = "",
    onChange = () => null,
    width = "auto",
    minWidth= "150px",
    isError = false,
    disabled = false,
    type = "input",
    icon = null,
    openDropDown = false,
    multipleValue = [],
    description = "",
}) => {

    const [locValue, setLocValue] = useState(value);
    const [multiTags, setMultiTags] = useState(multipleValue)

    useEffect(() => {
        setLocValue(value);
    }, [value]);

    useEffect(() => {
      setMultiTags(multipleValue)
    }, [multipleValue.length])

    
    const styled = {width: width || "100%"}

    const getInput = () => {
        switch (type) {
        case "input": {
            return (
                <input 
                className="shum-input h3-text-style"
                    value={locValue}
                    placeholder={placeholder}
                    onChange={(e) => {
                        setLocValue(e.target.value);
                        onChange(e)
                    }}
                    />
            )
        }
         case "select": {
            return (
                <div className="flex-row shum-input" 
                style={{justifyContent: "space-between", borderBottom: openDropDown ? "2px solid var(--main-green)" : "2px solid var(--main-gray)"}}>
                
                <div 
                className={`flex-row gap-8 ${isError && "input-error"} ${disabled && "input-disabled"}`}
                
                >
                  {Boolean(multiTags.length) ? multiTags.map((item) => {
                      return (
                        <Tag
                          key={item.id}
                          id={item.id}
                          onClick={() => {
                            onChange(item.id)}}
                          tagname={item.name}
                        />
    
                      )
                    })
                    : <h3 className="h3-text-style">{placeholder}</h3>
                  }
                  
                </div>
                {openDropDown ? <ChevronDownIcon style={{}} color="var(--main-black)"/> : <ChevronUpIcon color="var(--main-black)"/>}
              </div>
            )
         }
         default : {
            return (
            <input type={type} placeholder={placeholder} value={locValue}/>
            )
         }
        }
    }
    return (
        <div style={styled}>
            <label className={"p-text-style"} style={{height: 24, display: "block"}}> {locValue ? placeholder: " "}</label>
            {getInput(type)}
        {isError &&
        <label className={"idp-design-warning-label"}>
          Обязательное поле
        </label>}
        {description &&
        <label className={"idp-design-label"}>
          {description}
        </label>}
        </div>
    )
}
export default Input;