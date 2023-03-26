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
      <div className="shum-main-container">
        <div className='grid-style' style={{position: "fixed", bottom: 0, width: "100%"}}>
          <Player file={"http://localhost:3000/uploads/soundcard/audiofile/8/newShumrecording-F0F40D01-3A4A-45F3-9959-3A22B7335F9A.m4a"}/>
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
