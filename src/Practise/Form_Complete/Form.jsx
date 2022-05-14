import React from 'react';
import { useState } from 'react';
import FetchData from './FetchData';
import './form.css'

const Form = () => {
   const[form,setForm]=useState({})
   const [empData, setempData] = useState([]);
    const handleChange=(e)=>{
       console.log( e.target.value);
       const inputName=e.target.name
       setForm({
           ...form,
           [inputName]:e.target.value
       })
    }
    const handleClick=async(e)=>{
        e.preventDefault()
       console.log(form)
       alert("Form Submitted")
       try {
        let res = await fetch("http://localhost:8080/employee", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
        let data = await res.json();
        setempData([...empData, data]);
      } catch (error) {
        console.log(error);
      }
    };
       
    
  return (
    <>
      <div className="container  my-5 py-3">
        <h1 className="text-center text-success">Form Details</h1>
          <form onSubmit={handleClick} id="inputForm">
              <label >Name:
              <input type="text" onChange={handleChange} name="name"placeholder="Enter Your Name" />
              </label>
              <br />
              <label >Password:
              <input type="password" onChange={handleChange} name="password"placeholder="Enter Your Password" />
              </label>
              <br />
              <label >Email:
              <input type="text" onChange={handleChange} name="email"placeholder="Enter Your Email" />
              </label>
              <br />
              <input type="submit" className="btn btn-primary w-50 "/>
          </form>
      </div>
      <FetchData empData={empData} setempData={setempData}/>
    </>
  );
}

export default Form;
