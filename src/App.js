import React, {useState} from 'react';
import './App.css';
import Navbar from './components/navbar.js';
import TextForm from './components/TextForm.js';
import Alert from './components/alert.js';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import About from './components/About';




function App(props) {



  const[mode, setMode] = useState('light');
  const[switchText, setSwitchText] = useState('Enable Dark Mode');
  const[alert, setAlert] = useState(null)
 

  const toggleMode = ()=>{
    if (mode === "light") {
      setMode("dark")
      document.body.style.background="#292828"
      setSwitchText("Enable Light Mode")
      showAlert("Dark Mode Enabled", "Success!")
    }
    else{
      setMode("light")
      document.body.style.background="white"
      setSwitchText("Enable Dark Mode")
      showAlert("Light Mode Enabled", "Success!")
    }
  }

  const showAlert = (message, type)=>{
    setAlert({
      message: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  // const router = createBrowserRouter([
  //   {
  //     path: '/',
  //     element: <>
  //       <Navbar title="TextUtils" switchText={switchText} aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
  //       <Alert alert={alert}/>
  //       <TextForm mode={mode} showAlert={showAlert} heading="Enter the text to change" uppercase="Change to uppercase" lowercase="Change to lowercase" summary="Show summary" clearText="Clear Text" InverseCase="Inverse Case"/>
  //     </>
  //   },
  //   {
  //     path: '/about',
  //     element: <>
  //       <Navbar title="TextUtils" switchText={switchText} aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
  //       <About mode={mode}/>
  //     </>
  //   }
  // ])


  return (
      <>
        {/* <RouterProvider router={router} /> */}
        {/* <About mode={mode}/> */}
        <Navbar title="TextUtils" switchText={switchText} aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <TextForm mode={mode} showAlert={showAlert} heading="Enter the text to change" uppercase="Change to uppercase" lowercase="Change to lowercase" summary="Show summary" clearText="Clear Text" InverseCase="Inverse Case"/> 
      </>



  );
}

export default App;
