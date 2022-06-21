import React, { useState } from "react";
// import './first.css'

export default function TextForm(props) {
  const [text, setText] = useState("Enter Your Text.......");

  const handleChange = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleChange1 = () => {
    setText("Enter Your Text...");
  };

  const handleChange2 = () => {
    let newText2 = text.toLowerCase();
    setText(newText2);
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
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };

  return (
    <>
      <div className="container  py-3">
        <h4>{props.title}</h4>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            id="myBox"
            rows="3"
            onChange={(e) => setText(e.target.value)}
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
      </div>
      <div className="container my-3  ">
        <h1>Enter Text Summary</h1>
        <p>
          {text.split(" ").length}-words and {text.length}-characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes to read.</p>
        <h3>preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
