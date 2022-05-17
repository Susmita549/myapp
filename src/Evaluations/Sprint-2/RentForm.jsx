import React from 'react';
import { useState } from 'react';
import Table from './Table';

const RentForm = () => {
    const [form,setForm]=useState({
        
    })
    const [rentData, setRentData] = useState([]);
    const handleChange=(e)=>{
        let inputName=e.target.name
        if(e.target.type==="checkbox"){
            setForm({
                ...form,
                [inputName]:e.target.checked
            })
        }
        else{
            setForm({
                ...form,
                [inputName]:e.target.value
            })
        }
       
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(form)

        try{
            let res  = await fetch("http://localhost:5000/houses",{
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            })
            let data = await res.json()
            setRentData([...rentData,data])
        }
        catch(error){
             console.log(error)
        }
    }

  return (
    <>
 
      <div className='container border border-primary my-5 p-3 w-50'>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label>Name</label>
            <input type="text" name="name" className="form-control" onChange={handleChange} placeholder="Enter Name"/>
            
        </div>
        <div className="form-group">
            <label>Owner Name</label>
            <input type="text" name="ownername" className="form-control" onChange={handleChange} placeholder="Enter Owner Name"/>
            
        </div>
        <div className="form-group">
            <label>Address</label>
            <input type="text" name="address" className="form-control" onChange={handleChange} placeholder="Enter Address"/>
            
        </div>
        <div className="form-group">
            <label>Area Code</label>
            <input type="number" name="areacode" className="form-control" onChange={handleChange} placeholder="Enter Area Code"/>
            
        </div>
        <div className="form-group">
            <label>Rent</label>
            <input type="number"  name="rent" className="form-control" onChange={handleChange} placeholder="Enter Rent"/>
            
        </div>
        
        <div className='d-flex justify-content-around p-3 '>Status:
            <div className="form-group form-check">
                <input type="checkbox" name="married" className="form-check-input" onChange={handleChange}/>
                <label className="form-check-label">Married</label>
            </div>
            <div className="form-group form-check">
                <input type="checkbox" name="bachelor" className="form-check-input" onChange={handleChange}/>
                <label className="form-check-label">Bachelor</label>
            </div>
        </div>
        <input type="Submit" className="btn btn-primary  " />
      </form>
      </div>
  
    </>
  );
}

export default RentForm;
