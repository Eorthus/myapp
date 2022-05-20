import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import {MessageList, FolderList} from "./components";
import { ThemeProvider, createTheme } from "@mui/material";
import './style.css'
import {green} from '@mui/material/colors';
const theme = createTheme({
  palette: {

     primary: {
        main: green[500],
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
    <ThemeProvider theme={theme}>
      <div class="display">
            <FolderList/>
    <MessageList />
    </div>

    </ThemeProvider>
  </React.StrictMode>
);

