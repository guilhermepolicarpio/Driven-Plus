import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from './UserContext';


export default function Registration(){
    
    const { userInfo} = useContext(UserContext);    
    let navigate = useNavigate();
    
    
    return(

<Box>
<ion-icon name="arrow-back-sharp" onClick ={() => navigate("/home")} ></ion-icon>
<Forms >
    <Input type="text"  placeholder={userInfo.name} name='name' disabled="true"/>
    <Input type="text"  placeholder={userInfo.cpf} name='cpf' disabled="true"/>
    <Input type="email"  placeholder={userInfo.email} name='email' disabled="true" />
    <button type="submit" onClick ={() => navigate(`/users/${userInfo.id}/update`)} >
        <p> ATUALIZAR</p>
    </button>
</Forms>
</Box>
)}

const Box = styled.div`
display: flex;
flex-direction: column;
align-items: center;


ion-icon{
margin: 15px 0px 150px -70%;
color: white;
width: 28px;
height: 32px;
cursor:pointer; 
}

h3{
padding: 20px;
text-align: center;
text-decoration-line: underline;
color: #FFFFFF;
}

h3:hover{
text-decoration: underline ;
}
`;

const Forms = styled.form`

display: flex;
flex-direction: column;
align-items: center;
width: 72%;

button{
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 52px;
font-size: 19.976px;
line-height: 25px;
border: 1px solid #D5D5D5;
background: #FF4791;
border-radius: 8px;
cursor:pointer; 
}
p{
color:white;
}
`;

const Input= styled.input`
display: flex;
justify-content: center;
width:100%;
height:45px;
color: #DBDBDB;
font-size: 19.976px;
line-height: 25px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 8px;
margin-bottom: 15px;

`;