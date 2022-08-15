import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import { useContext,useState } from "react";
import UserContext from './UserContext';
import { updateUser,loginUser } from '../services/Services';


export default function Registration(){
    const { userInfo,setUserInfo} = useContext(UserContext); 
    
    const [values, setValues] = useState({name: '', cpf: `${userInfo.cpf}`,email: '',  currentPassword:`${userInfo.password}`, newPassword: '' });   
    let navigate = useNavigate();
    

const Change = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    }
const SendForm = (e) =>{   
    e.preventDefault();
    const config = {
        headers: {
            "Authorization": `Bearer ${userInfo.token}`,
        }}
    
    
    updateUser(values,config).then((e) => {
        console.log(e)
        navigate(`/users/${userInfo.id}`)
        const newInfo={email:values.email, password: values.newPassword} 
        localStorage.setItem("user", JSON.stringify(newInfo))
        loginUser(newInfo).then((res) => {
            setUserInfo(res.data);
        })
        alert("Usuario atualizado com sucesso!")
    })
    
    .catch((res) => {
    console.log(values)
        alert(res.response.data.message)
        })
    }

            
return(

<Box>
<ion-icon name="arrow-back-sharp" onClick ={() => navigate("/home")} ></ion-icon>
<Forms onSubmit={(e) => {e.preventDefault();SendForm(e)}}>
    <Input type="text"  placeholder={userInfo.name} name='name' onChange={Change} value={values.name}/>
    <Input type="text"  placeholder={userInfo.cpf} name='cpf' disabled={true}/>
    <Input type="email"  placeholder={userInfo.email} name='email'  onChange={Change} value={values.email}/>
    <Input type="password"  placeholder={userInfo.password} name='curpassword' disabled={true} />
    <Input type="password"  placeholder=" Nova Senha" name='newPassword' onChange={Change} value={values.newPassword}/>
    <button type="submit" >
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