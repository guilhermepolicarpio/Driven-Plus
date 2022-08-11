import axios from 'axios';

function newUser(values) {
    const promise = axios.post(`https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up`, values);
    return promise;
}

function loginUser(values) {
    const promise = axios.post(`https://mock-api.driven.com.br/api/v4/driven-plus/auth/login`, values);
    return promise;
}

function getPlans(config){
    const promise = axios.get(`https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships`, config);
    return promise;
}

function getPlan(id,config){
    const promise = axios.get(`https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${id}`, config);
    return promise;
}

function signPlan(values,config){
    const promise = axios.post(`https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions`,values, config);
    return promise;
}

  export {newUser,loginUser,getPlans,getPlan,signPlan};