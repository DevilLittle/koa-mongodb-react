import axios from 'axios';

export const GET = function (url) {
    return function (params) {
        return new Promise((resolve, reject) => {
            axios.get(url, {
                params
            })
                .then(response => {
                    resolve(response.data.data);
                })
                .catch(error => {
                    console.log(error);
                });
        });
    };
};

export const POST = function (url) {
    return function (params) {
        return new Promise((resolve, reject) => {
            axios.post(url, params)
                .then(response => {
                    resolve(response.data.data);
                })
                .catch(error => {
                    console.log(error);
                });
        });
    };
};

export const DELETE = function (url) {
    return function (params) {
        return new Promise((resolve, reject) => {
            axios.delete(url, {
                params
            })
                .then(response => {
                    resolve(response.data.data);
                })
                .catch(error => {
                    console.log(error);
                });
        });
    };
};

export const PUT = function (url) {
    return function (params) {
        return new Promise((resolve, reject) => {
            axios.put(url, params)
                .then(response => {
                    resolve(response.data.data);
                })
                .catch(error => {
                    console.log(error);
                });
        });
    };
};