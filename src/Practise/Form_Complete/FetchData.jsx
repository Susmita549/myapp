import React from 'react';
import { useEffect } from 'react';
import ShowData from './ShowData';
import './form.css'

const FetchData = ({ empData,setempData}) => {
    useEffect(() => {
       
      const getData = async() =>{
        try{
            let res = await fetch(`http://localhost:8080/employee`)
            let data = await res.json()
            console.log(data)
            setempData(data)
        }
        catch(error){
            console.log(error)
        }
      }
       getData()
    },[])
  return (
    <>
      {empData.length>0 && (
       <>
       <h1 className="text-center text-bold">Employee Details</h1>
       <table className="container ">
           <thead>
           <tr>
               <th className="col-md-4">Name</th>
               <th className="col-md-4">Password</th>
               <th className="col-md-4">Email</th>
           </tr>
           </thead>
           <tbody>
               {empData.map((emp)=>{
                  return <ShowData key={emp.id} {...emp} />;
               })}
           </tbody>
       </table>
       </>



      )}
    </>
  );
}

export default FetchData;
