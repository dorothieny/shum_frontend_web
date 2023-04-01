import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MainScreen from './pages/Main';
import Header from './components/Header';
import Player from './components/Player';
import Auth from './pages/Auth';
import { useDispatch } from "react-redux";
import { useLocalStorage } from './hooks/useLocalStorage';
import { getUser } from './components/DrawerAuth';
import { useSelector } from 'react-redux';
import ProfileScreen from './pages/Profile';
import CommunityScreen from './pages/Community';
import Drawer from './components/DrawerUploader';
import NewPopScreen from './pages/NewPop';

const AppContent = () => {
    const dispatch = useDispatch();
    const {getItem} = useLocalStorage();
    const {userId, isShowDrawer} = useSelector(store => store.mainReducer);

    useEffect(() => {
    getUser(getItem("token"), userId, dispatch);
    }, [])
    

    return (
        <Router>  
        <Header/>
        <div className="shum-main-container" >
          <div className='grid-style' style={{position: "fixed", bottom: 0, width: "100%", zIndex: 10, pointerEvents: "none"}}>
            <Player />
            <div style={{ pointerEvents: "none"}}/>
            </div>
           <Routes>
            <Route path="/" exact element={<MainScreen />}/>
            <Route path="/profile" exact element={<ProfileScreen />}/>
            <Route path="/newest" exact element={<NewPopScreen />}/>
            <Route path="/auth" exact element={<Auth />}/>
            <Route path="/popular" exact element={<NewPopScreen />}/>
            <Route path="/search" exact element={<MainScreen />}/>
            <Route path="/community" exact element={<CommunityScreen />}/>
           </Routes>  
           <Drawer 
            title={"Загрузка нового шума"} 
            isOpen={isShowDrawer} 
            onClose={() => {
                dispatch({
                    type: "SET_MAIN_REDUCER",
                    payload: {
                        isShowDrawer: false
                    }
                })
            }}
            />
            </div>     
      </Router>
    )
}
export default AppContent;