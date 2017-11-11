import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

axios.interceptors.request.use(request => {
        console.log(request);
        // edit request config
        return request;
    },
    error => {
        console.log(error);
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(response => {
        console.log(response);
        // edit request config
        return response;
    },
    error => {
        console.log(error);
        return Promise.reject(error);
    }
);

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
