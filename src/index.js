import React from 'react';
import ReactDOM from 'react-dom/client';
import {Message} from './components/message/message';
const root = ReactDOM.createRoot(document.getElementById('root'));
const text = 'message';
root.render(
  <React.StrictMode >
<Message props1={text}/>
  </React.StrictMode>
);

