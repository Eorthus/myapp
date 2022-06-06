import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import './style.css'
import { Header } from "./components";
import { ProfilePage, ChatPage, HomePage } from "./pages";
import { store } from "./store";
import { Provider } from "react-redux";
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
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/chat/*" element={<ChatPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);

