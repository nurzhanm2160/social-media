import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter} from 'react-router-dom'

import Post from './components/Profile/MyPosts/Post/Post'
import Dialog from './components/Dialogs/Dialog/Dialog'
import Message from './components/Dialogs/Message/Message';

import { state, addPost } from './redux/state'



const posts = state.posts.map((item, index) => {
  return <Post name={item.name} message={item.message} key={index} />
})


const dialogs = state.dialogs.map((item, index) => {
  return <Dialog id={item.id} name={item.name} key={index} />
})

const messages = state.messages.map((item, index) => {
  return <Message message={item.message} key={index} />
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App posts={posts} dialogs={dialogs} messages={messages} addPost={addPost} />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
