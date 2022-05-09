import React, { useEffect, useState } from 'react'

const Statewise = () => {
    const[data,setData]=useState([])

    const getCovidData = async () => {
        const res = await fetch("https://fakestoreapi.com/users")
        const data = await res.json()
        console.log(data)
        setData(data)
        //console.log(setData)
    }
    useEffect(()=>{
  
           getCovidData()
    },[])
  return (
    <>
    <div>
        <h1>INDIA COVID_19 DATA</h1>
        {data.map((elem)=>{
           return(
            <>
            
            <h1>{elem.address.city}</h1>
            <p>{elem.address.street}</p>
            <p>email:{elem.email}</p>
            <p>id:{elem.id}</p>
            <p>{elem.name.firstname}</p>
            <p>{elem.name.lastname}</p>
            <p>{elem.password}</p>
            <p>{elem.phone}</p>
            <p>{elem.username}</p>
           
            </>
            
           )
        })}

    </div>
    </>
  )
}

export default Statewise