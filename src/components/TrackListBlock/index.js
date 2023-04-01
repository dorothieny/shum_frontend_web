import TrackInList from "../TrackInList"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const TrackListBlock = ({linkTo="", title = "Title", items=[], lightTheme = true,  icon = null}) => {
    const dispatch = useDispatch();
    const {isPlaying} = useSelector(state => state.mainReducer);
    
    const navigate = useNavigate();
   
return (
    <div className="grid-style"
    style={{backgroundColor: lightTheme ? "var(--main-white)" : "var(--main-black)", borderTopLeftRadius: 10, borderBottomLeftRadius: 10, paddingBottom: 40, paddingRight: 40}}
    >
        <h2 
         onClick={() => navigate(`${linkTo}`)}
        className="h2-text-style flex-row gap-8" 
        style={{ gridColumnStart: 1, gridColumnEnd: 3, color: lightTheme ? "var(--main-black)" : "var(--main-white)", padding: "4px 8px"}}>
           {title} {icon && icon}
            </h2>
            <div></div>
        <div className="flex-column gap-16">
            {
                items?.map((item, i) => {
                    return <TrackInList key={item.id+i} item={item} isLight={lightTheme} 
                    onTagClick={(id) => console.log("tag", id)}
                    onClick={(id) => dispatch({
                        type: "SET_MAIN_REDUCER", 
                        payload: {
                            shumId: id,
                            isPlaying: !isPlaying,
                        }
                    })}/>
                })
            }
            
        </div>
    </div>
)
}

export default TrackListBlock