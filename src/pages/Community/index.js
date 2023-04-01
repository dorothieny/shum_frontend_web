import { useState, useEffect } from "react";
import axios from "axios";
import ProfileCard from "../../components/ProfileCard";

const CommunityScreen = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
    axios.get("http://localhost:3000/api/v1/users/")
    .then((r) => {
        setUsers(r.data);
    })
    }, []);

    return (
        <div className="grid-style">
            <div></div>
            <div className="flex-column gap-32 ">
            <h1 className={"h1-text-style"}> Сообщество</h1>
            <div className="gap-32" style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr", paddingLeft: 8}}>
            {
                users?.map((item, i) => {
                    return <ProfileCard key={i*Math.random(users.length)} item={item}/>
                })
            }
            
        </div>
            </div>

        </div>
    )
}
export default CommunityScreen;