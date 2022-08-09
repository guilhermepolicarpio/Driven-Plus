import axios from 'axios';

function newUser(values) {
    const promise = axios.post(`https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up`, values);
    return promise;
}

function loginUser(values) {
    const promise = axios.post(`https://mock-api.driven.com.br/api/v4/driven-plus/auth/login`, values);
    return promise;
}

  export {newUser,loginUser};