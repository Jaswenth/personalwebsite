import React from 'react'
import Sidebar from './components/Sidebar'
import Introduction from './components/Introduction'
import About from './components/About'
import Timeline from './components/Timeline'
import './App.css';

function App() {
  return (
    <div id="colorlib-page">
    <div id="container-wrap">
         <Sidebar></Sidebar>
            <div id="colorlib-main">
                <Introduction></Introduction>
                <About></About>
                <Timeline></Timeline>
          </div>
      </div>
  </div>
  );
}

export default App;
