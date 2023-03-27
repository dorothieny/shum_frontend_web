import "./style.css"

const Button = ({title="", onClick=() => null, type="primary", icon=null, isDisabled, ...restProps}) => {
const getType = () => {
    switch (type) {
        case "primary": {
            return "primaryBtn"
        }
        case "secondary": {
            return "secondaryBtn"
        }
        case "tertiary": {
            return "tertiaryBtn"
        }
        default: {
            return "primaryBtn"
        }
    }
}
    return (
            <button 

            className={`h2-text-style flex-row gap-4 shum-button ${getType()}`}
            style={{...restProps?.style, opacity: isDisabled? 0.5 : 1}} 
            onClick={onClick}>
               [ <h2 className="h2-text-style">
                     {title} 
                </h2> 
                {icon && icon}]
                </button>
    )
}
export default Button;