import logo from './logo.svg';
import './App.css';
import React from "react";
import Header from "./components/Header.js";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Home
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <body>
        <h1>yjytim.com</h1>
      </body>
      <Footer/>
    </div>
  );
}

export default App;
