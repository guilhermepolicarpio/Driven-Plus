import ReactDOM from "react-dom";
import React from "react";
import GlobalStyle from "./styles/globalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Plans from "./components/Plans";
import Confirmation from "./components/Confirmation";
import Home from "./components/Home";
import UserContext from "./components/UserContext";
import { useState } from "react";

const rootHtml= document.querySelector(".root");

export default function Initial(){

    const [userInfo, setUserInfo] = useState({});

return(

<>
<GlobalStyle />
<UserContext.Provider value={{ userInfo, setUserInfo}}>
<BrowserRouter>
    <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/sing_up" element={<Registration />} />
        <Route path="/subscriptions" element={<Plans />} />
        {/*<Route path="/subscriptions/ID_DO_PLANO" element={<Confirmation />} />
<Route path="/home" element={<Home />} />*/}
    </Routes>
    </BrowserRouter>
    </UserContext.Provider>
</>
)


}

ReactDOM.render(
    <React.StrictMode>
        <Initial />
    </React.StrictMode>, rootHtml);