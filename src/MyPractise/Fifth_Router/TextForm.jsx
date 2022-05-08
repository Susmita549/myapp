import React, { useState } from "react";
import { Navbar } from "./Navbar";
// import './first.css'

export default function TextForm(props) {
  const [text, setText] = useState("Enter Your Text.......");

  const handleChange = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Hiiiii","success")
  };

  const handleChange1 = () => {
    setText("Enter Your Text...");
    props.showAlert("Hiiiii","success")
  };

  const handleChange2 = () => {
    let newText2 = text.toLowerCase();
    setText(newText2);
    props.showAlert("Hiiiii","success")
  };
  // const handleOnChange=(e)=>{
  //   console.log("clicked..")
  //   setText(e.target.value)
  // }

  const color = [
    "red",
    "blue",
    "yellow",
    "orange",
    "green",
    "black",
    "pink",
    "salmon",
    "teal",
  ];
  const changeColor = (number) => {
    document.getElementById("myBox").style.color = color[number];
    props.showAlert("Hiiiii","success")
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Hiiiii","success")
  };

  const handleCopy=() => {
  
    navigator.clipboard.writeText(text)
    props.showAlert("Hiiiii","success")
  };
  const handleExtraSpace=() => {
    let newText=text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert("Hiiiii","success")
  }

  return (
    <>


    
      <div className="container py-3 style={{color:props.mode==='light'?'black':'white'}}">
        <h4 style={{color:props.mode==='light'?'black':'white'}}>{props.title}</h4>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            id="myBox"
            rows="3"
            onChange={(e) => setText(e.target.value)}
            style={{backgroundColor:props.mode==='light'?'grey':'white',color:props.mode==='light'?'white':'black'}}
          ></textarea>
        </div>
        <button className="btn btn-info" onClick={handleChange}>
          Convert to uppercase
        </button>
        <button className="btn btn-info mx-3" onClick={handleChange1}>
          Reset
        </button>
        <button className="btn btn-info mx-1" onClick={handleChange2}>
          Convert to lowercase
        </button>
        <button
          className="btn btn-primary mx-1"
          type="button"
          onClick={() => changeColor(Math.floor(Math.random() * 5))}
        >
          Change Color
        </button>
        <button
          type="submit"
          onClick={speak}
          className="btn btn-warning mx-2 my-2"
        >
          Speak
        </button>
        <button
          className="btn btn-primary mx-1"
          type="button"
          onClick={handleCopy}
        >
           Copy
        </button>
        <button
          className="btn btn-primary mx-1"
          type="button"
          onClick={handleExtraSpace}
        >
          Remove ExtraSpace
        </button>
      </div>
      <div className="container my-3 "style={{color:props.mode==='dark'?'white':'black'}} >
        <h1>Enter Text Summary</h1>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length}words and {text.length}characters.
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read.</p>
        <h3>preview</h3>
        <p>{text.length>0?text:"Write Something in the Textbox"}</p>
      </div>
    </>
  );
}
