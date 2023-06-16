// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./components/App";
// import store from "./store";
// import {Provider} from "react-redux";





// ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
