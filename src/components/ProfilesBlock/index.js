import ProfileCard from "../ProfileCard"
import { useNavigate } from "react-router-dom";

const ProfilesBlock = ({linkTo=" ", title="", items=[], icon = null, showOutline}) => {
    const navigate = useNavigate();
    
    return (
        <div className="flex-column gap-16">
         <h2 
        className="h2-text-style flex-row gap-8" 
        onClick={() => navigate(`${linkTo}`)}
        style={{ gridColumnStart: 1, gridColumnEnd: 3, color: "var(--main-black)", padding: "4px 8px"}}>
           {title} {icon && icon}
            </h2>
        <div className="flex-row gap-32" style={{paddingLeft: 8}}>
            {
                items?.map((item, i) => {
                    return <ProfileCard 
                    key={i*Math.random()} 
                    showOutline={showOutline}
                    item={item}/>
                })
            }
            
        </div>
        </div>
    )
}
export default ProfilesBlock;