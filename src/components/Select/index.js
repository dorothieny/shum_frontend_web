import React, {useState, useEffect, useRef} from "react";
import { DropDownItem } from "../DropdownItem";
import Input from "../Input";
import "./style.css"
import Tag from "../Tag";

export const useForceUpdate = () => {
    const [, setState] = useState();
    return () => setState({});
  };

const Select = ({
    listItems = [],
    isError,
    disabled,
    onSelect = () => null,
    width = "100%",
    selectItem = [],
    isMultiple = false,
    placeholder = "Выберите тэг"
}) => {
    const selectorRef = useRef(null);
    const selectOpen = useRef(false);
    const optionsRef = useRef(null);
  
    const [selectedItem, setSelectedItem] = useState(selectItem);
  
    const forceUpdate = useForceUpdate();
  
    const changeOpen = (e) => {
      if (
        optionsRef.current &&
        optionsRef.current.contains(e.target)) {
        return;
      }
      if(e.target?.className === "shum-tag" || e.target?.tagName === "svg" || e.target?.tagName === "path") {
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

  
    useEffect(() => {
        if(selectedItem) {
            onSelect(selectedItem);
        }
    }, [selectedItem]);
  
    const checkItem = (item) => {
      if (selectedItem.filter((it) => it.id === item.id).length) {
        const array = selectedItem.filter((it) => it.id !== item.id);
        setSelectedItem([...array]);
      } else {
        if (isMultiple) {
          setSelectedItem([...selectedItem, { id: item.id, name: item.tagname }]);
        } else {
          setSelectedItem([{ id: item.id, name: item.tagname }]);
        }
      }
    }

  
    return (
      <div
        style={{ width }}
        className={"idp-design-select"}
      >
        <div ref={selectorRef}>
          <Input
            value={selectedItem[0]?.name || ""}
            width={"100%"}
            placeholder={placeholder}
            type={"select"}
            multipleValue={selectedItem}
            isError={isError}
            disabled={disabled}
            onChange={(e) => {
              if (selectedItem.filter((it) => it.id === e).length) {
                const array = selectedItem.filter((it) => it.id !== e);
                setSelectedItem([...array]);
              }
            }}
            openDropDown={selectOpen.current}
          />
        </div>
        <div
          ref={optionsRef}
          className={`${ selectOpen.current ? "dropdown-selector-content-open flex-column gap-16" : "dropdown-selector-content"}`}
        >
          {Boolean(listItems.length) ? listItems.map((item) => {
              return (
                <DropDownItem
                  key={item.id}
                  id={item.id}
                  isMultiple={isMultiple}
                  isActive={Boolean(selectedItem.filter((it) => it.id === item.id).length)}
                  onClick={() => {
                    checkItem(item);
                  }}
                >
                    <Tag
                          key={item.id}
                          id={item.id}
                          tagname={item.tagname}
                        />
                </DropDownItem>
              );
            }) :
            <></>}
        </div>
      </div>
    );
  };

export default Select;