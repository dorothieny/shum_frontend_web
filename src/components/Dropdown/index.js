import React, {useRef, useState, useEffect} from "react";
import { useForceUpdate } from "../Select";
import MoreIcon from "../../svg/A_More_Icon";

const Dropdown =({
    icon = null,
    width,
    children
}) => {

    const selectorRef = useRef(null);
    const selectOpen = useRef(false);
    const optionsRef = useRef(null);

    const forceUpdate = useForceUpdate();


    const changeOpen = (e) => {
        if (
          optionsRef.current &&
          optionsRef.current.contains(e.target)) {
          return;
        }
    
        if (
          selectorRef.current &&
          selectorRef.current.contains(e.target) &&
          e.target
        ) {
          selectOpen.current = !selectOpen.current;
          return forceUpdate();
        }
    
    
        if (selectOpen.current) {
          selectOpen.current = !selectOpen.current;
          return forceUpdate();
        }
      };
    
      useEffect(() => {
        document.addEventListener("click", changeOpen);
        return () => {
          document.removeEventListener("click", changeOpen);
        };
      }, []);
  
    

    return (
        <div
            style={{ width, height:"fit-content" }}
            className={"idp-design-select"}
      >
        <div ref={selectorRef}>
            {icon ? icon : <MoreIcon />}
            <div
                ref={optionsRef}
                className={`${ selectOpen.current ? "dropdown-selector-content-open flex-column gap-16" : "dropdown-selector-content"}`}
        > 
            {children}
        </div>
        </div>
        </div>
    )
}
export default Dropdown;