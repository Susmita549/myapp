import React from "react";
import data from "./data";
const Search = () => {
  return (
    <div>
      <section className="py-4 container border border-success">
        <div className="row justify-content-center">
          {data.cardData.map((item, index) => {
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
