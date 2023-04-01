import './App.css';
import {initStore} from "./service/store"
import { Provider } from "react-redux";
import AppContent from './bootstrap';
const store = initStore();

function App() {

  return (
    
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;
