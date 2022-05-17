import React, { useState } from 'react';
import RentForm from './RentForm';
import Table from './Table';

const Sprint = () => {
  const[togle,setTogle]=useState(true)
  return (
    <>
      <div>
        {!togle && <RentForm/>}
       
        {togle && <Table/>}
       
      </div>
      <div style={{display:"flex",justifyContent:"center"}}>
      <button className="btn btn-primary w-50" onClick={()=>setTogle(!togle)}>toggle</button>
      </div>
    </>
  );
}

export default Sprint;

