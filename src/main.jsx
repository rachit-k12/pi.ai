import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { NameProvider } from './context/NameContext';
import App from "./App.jsx";
import { Provider } from "./provider.jsx";
import "./styles/globals.css";
import {TopicProvider} from "./context/TopicContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
          <TopicProvider>
              <NameProvider>
                  <App />
              </NameProvider>
          </TopicProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
