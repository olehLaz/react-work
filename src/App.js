import './App.css';
import React from "react";
import Header from "./views/Header/Header";
import Footer from "./views/Footer/Footer";
import Navbar from "./views/Navbar/Navbar";
import Profile from "./views/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {Routes} from "react-router";
import pr from "./components/Dialogs/Dialogs.module.css";

//function App() {
const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route exact path='/dialogs' element={<Dialogs/>} />
                        <Route path='/profile' element={<Profile/>} />
                    </Routes>
                </div>
                {/* <Profile />*/}
                {/*<Dialogs />*/}
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
