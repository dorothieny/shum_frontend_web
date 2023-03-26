import { Link } from "react-router-dom";
import "./style.css";
import Logo from "./components/Logo";

const Header = () => {
    return (
        <div className="shum-main-header grid-style" style={{padding: "16px 0"}}>
            <div style={{padding: "0 40px"}}><Logo /></div>
            <div className="shum-main-navigation flex-row gap-64" style={{padding: "4px 8px"}}>
                <Link to="/"><h3 className="h3-text-style">Главная</h3></Link>
                <Link to="/seach"><h3 className="h3-text-style">Поиск</h3></Link>
                <Link to="/profile"><h3 className="h3-text-style">Профиль</h3></Link>
            </div>
        </div>
    )
}
export default Header;