import styled from 'styled-components';
import UserContext from './UserContext';
import { useContext } from "react";
import { useNavigate } from "react-router-dom";


export default function Home(){

    const { values,userInfo,plan,setPlan,dataPlan, setDataPlan } = useContext(UserContext);

function linkPage(pageLink){
    window.open(pageLink, '_blank');
}

return(
    <Page> 
        <Top>
            <img src={dataPlan.image} alt=""/>
            <ion-icon name="person-circle-outline"></ion-icon>
        </Top>
        <h1>Olá, {userInfo.name}</h1>

        {dataPlan.perks.map((value,index) =>(
            <button onClick={() => linkPage(value.link)} key={index}>
                <p > {value.title}</p>
            </button>          
        ))}

    </Page>
)}

const Page = styled.div`
position: relative;
display: flex;
flex-direction: column;
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
    padding: 32px 0px 0px 48px;
}
    ion-icon{
    color: white;
    width: 34px;
    height: 34px;
    cursor:pointer; 
    padding: 15px 32px 0px 0px;
 
    }
`;