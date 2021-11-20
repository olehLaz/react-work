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

    /*let postData = [
        {id: 1, message: 'Hi, how a you?', likesCount: 12},
        {id: 2, message: 'It s my first post', likesCount: 0},
        {id: 3, message: 't s trust post', likesCount: 5},
    ]
*/
    return (

            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route exact path='/dialogs' element={<Dialogs
                            state={props.state.dialogsPage}
                            /*messagesData={props.state.messagesData}*/
                        />} />
                        <Route path='/profile' element={<Profile
                            /*postData={props.state.postData}*/
                            state={props.state.profilePage}

                        />} />
                    </Routes>
                </div>
                {/* <Profile />*/}
                {/*<Dialogs />*/}
                <Footer/>
            </div>
    );
}

export default App;
