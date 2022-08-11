import styled from 'styled-components';
import Image from "./images/Driven_white.png"
import { Link,useNavigate } from "react-router-dom";
import { loginUser } from '../services/Services';
import { useState,useContext } from "react";
import UserContext from './UserContext';

export default function Login(){

    const [values, setValues] = useState({ email: '', password: '' });
    const { setUserInfo,userInfo } = useContext(UserContext);

    let navigate = useNavigate();

    const Change = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    }

    const SendLogin = (e) =>{ 
        e.preventDefault();
         
        loginUser(values).then((res) => {
        setUserInfo(res.data);
        alert("Login com sucesso")
        navigate("../subscriptions")
        })
    
        loginUser(values).catch((res) => {
     
        alert(res.response.data.message)
    
        })
      }
    return(
        <Box>
            <img src={Image} alt="Driven-logo"/>
            <Forms onSubmit={(e) => SendLogin(e)}>
                <Input type="email" onChange={Change} placeholder=" E-mail" name='email'  value={values.email}  />
                <Input type="password" onChange={Change} placeholder=" Senha" name='password' value={values.password}    />
                <button type="submit">
                    <p> ENTRAR</p>
                </button>
            </Forms>
            <Link to="/sing_up"><h3>Não tem uma conta? Cadastre-se!</h3></Link>
        </Box>
        
    )
}

const Box = styled.div`

display: flex;
flex-direction: column;
align-items: center;


img{
padding: 134px 0px 100px 0px;
width: 299px;
height: 49px;
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