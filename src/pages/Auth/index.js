import DrawerAuth from "../../components/DrawerAuth";
import { useDispatch, useSelector } from "react-redux";
import "./style.css"
import PhoneImage from "../../images/Phone";
import axios from "axios";

const Auth = () => {

    const dispatch = useDispatch();
    return (
        <>
        <div>
            <DrawerAuth 
                isOpen={true} 
                icon={false}
                onClose={() => {
                dispatch({
                    type: "SET_MAIN_REDUCER",
                    payload: {
                        isShowDrawer: false
                    }
                })
                }}
            />
            <div style={{
                    backgroundColor: "var(--main-black)", 
                    height: "100vh",
                    gridTemplateRows: "1fr"
                }}
                className="grid-style auth-bg" >
                    <div></div>
                    <div className="grid-3-col" style={{gridTemplateRows: "1fr"}}>
                        <div></div>
                        <div className="flex-column" style={{height:"100%", justifyContent: "space-between"}} >
                           <h1 className="h1-text-style" style={{color:"var(--main-green)", lineHeight: "64px"}}> 
                             Мобильное приложение
                        </h1> 
                        <div className="flex-row gap-8">
                            <div className="shum-qr" style={{}} />
                            <p className="p-text-style"
                            style={{color:"var(--main-green)"}}
                            >Наведите камеру смартфона <br/> и загрузите в Google Play или App Store</p>
                        </div>
                        <PhoneImage />
                        </div>
                       </div>

            </div>
        </div>
        </>
    )
}
export default Auth;