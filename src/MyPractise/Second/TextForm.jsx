import React, { useState } from "react";
// import './first.css'

export default function TextForm(props) {
  const [text, setText] = useState("Enter Your Text...");
  const handleChange=()=>{

    let newText=text.toUpperCase()
    setText(newText)
  }

  const handleChange1=()=>{
    setText("Enter Your Text...")
  }

  const handleChange2=()=>{

    let newText2=text.toLowerCase()
    setText(newText2)
  }
  // const handleOnChange=(e)=>{
  //   console.log("clicked..")
  //   setText(e.target.value)
  // }
  return (
    <div>
      <h4>{props.title}</h4>
      <div className="mb-3">
        <textarea className="form-control" value = {text} id="myBox" rows="10" onChange={(e) => setText(e.target.value)}></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleChange}>Convert to uppercase</button>
      <button className="btn btn-primary mx-3" onClick={handleChange1}>Reset</button>
      <button className="btn btn-primary mx-1" onClick={handleChange2}>Convert to lowercase</button>
    </div>
  );
}
