import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/login/login';
import NavbarContainer from './components/Navbar/NavbarContainer';


let App = (props) => {
    return (
        <div className='app-wrapper'>
            <HeaderContainer />
            <NavbarContainer />
            <div className='content'>
                <Routes>
                    <Route path="/profile/:userId" element={<ProfileContainer />} />
                    <Route path="/dialogs/*" element={<DialogsContainer />} />

                    <Route path='/news' element={<News />} />
                    <Route path='/music' element={<Music />} />
                    <Route path='/settings' element={<Settings />} />
                    <Route path='/users' element={<UsersContainer />} />
                    <Route path='/login' element={<Login />} />

                </Routes>
            </div>
        </div>

    );
}



export default App;
