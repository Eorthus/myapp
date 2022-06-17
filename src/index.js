import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import './style.css'
import { Header } from "./components";
import { ProfilePage, ChatPage, HomePage, GistsPage } from "./pages";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";
//import {green} from '@mui/material/colors';
const theme = createTheme({
  myPalette: {
color:"red",
  },
  palette:{}
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
    <ThemeProvider theme={theme}>
    <Provider store={store}>
    <PersistGate persistor={persistor}>
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/chat/*" element={<ChatPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/gists" element={<GistsPage />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
      </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);

