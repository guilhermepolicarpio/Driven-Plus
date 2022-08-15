import ReactDOM from "react-dom";
import React from "react";
import GlobalStyle from "./styles/globalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Plans from "./components/Plans";
import Confirmation from "./components/Confirmation";
import Update from "./components/Update";
import Information from "./components/Information";
import Home from "./components/Home";
import UserContext from "./components/UserContext";
import { useState } from "react";

const rootHtml= document.querySelector(".root");

export default function Initial(){

    const [userInfo, setUserInfo] = useState({});
    const [plans, setPlans] = useState([]);
    const [plan, setPlan] = useState([]);
    const [dataPlan, setDataPlan] = useState(null);
    const [values, setValues] = useState({ membershipId: ``, cardName: '', cardNumber: '', securityNumber: '' , expirationDate: ''});
return(
<>
<GlobalStyle />
<UserContext.Provider value={{ userInfo, setUserInfo,plans, setPlans,plan, setPlan,values, setValues,dataPlan, setDataPlan}}>
<BrowserRouter>
    <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/sing_up" element={<Registration />} />
        <Route path="/subscriptions" element={<Plans />} />
        <Route path="/subscriptions/:id" element={<Confirmation />} />
        <Route path="/home" element={<Home />} />
        <Route path="/users/:id" element={<Information />} />
        <Route path="/users/:id/update" element={<Update />} />
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