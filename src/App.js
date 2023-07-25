import { useState } from 'react';
import Navbar from './components/Navbar';
import Alert from './components/Alert'
import Textform from './components/Textform';
import About from './components/About'
import { BrowserRouter, Route, Routes } from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  /*const removeclasses = (cls)=>{
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
    switch (cls) {
      case 'primary':
        setMode('dark')
        document.body.classList.add('bg-'+cls)
        break;
      case 'success':
        setMode('dark')
        document.body.classList.add('bg-'+cls)
        break;
      case 'danger':
        setMode('light')
        document.body.classList.add('bg-'+cls)
        break;
      case 'warning':
        setMode('light')
        document.body.classList.add('bg-'+cls)
        break; 
      case 'dark':
        setMode('dark')
          document.body.classList.add('bg-'+cls)
          break;
      case 'light':
        setMode('light')
        document.body.classList.add('bg-'+cls)
        break; 
    
      default: console.log("Somethin Happened Brogramer")
        break;
    }
  }*/
  const toggleMode =()=>{
    //removeclasses()
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
    <BrowserRouter>
    <Navbar title="EditEase" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    
    <div className="container">
        <Routes>
  
        <Route exact path="/About" element={<About mode={mode}/>}> 
        </Route>
       <Route exact path="/Textform" element={<Textform heading="Enter Text to Analyze" mode={mode} showAlert={showAlert}/>}>
        </Route>
      
        </Routes>
    </div>
    
    </BrowserRouter>
    </>
  );
}

export default App;
