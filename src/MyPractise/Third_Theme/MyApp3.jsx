import React from 'react'
import { About } from './About'
import { Navbar } from './Navbar'



export const MyApp3 = () => {
  return (
    <>

      <Navbar title="Textutils" about="ABOUT"/>
      <div className="container  my-3" >
      {/* <TextForm title="Enter Your Text Here..."/> */}
      <About/>
      </div>

    </>
  )
}
