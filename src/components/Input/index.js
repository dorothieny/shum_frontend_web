import "./style.css"; 
import React, {useState, useEffect} from "react";
import Tag from "../Tag";
import ChevronDownIcon from "../../svg/A_Chevron_Down";
import ChevronUpIcon from "../../svg/A_Chevron_Up";

const Input =({
    placeholder = "Введите значение",
    value = "",
    showLabel = true,
    onChange = () => null,
    width = "auto",
    minWidth= "150px",
    isError = false,
    disabled = false,
    type = "input",
    isPassword = false,
    icon = null,
    onSelect = () => null,
    openDropDown = false,
    multipleValue = [],
    id="",
    description = "",
    isLight = true,
}) => {


    const [locValue, setLocValue] = useState(value);
    const [multiTags, setMultiTags] = useState(multipleValue)
  const [values, setValues] = useState(null);
    useEffect(() => {
        setLocValue(value);
    }, [value]);

    useEffect(() => {
      setMultiTags(multipleValue)
    }, [multipleValue.length])

    
    useEffect(() => {
      const delayDebounceFn = setTimeout(() => {
        if(document.getElementById("my_item")) {
          document.getElementById("my_item").innerHTML = "";
        }
        
        if (values) {
        // setMultiTags([...multiTags, ...values])
        onSelect(values[0]);
        // console.log(values[0])
        }
      }, 1000)
  
      return () => clearTimeout(delayDebounceFn)
    }, [values])
  

    const styled = {width: width || "100%"}

    const getInput = () => {
        switch (type) {
        case "input": {
            return (
                <input 
                id={id}
                type={isPassword ? "password" : "text"}
                className={`shum-input h3-text-style ${isLight? "" : "dark-mode"}`}
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
                <div className={`flex-row shum-input ${isLight? "" : "dark-mode"}` }
                id={id}
                style={{justifyContent: "space-between", borderBottom: openDropDown ? "2px solid var(--main-green)" : "2px solid var(--main-gray)"}}>
                
                <div 
                className={`flex-row gap-8 ${isError && "input-error"} ${disabled && "input-disabled"}`}
                style={{alignItems: "baseline"}}
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
                   <span contentEditable="true" 
                   id="my_item"
                    onInput={(e) => 

                    setValues((e.currentTarget?.innerHTML?.split(" ").map((item) => {
                      return {tagname: item.split("&nbsp;")[0], id: Math.random(0, 12435356)}
                      })))

                      }>
                   </span>
                </div>
                {openDropDown ? <ChevronDownIcon style={{}} color="var(--main-black)"/> : <ChevronUpIcon color="var(--main-black)"/>}
              </div>
            )
         }
         default : {
            return (
            <input id={id} type={type} placeholder={placeholder} value={locValue}/>
            )
         }
        }
    }
    return (
        <div style={styled}>
            {showLabel && <label className={"p-text-style"} style={{height: 24, display: "block"}}> {locValue ? placeholder: " "}</label>}
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