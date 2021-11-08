import './App.css';
import React from "react";

//function App() {
const App = () => {
  return (
    <div className="App">
        <Header/>
        <Technologies />
    </div>
  );
}

const Header = () => {
    return (
        <div className="App">

            <a href='#s'>Home </a>
            <a href='#s'>News Feed </a>
            <a href='#s'>Message </a>

        </div>
    );
}

const Technologies = () => {
    return (
      <div>
          <ui>
              <li>css</li>
              <li>html</li>
              <li>react</li>
          </ui>
      </div>
    );
}

export default App;
