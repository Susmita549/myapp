import React from 'react'
import { Navbar } from './Navbar'
import TextForm from './TextForm'


export const MyApp1 = () => {
  return (
    <>

      <Navbar title="Textutils" about="ABOUT"/>
      <div className="container  my-3" >
      <TextForm title="Enter Your Text Here..."/>
      </div>

    </>
  )
}
