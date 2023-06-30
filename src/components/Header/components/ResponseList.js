import React, {useEffect, useState} from "react"
import { useSelector } from "react-redux";
import axios from "axios";

export const ResponseList = () => {
    const {search, userId} = useSelector(store => store.mainReducer);
    const [data, setData] = useState([]);
    const [dataT, setDataT] = useState([]);
    const fetchMultiple = (search) => {
        axios.get(`http://localhost:3000/api/v1/soundcards/?starts_with=${search.charAt(0).toUpperCase()}`)
        .then((r) => {
            setData(r.data);
        })
    }
    const fetchTags = (search) => {
        axios.get(`http://localhost:3000/api/v1/tags/?starts_with=${search.toLowerCase()}`)
        .then((r) => {
            setDataT(r.data);
        })
    }

    useEffect(() =>{
    fetchMultiple(search);
    fetchTags(search);
    }, [search])

    return (
        <div style={{backgroundColor: 'var(--main-white)', position: 'absolute', zIndex: 2, top: "40px", width: "100%", display: 'flex', flexDirection: 'column', gap: '16px', padding: '8px'}}>
            {data?.map((item) => {
                return(
                    <p style={{color: 'var(--main-black)'}}>{item.name}</p>
                )
            })}
            {Boolean(dataT.length) && <h3 style={{color: 'var(--main-black)', marginTop: "16px"}}>{"Теги".toUpperCase()}</h3>}
            {dataT?.map((item) => {
                return (
                    <p  style={{color: 'var(--main-black)'}}>{item.tagname}</p>
                )
            })}
        </div>
    )
}