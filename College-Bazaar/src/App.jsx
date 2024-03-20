import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ContactUs from "./ContactUs";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";

function About() {
  return (
    <div>
      <h1>About</h1>
      <p>This is the about page.</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>My React App</h1>
        <Link to="/about">About</Link>
        <Route path="/about" component={About} />
      </div>
    </BrowserRouter>
  );
}

export default App;
