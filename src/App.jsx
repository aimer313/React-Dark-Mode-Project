import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";
function App() {
  const [mode , setMode] = useState('light'); // whther dark of not
  const [alert , setAlert] = useState(null)

  const showAlert = (message2 , type) => {
      setAlert({
        msg : message,
        type : type
      })

      setTimeout(() => {
        setAlert(null)
      } , 1500)
  }
  const toggleMode = () => {
      if(mode == 'light') {
        setMode('dark');
        document.body.style.backgroundColor = '#042743'
        showAlert("Dark mode has been enbled" , "success")
        document.title = "TextUtils - Dark Mode";
      } else {
        setMode('light')
        document.body.style.backgroundColor = 'white'
        showAlert("Light mode has been enbled" , "success")
        document.title = "TextUtils - Light Mode";
      }
  }
  return (
    <>
      <Navbar title="TextUtils" aboutText="About" mode = {mode} toggleMode = {toggleMode}/>
      <Alert alert = {alert}/>
      <div className="container my-3">
        <TextForm showAlert = {showAlert} heading = "Enter the Text to Analyze below" mode = {mode}/>
      </div>
      <About/>
    </>
  );
}

export default App;
