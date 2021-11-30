import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogData = [
  {id: 1, name: "Lena"},
  {id: 2, name: "Leha"},
  {id: 3, name: "Andy"}
];

let messageData = [
{id: 1, text: "hi"},
{id: 2, text:"kaka"},
{id: 3, text:"lol"},
{id: 4, text:"hi"},
];

let postData = [
{ id: 1, message: "Hi, how are you?", likesCount: 2 },
{ id: 2, message: "Hi, how old are you", likesCount: 4 },
{ id: 3, message: "Andy", likesCount: 6 },
];

ReactDOM.render(
  <React.StrictMode>
    <App dialogData={dialogData} messageData={messageData} postData={postData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
