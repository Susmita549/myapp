import React, { useState } from "react";
import data from "./data";
const Search = () => {
    const[filter,setFilter]=useState("")

    const textChanged = (e) => {
        setFilter(e.target.value)
    }
    
    const dataSearch = data.cardData.filter((item)=>{
        return Object.keys(item).some(key=>item[key].toString().toLowerCase()
        .includes(filter.toString().toLowerCase()))
    })
  return (
    <div>
      <section className="py-4 container border border-success">
        <div className="row justify-content-center">

           <div className="col-12 mb-5">
               <div className="mb-3 col-4 mx-auto text-center">
                   <h1>Search</h1>
                   <input type="text" 
                   value={filter}
                   onChange={textChanged.bind(this)}
                   className="form-control"/>
               </div>
           </div>


          {dataSearch.map((item, index) => {
            return (
              <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4" key={index}>
                <div className=" card p-0 overflow-hidden h-100 shadow">
                  <img className="card-img-top" src={item.img} alt="" />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Search;
