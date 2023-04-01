import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import List from './components/List';
import MoreIcon from '../../svg/A_More_Icon';
import Dropdown from '../../components/Dropdown';
import { DropDownItem } from '../../components/DropdownItem';
import { useNavigate } from 'react-router-dom';
import DrawerEdit from '../../components/DrawerEdit';



const ProfileScreen = () => {
const [profile, setProfile] = useState();
const {getItem, removeItem} = useLocalStorage();
const [followees, setFollowees] = useState(false);
const [follewed, setFollewed] = useState(false);
const [isMy, setIsMy] = useState(true);
const [count, setCount] = useState(0);
const navigate = useNavigate();

const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const getUserProfile = () => {
        axios.get(`http://localhost:3000/api/v1/user`, {
            headers: {
                Authorization: `${getItem('token')}`
            }
        })
        .then((r) => {
            setProfile(r.data.user);
            setCount(r.data.count);
        })
    }

    useEffect(() => {
        getUserProfile();
    }, [])

    useEffect(() => {
        if(profile?.id){
            axios.get(`http://localhost:3000/api/v1/users/${profile.id}/followed`)
        .then((r) => {
            setFollowees(r.data);
        }) 
        }
       
        }, [profile])

        useEffect(() => {
            if(profile?.id){
               axios.get(`http://localhost:3000/api/v1/users/${profile.id}/following`)
            .then((r) => {
                setFollewed(r.data);
            })  
            }
           
            }, [profile])



    return (
        <>
            <div className="grid-style">
            <div></div>
            <div style={{paddingTop: 38}}>
                <div className='flex-row gap-16' style={{paddingBottom: 40}}>
                <div style={{
                    backgroundImage: `url("http://localhost:3000${profile?.avatar?.url}")`, 
                    width: 160, 
                    height: 160, 
                    backgroundColor: "var(--main-white)", 
                    borderRadius: 2,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    }}
                    className="profile"
                    >
                    </div>
                <div className='flex-column' style={{justifyContent: "space-between"}}>
                    <div className='flex-row gap-24'>
                    <h1 className='h1-text-style'>{profile?.name?.toUpperCase()}</h1>
                    <Dropdown width={200}> 
                    <DropDownItem 
                    onClick={() => setIsDrawerOpen(true)}> 
                            Редактировать
                        </DropDownItem>
                        <DropDownItem
                            onClick={() => 
                            Promise.resolve()
                            .then(() => {
                                removeItem("token")
                            })
                            .then(() => {
                                navigate("/auth")
                            })
                              
                            }
                        > 
                            Выйти
                        </DropDownItem>
                    </Dropdown>
                    </div>
                <div className='flex-row gap-24'>
                <div className='flex-column'
                style={{alignItems: "center"}}>
                     <h3 className='h3-text-style'>{count}</h3>
                     <p className='p-text-style'>саундскейпы</p>
                </div>
                <div className='flex-column'
                style={{alignItems: "center"}}>
                     <h3 className='h3-text-style'>{follewed?.length}</h3>
                     <p className='p-text-style'>подписки</p>
                </div>
                <div className='flex-column'
                style={{alignItems: "center"}}>
                    <h3 className='h3-text-style'>{followees?.length}</h3>
                    <p className='p-text-style'>подписчики</p>
                </div>
                </div>
                    
                </div>
    
            </div>
            <div className='flex-column gap-16'
                style={{backgroundColor: "var(--main-white)", borderTopLeftRadius: 10, borderBottomLeftRadius: 10, paddingBottom: 40, paddingRight: 40}}
            >
            

              <div className='grid-style'>
              <div className='flex-column gap-16' style={{padding: "4px 8px"}}>
                <h3 className='h3-text-style'
                style={{color: isMy ? "var(--main-green)" : "var(--main-black)"}}
                onClick={() => {
                    setIsMy(true);
                }}
                >Мои записи</h3>
                <h3 className='h3-text-style'
                style={{color: !isMy ? "var(--main-green)" : "var(--main-black)"}}
                onClick={() => {
                    setIsMy(false);
                }}
                >Избранные</h3>    
              </div>
              <div style={{paddingTop: 32}}>
                <List id={profile?.id} isMy={isMy}/>
                </div>
              </div>
            

            </div>
            </div>
           
               
            </div>
            <DrawerEdit 
            profile = {profile}
            onClose={() => setIsDrawerOpen(false)}
            isOpen={isDrawerOpen}/>
        </>
    )
}
export default ProfileScreen;