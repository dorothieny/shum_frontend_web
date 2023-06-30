import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import TrackInList from '../../components/TrackInList';

const SearchScreen = () => {
const [searchParams, setSearchParams] = useSearchParams();
const [data, setData] = useState([]);
const dispatch = useDispatch();
const {isPlaying} = useSelector((state) => state.mainReducer);
    const fetchMultiple = (search) => {
        axios.get(`http://localhost:3000/api/v1/soundcards/?starts_with=${search.charAt(0).toUpperCase()}`)
        .then((r) => {
            setData(r.data);
            console.log(r.data);
        })
    }

    const fetchTags = (search) => {
        axios.get(`http://localhost:3000/api/v1/soundcards/?starts_with=${search.toLowerCase()}`)
        .then((r) => {
            setData(r.data);
            console.log(r.data);
        })
    }

useEffect(() => {
    const myParam = searchParams.get('multiple');
    fetchMultiple(myParam);
  }, [searchParams]);

    return (
        <div className="grid-style">
        <div></div>
        <div className="flex-column gap-32">
            <h1 className={"h1-text-style"}>Поиск</h1>
                        <div className='flex-column gap-16'
                            style={{backgroundColor: "var(--main-white)", borderTopLeftRadius: 10, borderBottomLeftRadius: 10, paddingBottom: 40, paddingRight: 40}}
                        >
                        
                        <div className='grid-style'>
                        <div className='flex-column gap-16' style={{padding: "4px 8px"}}>
                <h3 className='h3-text-style'
                style={{color:  "var(--main-green)" }}
                onClick={() => {
                    // setIsMy(true);
                }}
                >Записи</h3>
                <h3 className='h3-text-style'
                style={{color: "var(--main-black)"}}
                onClick={() => {
                    // setIsMy(false);
                }}
                >Теги</h3>    
              </div>   
                        <div className='flex-column gap-16' style={{paddingTop: 32}}>
                            {/* <List id={profile?.id} isMy={isMy}/> */}
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
                        </div>
                 </div>
        </div>
        
        </div>

    )
}
export default SearchScreen;