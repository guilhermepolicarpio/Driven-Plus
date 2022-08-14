import styled from 'styled-components';
import UserContext from './UserContext';
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { cancelPlan } from '../services/Services';


export default function Home(){

const {userInfo} = useContext(UserContext);
let navigate = useNavigate();

function linkPage(pageLink){
    window.open(pageLink, '_blank');
}

function deletePlan(){
const config = {
    headers: {
        "Authorization": `Bearer ${userInfo.token}`,
    }
}

    cancelPlan(config).then((r) => {
        navigate("../subscriptions")
        console.log(r)
    })
    .catch((r) => {
        console.log(r)
    })

}

return(
<Page> 
    <Top>
        <img src={userInfo.membership.image} alt=""/>
        <ion-icon onClick={() => navigate(`/users/${userInfo.id}`)} name="person-circle-outline"></ion-icon>
    </Top>
    <h1>Olá, {userInfo.name}</h1>

    <Options>
        {userInfo.membership.perks.map((value,index) =>(
            <button onClick={() => linkPage(value.link)} key={index}>
                <p > {value.title}</p>
            </button>          
        ))}
    </Options>
    <Bottom>
        <button onClick={() => navigate("../subscriptions")}>
                <p > Alterar plano</p>
        </button>  
        <button onClick={(e) => {e.preventDefault();deletePlan()}}>
                <p > Cancelar plano</p>
        </button>  
    </Bottom>
    </Page>
)}

const Page = styled.div`
position: relative;
display: flex;
flex-direction: column;
height:100%;

h1{
    padding: 25px 0px 53px 0px;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #FFFFFF;
    text-align: center;
}
`;

const Options = styled.div`
position: relative;
display: flex;
flex-direction: column;
height: 340px;
h1{
    padding: 25px 0px 53px 0px;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #FFFFFF;
    text-align: center;
}
button{
display: flex;
justify-content: center;
align-items: center;
margin: 7px auto;
width: 80%;
height: 52px;
font-size: 19.976px;
line-height: 25px;
border: 1px solid #D5D5D5;
background: #FF4791;
border-radius: 8px;
cursor:pointer; 
}
p{
font-weight: 700;
font-size: 14px;
line-height: 16px;
color: #FFFFFF;
}
`;

const Top = styled.div`
display: flex;
justify-content: space-between;

img{
    width: 74px;
    height: 50px;
    padding: 32px 0px 0px 10%;
}
    ion-icon{
    color: white;
    width: 34px;
    height: 34px;
    cursor:pointer; 
    padding: 15px 10% 0px 0px;
    }
`;

const Bottom = styled.div`
display: flex;
flex-direction: column;
position: absolute;
width: 100%;
bottom:0px;
margin: 0 auto;

button{
    display: flex;
justify-content: center;
align-items: center;
margin: 7px auto;
width: 80%;
height: 52px;
font-size: 19.976px;
line-height: 25px;
border: 1px solid #D5D5D5;
background: #FF4791;
border-radius: 8px;
cursor:pointer; 
}
p{
font-weight: 700;
font-size: 14px;
line-height: 16px;
color: #FFFFFF;
}
`;