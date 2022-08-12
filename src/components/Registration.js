import styled from 'styled-components';
import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";
import { newUser } from '../services/Services';

export default function Registration(){
const [values, setValues] = useState({ email: '', name: '', cpf: '', password: '' });
let navigate = useNavigate();

const Change = (e) => {
setValues({ ...values, [e.target.name]: e.target.value });
}

const SendForm = (e) =>{   
e.preventDefault();

newUser(values).then(() => {
    navigate("../")
    alert("Usuario criado com sucesso!")
})

.catch((res) => {
    alert(res.response.data.message)
  })
}

return(
<Box>
<Forms onSubmit={(e) => SendForm(e)}>
    <Input type="text"  placeholder=" Nome" name='name' onChange={Change} value={values.name} />
    <Input type="text"  placeholder=" CPF" name='cpf' onChange={Change}  value={values.cpf} />
    <Input type="email"  placeholder=" E-mail" name='email' onChange={Change}  value={values.email} />
    <Input type="password"  placeholder=" Senha" name='password'  onChange={Change} value={values.password} />
    <button type="submit">
        <p> CADASTRAR</p>
    </button>
</Forms>
<Link to="/"><h3>Já tem uma conta? Entre!</h3></Link>
</Box>
)}

const Box = styled.div`
padding-top:147px ;
display: flex;
flex-direction: column;
align-items: center;

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