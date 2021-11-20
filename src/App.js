import './App.css';
import React from "react";
import Header from "./views/Header/Header";
import Footer from "./views/Footer/Footer";
import Navbar from "./views/Navbar/Navbar";
import Profile from "./views/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {Routes} from "react-router";

//function App() {
const App = (props) => {
    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route exact path='/dialogs' element={<Dialogs
                            state={props.state.dialogsPage}
                        />} />
                        <Route path='/profile' element={<Profile
                            state={props.state.profilePage}
                            addPost={props.addPost}
                        />} />
                    </Routes>
                </div>
                <Footer/>
            </div>
    );
}

export default App;
