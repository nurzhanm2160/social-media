import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
// import Profile from './components/Profile/Profile';
// import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/UsersContainer/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginForm from './components/LoginForm/LoginForm';
import Preloader from './components/common/Preloader/Preloader';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const Profile = React.lazy(() => import('./components/Profile/Profile'));

const App = () => {
    return (
        <div className='app-wrapper'>
            <HeaderContainer />
            <Navbar />
            <div className='content'>
                <Suspense fallback={<Preloader />}>
                    <Routes>
                        <Route exact path='profile' element={<Profile />} />
                        <Route path='profile/:userId' element={<Profile />} />
                        <Route path='dialogs' element={<DialogsContainer />} />
                        <Route path='users' element={<UsersContainer />} />
                        <Route path='login' element={<LoginForm />} />
                    </Routes>
                </Suspense>
            </div>
        </div>
    );
};

export default App;
