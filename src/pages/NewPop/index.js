import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import TrackInList from '../../components/TrackInList';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

const NewPopScreen = () => {
    const [items, setItems] = useState([]);
    const dispatch = useDispatch();
    const {isPlaying} = useSelector((state) => state.mainReducer);
    const [page, setPage] = useState("");

    const location = useLocation();

    console.log(location.pathname);

    useEffect(() =>{
        if(location.pathname){
            setPage(location.pathname)        
        }
    }, [location.pathname])

    useEffect(() => {
        if(page) {
            axios.get(`http://localhost:3000/api/v1/${page}`)
            .then((r) => {
                setItems(r.data);
            })
        }
    }, [page])

    return (
        <div className="grid-style">
            <div></div>
            <div className="flex-column gap-32">
                <h1 className={"h1-text-style"}> {page.includes("newest") ? "Новое" : "Популярное"}</h1>
                            <div className='flex-column gap-16'
                                style={{backgroundColor: "var(--main-white)", borderTopLeftRadius: 10, borderBottomLeftRadius: 10, paddingBottom: 40, paddingRight: 40}}
                            >
                            
                            <div className='grid-style'>
                            <div></div>    
                            <div className='flex-column gap-16' style={{paddingTop: 32}}>
                                {/* <List id={profile?.id} isMy={isMy}/> */}
                                {
                                items?.map((item, i) => {
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
                            </div>
                     </div>
            </div>
            
            </div>

    )
}
export default NewPopScreen;