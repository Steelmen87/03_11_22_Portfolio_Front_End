import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './p1-main/m1-ui/u1-app/App';
import {Provider} from "react-redux";
import store from "./h10/bll/store";

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)
;