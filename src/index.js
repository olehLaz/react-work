import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postData = [
    {id: 1, message: 'Hi, how a you?', likesCount: 12},
    {id: 2, message: 'It s my first post', likesCount: 0},
    {id: 3, message: 't s trust post', likesCount: 5},
]

let dialogsData = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Oleh'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Viktor'},
    {id: 5, name: 'Valery'},
    {id: 6, name: 'Andrew'}
]

let messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are your'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Traktor'}
]


ReactDOM.render(
  <React.StrictMode>
    <App postData={postData}
         dialogsData={dialogsData}
         messagesData={messagesData}

    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
