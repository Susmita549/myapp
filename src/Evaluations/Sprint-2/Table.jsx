import React,{useEffect,useState} from 'react';
import ShowData from './ShowData';
import './table.css'

const Table = () => {

  const[data,setData]=useState([])

    useEffect(()=>{
        const getData = async()=>{
          let res = await fetch("http://localhost:5000/houses")
          let data = await res.json()
          console.log(data)
          setData(data)
        }
        getData()
    },[])
  return (
    <>
      <table className="container my-5 w-50 text-center">
        <thead>
          <tr>
            <th  className="col-md-4" >Name</th>
            <th  className="col-md-4" >Rent</th>
            <th  className="col-md-4" >ID</th>
          </tr>
        </thead>
        <tbody>
        {data.map((item) => {
                return <ShowData key={item.id} {...item} />;
              })}
        </tbody>
      </table>
    </>
  );
}

export default Table;
