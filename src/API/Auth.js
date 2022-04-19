import axios from 'axios';
const loginUrl = 'http://localhost:3001/api/v1/user/login';
const profileUrl = 'http://localhost:3001/api/v1/user/profile';

export const apiLogin = (email, password) => {
    return axios.post(loginUrl, {
        email: email,
        password: password
    })
        .then(response => {
            console.log(response, "ok");
            return response;
        })
        .catch(error => {
            console.log(error, "error");
            return error;
        });
}

export const apiProfile = (token) => {
    return axios.get(profileUrl, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            console.log(response, "ok");
            return response;
        })
        .catch(error => {
            console.log(error, "error");
            return error;
        });
}
export const changeUserData = (token, firstName, lastName) => {
    return axios.put(profileUrl, {
        firstName,
        lastName
    }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            return response;
        })
        .catch(error => {
            return error;
        });
}