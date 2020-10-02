import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './i18n';
import App from './components/App';


ReactDOM.render(
    <Suspense fallback={(<div>Loading</div>)} >
        <App />,
    </Suspense>,
    document.querySelector('#root')
)