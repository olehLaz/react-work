import './App.css';
import React from "react";
import Header from "./views/Header";
import Technologies from "./views/Technologies";
import Footer from "./views/Footer";

//function App() {
const App = () => {
  return (
      <div className='app-wrapper'>
          <header className='header'>
              <img
                  src='https://st2.depositphotos.com/1064024/10769/i/600/depositphotos_107694484-stock-photo-little-boy.jpg'/>
              <Header/>
          </header>
          <nav className='nav'>
              <div>Profile</div>
              <div>Messages</div>
              <div>Main content</div>
          </nav>

          <div className='content'>
              <div>
                  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQIeCxX7mFVg3phbJYG5Ho6dR_apaGg5wjbg&usqp=CAU' />
              </div>
              <div>
                  ava + description
              </div>
              <div>
                  My Posts
                  <div>
                      New post
                  </div>
                  <div>
                      <div>post 1</div>
                      <div>post 2</div>
                      <div>post 3</div>
                  </div>
              </div>
              <Technologies/>
          </div>

          <footer className='footer'><Footer/></footer>
      </div>
  );
}

export default App;
