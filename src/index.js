import React from "react";
import { render } from "react-dom";
//import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from "react-redux";
// Redux Store
import configureStore from "./shared/redux/configureStore";

import "./styles.css";
import Home from "./Home";
import Contacto from "./Contacto";

// Configuring Redux Store
const store = configureStore(window.initialState);

// DOM
const rootElement = document.getElementById("root");

const App = props => <div>{props.children}</div>;
// App Wrapper
const renderApp = Component => {
  render(
    <Provider store={store}>
      <Component>
        <Home textoAdicional=" esto es un texto" />
        <Contacto />
      </Component>
    </Provider>,
    rootElement
  );
};

// Rendering our App
renderApp(App);
