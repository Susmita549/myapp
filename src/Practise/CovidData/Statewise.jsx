import React, { useEffect, useState } from 'react'

const Statewise = () => {
    const[data,setData]=useState([])

    const getCovidData = async () => {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon/")
        const data = await res.json()
        console.log(data.results)
        setData(data.results)
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
            
            <h1>{elem.name}</h1>
            <img src={elem.url} alt="" />
            </>
            
           )
        })}

    </div>
    </>
  )
}

export default Statewise