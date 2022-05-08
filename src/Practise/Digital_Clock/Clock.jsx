import React, { useState } from 'react'

export const Clock = () => {

    let time=new Date().toLocaleTimeString()
    const [ctime,setCtime]=useState(time)
    const getTime=()=>{
        time=new Date().toLocaleTimeString()
        setCtime(time)
    }
    setInterval(getTime,1000)
  return (
    <>
    <div className="container my-5">
        <h1>{ctime}</h1>
       
    </div>
    </>
  )
}
