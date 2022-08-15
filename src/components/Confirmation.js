import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import UserContext from './UserContext';
import { useState,useContext,useEffect } from "react";
import { getPlan, signPlan,loginUser } from '../services/Services';

export default function Confirmation(){

const [emailPassword] = useState({ email: '', password: '' });
const [isModalVisible, setIsModalVisible]= useState(false);
const [load, setLoad]= useState(false);
const { userInfo,plan,values, setValues,dataPlan, setDataPlan,setUserInfo } = useContext(UserContext);
const navigate = useNavigate();

const config = {
    headers: {
        "Authorization": `Bearer ${userInfo.token}`,
    }
}

const Change = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    }

useEffect(() => {   
    setLoad(false)
    getPlan(plan,config).then((r) => {
    setDataPlan(r.data)
    setLoad(true)
})
.catch((r) =>{
    alert(r)
});
},[]);

function sendForm(){
values.membershipId=plan

signPlan(values,config).then((r) => {
    emailPassword.email=userInfo.email;
    emailPassword.password=userInfo.password;
    console.log(emailPassword);
    loginUser(emailPassword).then((res) => {
    setUserInfo(res.data);
    navigate(`/home`)
    })
    
})
.catch((r) => {
    alert("Preencha os dados corretamente")
    setIsModalVisible(!isModalVisible)
})}

if(load===false){    return "carregando" }
return(
<Page>
    <ion-icon name="arrow-back-sharp" onClick ={() => navigate("/subscriptions")} ></ion-icon>
<Box>
   <img src={dataPlan.image} alt=""/>
   <p>{dataPlan.name} </p>
</Box>
   <Benefits>
    <ion-icon name="reader-outline"> </ion-icon>
    <h1> Beneficios</h1>
    </Benefits>

    {dataPlan.perks.map((value,index) =>(
     <PlanBenefits key={value.id}>
        <h2>{index+1}.</h2>
        <h2>{value.title}</h2> 
      </PlanBenefits>    
    ))}

    <PriceBox>
        <ion-icon name="cash-outline"> </ion-icon>
        <h1>Preço</h1>
    </PriceBox>
    <Price>
         <h1> R$ {dataPlan.price} cobrados separadamente</h1>
    </Price>
    <Forms >
        <Input type="text"  placeholder=" Nome impresso no cartão" onChange={Change} name='cardName'  />
        <Input type="text"  placeholder=" Digitos do cartão" onChange={Change} name='cardNumber' />
        <Security>
            <InputSecurity type="password"  placeholder=" Código de segurança" onChange={Change} name='securityNumber'  />
            <InputSecurity type="text"  placeholder=" Validade */*" onChange={Change} name='expirationDate' />
        </Security>
            <button onClick={(e) => { e.preventDefault(); setIsModalVisible(!isModalVisible) }}>
                <p> ASSINAR</p>
            </button>
            </Forms>
    {isModalVisible ?
    <Modal>
        <ModalBox>
            <ModalQuestion>
                <h1>
                    Tem certeza que deseja assinar o plano {dataPlan.name} (R${dataPlan.price}) ?
                </h1>
            </ModalQuestion>
            <ModalOption>
                <Não onClick={(e) => { e.preventDefault(); setIsModalVisible(!isModalVisible)}}>
                    <p> Não</p>
                </Não>
                <Sim onClick={(e) => { e.preventDefault(); sendForm()}}>
                    <p> Sim</p>
                </Sim>
            </ModalOption>
        </ModalBox>
    </Modal> 
     :
    
    <></>}
    

</Page>
)
}

const Page = styled.div`
position: relative;
height:100%;

ion-icon{
padding: 15px 0px 0px 15px;
color: white;
width: 28px;
height: 32px;
cursor:pointer; 
}
`;

const Box = styled.div`
padding-top:15px ;
display: flex;
flex-direction: column;
align-items: center;
width:100%;

p{
padding: 10px 0px 0px 0px;
font-weight: 700;
font-size: 32px;
line-height: 38px;
color: #FFFFFF;
}

img{
    max-width:30%;
    max-height: 30%;
}

ion-icon{
    color: #FF4791;;
}
`;

const Benefits= styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
padding: 22px 0px 8px 40px;
ion-icon{
    color: #FF4791;;
}
h1{
color: #FFFFFF;
font-weight: 400;
font-size: 16px;
line-height: 19px;
padding: 15px 0px 0px 5px;
}
`;

const PriceBox= styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
padding: 0px 0px 8px 40px;
ion-icon{
    color: #FF4791;;
}
h1{
color: #FFFFFF;
font-weight: 400;
font-size: 16px;
line-height: 19px;
padding: 15px 0px 0px 5px;
}
`;

const Price= styled.div`
display: flex;
padding: 0px 0px 8px 60px;
h1{
color: #FFFFFF;
font-weight: 400;
font-size: 16px;
line-height: 19px;
}
`;

const PlanBenefits= styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
padding: 4px 0px 0px 60px;

h2{
color: #FFFFFF;
font-weight: 400;
font-size: 16px;
line-height: 19px;
padding-right: 5px;
}
`;

const Input= styled.input`
display: flex;
justify-content: center;
width:80%;
height:42px;
color: #DBDBDB;
font-size: 17px;
line-height: 25px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 8px;
margin-bottom: 10px;

`;

const Forms = styled.form`

display: flex;
flex-direction: column;
align-items: center;
width: 100%;
margin-top: 20%;

button{
display: flex;
justify-content: center;
align-items: center;
width: 80%;
height: 42px;
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

const Security = styled.div`
display: flex;
justify-content: space-between;
width:80%;

`;

const InputSecurity= styled.input`
display: flex;
justify-content: center;
width:45%;
height:42px;
color: #DBDBDB;
font-size: 16px;
line-height: 25px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 8px;
margin-bottom: 10px;
`;

const Modal= styled.div`
width: 100%;
height:100%;
display: flex;
justify-content: center;
align-items:center;
position: absolute;
top:0;
left:0;
background-color: rgba(0,0,0,0.8);
`;

const ModalBox= styled.div`

width: 248px;
height: 210px;
position: absolute;
background-color: #FFFFFF;
color: #000000;

`;

const Não= styled.div`

width: 95px;
height: 52px;
background: #CECECE;
border-radius: 8px;
display: flex;
justify-content: center;
align-items: center;
p{
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: #FFFFFF; 
}
`;

const Sim= styled.div`

width: 95px;
height: 52px;
background: #FF4791;
border-radius: 8px;
display: flex;
justify-content: center;
align-items: center;
p{
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: #FFFFFF; 
}
`;

const ModalQuestion= styled.div`

padding: 50px 0px 10px 0px;
h1{
font-weight: 700;
font-size: 18px;
line-height: 21px;
text-align: center;
color: #000000;
}
`;

const ModalOption= styled.div`

padding: 20px 0px 0px 0px;
display: flex;
justify-content: space-evenly;
`;