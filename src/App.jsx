import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/UsersContainer/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';

const App = () => {
    return (
        <div className='app-wrapper'>
            <HeaderContainer />
            <Navbar />
            <div className='content'>
                <Routes>
                    <Route exact path='profile' element={<Profile />} />
                    <Route path='profile/:userId' element={<Profile />} />
                    <Route path='dialogs' element={<DialogsContainer />} />
                    <Route path='users' element={<UsersContainer />} />
                </Routes>
            </div>
        </div>
    );
};

export default App;
