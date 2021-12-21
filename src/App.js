import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import StoreContext from './storeContecst';

let App = (props) => {
    return (

        <div className='app-wrapper'>
            <Header />

            <Navbar />

            <div className='content'>
                <Routes>
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/dialogs/*" element={<DialogsContainer />} />

                    <Route path='/news' element={<News />} />
                    <Route path='/music' element={<Music />} />
                    <Route path='/settings' element={<Settings />} />
                </Routes>
            </div>
        </div>

    );
}



export default App;
