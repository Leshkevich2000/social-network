import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import LoginContainer from './components/login/LoginContainer';
import { connect } from 'react-redux';
import { initializeApp } from './redux/appReducer';
import Preloader from './components/Preloader/Preloader';

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return (<Preloader />)
        }
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
                        <Route path='/login' element={<LoginContainer />} />

                    </Routes>
                </div>
            </div>

        );
    }
}

let mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized,
    }
}
export default connect(mapStateToProps, { initializeApp })(App);

