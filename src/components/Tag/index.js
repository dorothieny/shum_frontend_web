import "./style.css";

const Tag = ({id, tagname, onClick=() => null}) => {
    return (
        <span
        className="shum-tag"
         onClick={onClick}>
            {tagname}
        </span>
    )
}
export default Tag;