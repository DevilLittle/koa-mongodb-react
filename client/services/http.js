import axios from 'axios';

axios.defaults.baseURL = 'http://172.28.194.47:8088';

export const GET = function (url) {
    return function (params) {
        return new Promise((resolve, reject) => {
            axios.get(url, {
                params
            }).then(response => {
                resolve(response.data.data);
            }).catch(error => {
                reject(error); // 抛出 error
            });
        });
    };
};

export const POST = function (url) {
    return function (params) {
        return new Promise((resolve, reject) => {
            axios.post(url, params).then(response => {
                resolve(response.data.data);
            }).catch(error => {
                reject(error);
            });
        });
    };
};

export const DELETE = function (url) {
    return function (data) {
        return new Promise((resolve, reject) => {
            axios.delete(url, {
                data
            }).then(response => {
                resolve(response.data.data);
            }).catch(error => {
                reject(error);
            });
        });
    };
};

export const PUT = function (url) {
    return function (params) {
        return new Promise((resolve, reject) => {
            axios.put(url, params).then(response => {
                resolve(response.data.data);
            }).catch(error => {
                reject(error);
            });
        });
    };
};