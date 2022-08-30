import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter} from 'react-router-dom'

import Post from './components/Profile/MyPosts/Post/Post'
import Dialog from './components/Dialogs/Dialog/Dialog'
import Message from './components/Dialogs/Message/Message';

const postItems = [
  {name: "nurik2160", message: "post 1"},
  {name: "dauren", message: "post 2"},
  {name: "narkoz520", message: "post 3"},
]

const posts = postItems.map((item, index) => {
  return <Post name={item.name} message={item.message} key={index} />
})


const dialogItems = [
  {id: 1, name: "Даурен"},
  {id: 2, name: "Нуркен"},
  {id: 3, name: "Кусайын"},
  {id: 4, name: "Быржан"},
]

const messageItems = [
  {message: "Салам"},
  {message: "Как дела?"},
  {message: "Что делаешь?"},
  {message: "Как ты?"},
]

const dialogs = dialogItems.map((item, index) => {
  return <Dialog id={item.id} name={item.name} key={index} />
})

const messages = messageItems.map((item, index) => {
  return <Message message={item.message} key={index} />
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App posts={posts} dialogs={dialogs} messages={messages}/>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
