import './App.css';
import React from "react";
import Header from "./views/Header";
import Technologies from "./views/Technologies";
import Footer from "./views/Footer";
import Navbar from "./views/Navbar";
import Profile from "./views/Profile";

//function App() {
const App = () => {
  return (
      <div className='app-wrapper'>
              <Header/>
              <Navbar/>
              <Profile/>
              <Footer />
      </div>
  );
}

export default App;
