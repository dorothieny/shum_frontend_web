import React, {useEffect, useState} from "react";
import axios from "axios";
import Button from "../Button";
import CloseIcon from "../../svg/A_Close_Icon";
import Input from "../Input";
import "./style.css"

const DrawerAuth = ({onClose = () => null, title="Загрузка", isOpen=false, icon = true}) => {
    
    const [registration, setRegistration] = useState(false)

   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [userName, setUserName] = useState("");
   const [repeatPassword, setRepeatPassword] = useState("");

   // daria@email.com
    // mypassword

   const signIn = async() => {
    // const requestOptions = {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({user: { email: email, password: password }})
    // };
    // await fetch('http://localhost:3000/api/v1/users/sign_in', requestOptions)
    // .then(response => console.log(response.headers))
    await axios({
        method: 'post',
        url: "http://localhost:3000/api/v1/users/sign_in",
        data: {user: { email: email, password: password }}, 
      
      })
    .then((r) => {
        console.log(r)
     localStorage.setItem("id_token", r.headers.authorization);
    });
   }

   const signUp = () => {
    const d = { email: email, password: password}
    console.log(d)
    //    axios
    //    .post("http://localhost:3000/api/v1/users", {
    //      user: { email: email, password: password },
    //    })
    //    .then((r) => {
    //     localStorage.setItem("id_token", r.headers.authorization);
    //    });
   }

    // const debouncedSearchTerm = useDebounce(shumSelectedName, 500);

    useEffect(() => {
    // axios.get("http://localhost:3000/api/v1/tags")
    // .then((res) => {
    //     setTags(res.data);
    //     })
    }, [])


    const updateInputs = () => {
       const a = document.getElementById("email")?.value
       const b = document.getElementById("password")?.value
       const c = document.getElementById("repeat-password")?.value

       if(a){
        document.getElementById("email").value = ""
       }
       if(b){
        document.getElementById("password").value = ""
       }
       if(c){
        document.getElementById("repeat-password").value = ""
       }

        setEmail("");
        setPassword("");
        setUserName("");
    }

    useEffect(() => {
        updateInputs();
    }, [registration])
   

if (!isOpen) return <></>



    return (
        <div className="shum-drawer-auth-bg">
            <div className="shum-drawer">
            <div className="shum-main-navigation flex-row gap-64" style={{padding: "4px 8px"}}>
            <h3 className="h3-text-style" style={{cursor: "pointer", color: !registration ? "var(--main-green)" : "var(--main-black)"}}  onClick={() => setRegistration(false)} >Вход</h3>
            <h3 className="h3-text-style" style={{cursor: "pointer", color: registration ? "var(--main-green)" : "var(--main-black)"}} onClick={() => setRegistration(true)} >Регистрация</h3>
            </div>
                <h1 className="h1-text-style">{registration ? "Регистрация": "Войти в шум"}</h1>
                {icon && <CloseIcon 
                onClick={onClose}
                size={40} color="var(--main-black)" 
                style={{position: "absolute", top: 24, right: 24}}/>}

            
                <div className="flex-column gap-24">
                    <Input 
                    id={"email"}
                    width={"100%"} 
                    placeholder="E-mail" 
                    onChange={(e) => setEmail(e.target.value)}/>

                    <Input 
                    id={"password"}
                    width={"100%"} 
                    isPassword={true} placeholder="Пароль" onChange={(e) => setPassword(e.target.value)}/>

                    {registration && 
                    <Input
                    id={"repeat-password"}
                     width={"100%"} 
                    isPassword={true} 
                    placeholder="Повторите пороль" onChange={(e) => setRepeatPassword(e.target.value)}/>}
                       </div>
                       
                

                <Button 
                onClick={() => { 
                    if(registration){
                        signUp();
                    } else {
                        signIn();
                }}}

                isDisabled={false}
                title={registration? "Зарегистрироваться" : "Войти"} 
                style={{position: "absolute", 
                width: "calc(100% - 48px)", 
                bottom: 24}} />
            </div>
            </div>
    )

}

export default DrawerAuth;