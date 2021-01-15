import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Home from "./components/Home";
import CourseStructure from "./components/CourseStructure";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Home}/>
        <Route path="/:coursename" component={CourseStructure}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
