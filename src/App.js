import { useState } from 'react';
import Navbar from './components/Navbar';
import Alert from './components/Alert'
import Textform from './components/Textform';
import About from './components/About'
import {Route, Routes } from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const toggleMode =()=>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = "grey";
      showAlert("success","Dark Mode Enabled")
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = "white";
    }
    
  }

  const showAlert = (type, message) =>{
    setAlert({
      typ : type,
      msg : message
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  return (
    <>
    <Navbar title="EditEase" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    
    <div className="container">
        <Routes>
        <Route path="/" element={<Textform heading="Enter Text to Analyze" mode={mode} showAlert={showAlert}/>}/>
        <Route exact path="/About" element={<About mode={mode}/>}/> 
        </Routes>
    </div>
    </>
  );
}

export default App;
