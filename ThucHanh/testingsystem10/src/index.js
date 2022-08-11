import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
//import store from "./exercise1/question1/1. Middleware/redux-thunk/VD1/redux/store";
// vd2 error
//import store from "./exercise1/question1/1. Middleware/redux-thunk/VD2/Error/redux/store";
// vd2 redux-thunk
//import store from "./exercise1/question1/1. Middleware/redux-thunk/VD2/Redux-thunk/redux/store";
//vd3
//import store from "./exercise1/question1/1. Middleware/redux-thunk/VD3/redux/store";
//vd1 redux DevTools
//import store from "./exercise2/question1/2. Redux DevTools/VD1/redux/store";
// vd2 redux Dev Tools
//import store from "./exercise2/question1/2. Redux DevTools/VD2/redux/store";
// vd1 redux toolkit counterReducer
//import store from "./exercise3/3. Redux Toolkit/VD1/redux/store";
// vd2 redux toolkit counterSlide
//import store from "./exercise3/3. Redux Toolkit/VD2/redux/store";
// vd3 redux toolkit counter
//import store from "./exercise3/3. Redux Toolkit/VD3/redux/store";
// vd4 redux toolkit counter todo
//import store from "./exercise3/3. Redux Toolkit/VD4/redux/store";
// vd5 redux toolkit counter api
//import store from "./exercise3/3. Redux Toolkit/VD5/redux/store";
// vd6 redux toolkit counter
import store from "./exercise3/3. Redux Toolkit/VD6/redux/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
