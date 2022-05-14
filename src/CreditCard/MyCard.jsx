import React from "react";
import { useState } from "react";
import "./card.css";

const MyCard = () => {
 
  const [data, setData] = useState({
    name: "enter name",
    cardnumber: ".... .... .... ....",
    month: "_ _",
    year: "_ _",
    cvv: "_ _ _",
  });


  const handleChange = (e) => {
    console.log(e.target.value);
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form Submitted");
  };

  return (
    <>
      <div className="container border border-danger  my-5 parent">
        <p className="text-center">{data.name}</p>
        <p className="text-center">{data.cardnumber}</p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "50%",
            margin: "auto",
          }}
        >
          <p>Month:{data.month}</p>
          <p>Year:{data.year}</p>
          <p>CVV:{data.cvv}</p>
        </div>
      </div>
      <div style={{ width: "30%", margin: "auto" }}>
        <form className="container w-50% my-5" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Card Number</label>
            <input
              type="number"
              className="form-control"
              required
              name="cardnumber"
              maxLength="16"
              onChange={handleChange}
              placeholder="Enter your card number"
            />
          </div>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              className="form-control"
              required
              name="name"
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group">
            <label>Month</label>
            <input
              type="number"
              className="form-control"
              required
              name="month"
              max={12}
              maxLength={2}
              onChange={handleChange}
              placeholder="Enter Your Expiry"
            />
            <label>Year</label>
            <input
              type="number"
              className="form-control"
              required
              name="year"
              maxLength={4}
              minLength={4}
              onChange={handleChange}
              placeholder="Enter Your Expiry"
            />
          </div>
          <div className="form-group">
            <label>CVV</label>
            <input
              type="password"
              className="form-control"
              required
              name="cvv"
              maxLength="3"
              minLength="3"
              onChange={handleChange}
              placeholder="Enter your cvv"
            />
          </div>

          <button type="submit" className="btn btn-primary w-100 my-3">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default MyCard;
