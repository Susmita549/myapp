import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { About } from './About'
import { Home } from './Home'
import { Alert } from './Alert'
import { Navbar } from './Navbar'
import TextForm from './TextForm'




export const MyApp = () => {

  const[mode,setMode]=useState('light')
  const[alert,setAlert]=useState(null)
 const showAlert=(message,type)=>{
   setAlert({
     msg:message,
     type:type
   })
 }

 setTimeout(()=>{
  setAlert(null)
 },3000)

  const toggleMode=() => {
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor="grey";
      // document.body.style.color="white"
      showAlert("Dark","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="pink";
      // document.body.style.color="black";
      showAlert("Light","success");
    }
  }
  return (
    

    <>
    <Navbar title="Textutils" about="ABOUT" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
     <Routes>
     
    
     <Route path="textform" element={ <TextForm title="Enter Your Text Heree..."  showAlert={showAlert} mode={mode}/>}/>
     <Route path="about" element={<About/>}/>
     <Route path="home" element={<Home/>}/>
     
     
     
      </Routes>
    
    </>

    
  )
}
