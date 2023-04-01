import TrackInList from "../../../components/TrackInList"
import { useDispatch } from "react-redux"
import React, {useState, useEffect} from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const List = ({isMy, id}) => {
    const [data, setData] = useState([]);
    const dispatch = useDispatch();
    const {isPlaying} = useSelector((state) => state.mainReducer);

    useEffect(() => {
        if(isMy && id){
                axios.get(`http://localhost:3000/api/v1/users/${id}/created`)
                .then((r) => {
                    setData(r.data);
                })  
        } else {
            if(id) {
                axios.get(`http://localhost:3000/api/v1/users/${id}/liked`)
            .then((r) => {
                setData(r.data);
            })   
            }
           
        }

    }, [isMy, id])


    return (
        <div className="flex-column gap-16">
        {
            data?.map((item, i) => {
                return <TrackInList key={item.id+i} item={item} isLight={true} 
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
    )
}
export default List;