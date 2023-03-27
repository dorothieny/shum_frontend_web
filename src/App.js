import './App.css';
import {initStore} from "./service/store"
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MainScreen from './pages/Main';
import Header from './components/Header';
import Player from './components/Player';


const store = initStore();

function App() {
  return (
    <Provider store={store}>
      
    <Router>
      
      <Header/>
      <div className="shum-main-container" >
        <div className='grid-style' style={{position: "fixed", bottom: 0, width: "100%", zIndex: 10, pointerEvents: "none"}}>
          <Player />
          
          <div style={{ pointerEvents: "none"}}/>
          
          </div>
         <Routes>
          <Route path="/" exact element={<MainScreen />}/>
          <Route path="/new" />
          <Route path="/popular" />
          <Route path="/profile" exact element={<MainScreen />}/>
          <Route path="/search" exact element={<MainScreen />}/>
         </Routes>  
          </div>     
    </Router>
    </Provider>
  );
}

export default App;
