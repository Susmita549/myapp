import React, { useState } from 'react'
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
      // showAlert("Dark","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="pink";
      // document.body.style.color="black";
      // showAlert("Light","success");
    }
  }
  return (
    <>

      <Navbar title="Textutils" about="ABOUT" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container  my-3" >
      <TextForm title="Enter Your Text Heree..."  showAlert={showAlert} mode={mode}/>
      </div>

    </>
  )
}
