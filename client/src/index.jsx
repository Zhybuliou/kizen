import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto';
import App from './App';
import {store} from './reducers';
import {Provider} from 'react-redux';



ReactDOM.render(
<Provider store={store}>
<App />
</Provider>,
document.getElementById('root')
);
