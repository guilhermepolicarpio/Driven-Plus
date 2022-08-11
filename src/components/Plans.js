import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import { useState,useContext,useEffect } from "react";
import { getPlans } from '../services/Services';
import UserContext from './UserContext';

export default function Plans(){

const { plans, setPlans,setPlan } = useContext(UserContext);
let navigate = useNavigate();

const {userInfo} = useContext(UserContext);

useEffect(() => {   
const config = {
    headers: {
        "Authorization": `Bearer ${userInfo.token}`,
    }
}

getPlans(config).then((response) => {
    setPlans([...response.data]);

});
},[])

function pagePlan(page){
    setPlan(page)
    navigate(`/subscriptions/${page}`)
}

return (
<Box>
    <h1> Escolha seu Plano  </h1>

    {plans.map((r) =>(
        <Option  key={r.id} onClick={() => pagePlan(r.id)}>
            <img src={r.image} alt="Plan-Image"/>
            <p>{r.price}</p>
        </Option>
    ))}

</Box>
)
}

const Box = styled.div`
padding-top:29px ;
display: flex;
flex-direction: column;
align-items: center;

h1{
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 38px;
color: #FFFFFF;
margin-bottom: 25px;
}
`;

const Option= styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 180px;
width: 75%;
cursor:pointer;
margin-bottom: 15px;

p{
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 28px;
color: #FFFFFF;
}
`;