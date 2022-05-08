import React, { useState } from 'react'

const Login = () => {

    const [fullName,setFullName] =useState({
        fname:"",
        lname:"",
        email:"",
        phone:""
    })
    const inputEvent = (event) => {
            
        const{name,value} = event.target;
        setFullName((preValue)=>{
            console.log(preValue);
            return{
                ...preValue,
                [name]:value,
            }
        })

    }
    

    const onSubmits = (event) => {
        event.preventDefault()
        alert("Form Submitted")
    }

  return (
    <div>
        <form onSubmit={onSubmits}>
        <h1>Hello {fullName.fname}{fullName.lname}</h1>
        <p>{fullName.email}</p>
        <p>{fullName.phone}</p>
        <input type="text" name="fname" value={fullName.fname} placeholder="Enter Your First-Name"  onChange={inputEvent}/><br />
        <input type="text" name="lname" value={fullName.lname} placeholder="Enter Your Last-Name"  onChange={inputEvent}/><br />
        <input type="text" name="email" value={fullName.email} placeholder="Enter Your E-mail"  onChange={inputEvent}/><br />
        <input type="text" name="phone" value={fullName.phone} placeholder="Enter Your Mobile number"  onChange={inputEvent}/><br />
        <input type="submit"/>
        </form>
    </div>
  )
}

export default Login