import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import './style.css'
import { Header } from "./components";
import { ProfilePage, ChatPage, HomePage, GistsPage,   SignUpPage,
  LoginPage, } from "./pages";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";
import { auth } from "./api/firebase";
import { PrivateRoute, PublicRoute } from "./components";
import { onAuthStateChanged } from "firebase/auth";
//import {green} from '@mui/material/colors';
const theme = createTheme({
  myPalette: {
color:"red",
  },
  palette:{}
});

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  const [session, setSession] = useState(null);

  const isAuth = !!session;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setSession(user);
      } else {
        setSession(null);
      }
    });
  }, []);

  return(
    <ThemeProvider theme={theme}>
    <Provider store={store}>
    <PersistGate persistor={persistor}>
    <BrowserRouter>
        <Header session={session}/>
        <Routes>
          <Route path="/profile" element={ <PrivateRoute isAuth={isAuth}>
                    <ProfilePage />
                  </PrivateRoute>} />
          <Route path="/chat/*" element={ <PrivateRoute isAuth={isAuth}>
                    <ChatPage />
                  </PrivateRoute>} />
          <Route path="/" element={<HomePage />} />
          <Route path="/gists" element={    <PrivateRoute isAuth={isAuth}>
                    <GistsPage />
                  </PrivateRoute>} />
                
              <Route
                path="/sign-up"
                element={
                  <PublicRoute isAuth={isAuth}>
                    <SignUpPage />
                  </PublicRoute>
                }
              />
              <Route
                path="/login"
                element={
                  <PublicRoute isAuth={isAuth}>
                    <LoginPage />
                  </PublicRoute>
                }
              />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
      </PersistGate>
      </Provider>
    </ThemeProvider>
  )
}
root.render(
  <React.StrictMode >
   <App/>
  </React.StrictMode>
);

