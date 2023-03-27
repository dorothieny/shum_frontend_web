import PlusIcon from "../../svg/A_Plus_Icon";
export const DropDownItem = ({
    isActive = false,
    isMultiple = false,
    id= "0",
    ...restProps
  }) => {
    return (
      <a
        id={id}
        {...restProps}
        className={"dropdown-menu-item" + `${isActive ? "dropdown-menu-item-selected" : ""}`}>
        <div className={"idp-design-dropdown-item"}>
        {restProps.children}
        </div>
        {(isActive && !isMultiple) && <PlusIcon color={"black"} size={16}/>}
      </a>
    );
  };