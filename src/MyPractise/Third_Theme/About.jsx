import React, { useState } from "react";
import './first.css'

export const About = () => {
const[style,setStyle]=useState({
        color:'white',
        backgroundColor:'black'
    })
const [btnText,setBtnText]=useState("Click For Light Mode")
const newStyle={
    backgroundColor:'pink',
    color:'black'
}

const handleChange=() => {
    if(style.backgroundColor==='black')
        {
            setStyle(newStyle)
        setBtnText("Click For Dark Mode")
        }
    
    else
        {
            setStyle({
                color:'white',
                backgroundColor:'black'
            })
            setBtnText("Click For Light Mode")
        
        }
   
}

   
  return (
    <>
    
     <div className="container " style={style}>
          <h1>About US</h1>
                    <div className="accordion" id="accordionExample"  style={style}>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                        <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                            style={style}
                        >
                            Accordion Item #1
                        </button>
                        </h2>
                        <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                        
                        
                        >
                        <div className="accordion-body"  style={style}>
                            <strong>This is the first item's accordion body.</strong> It is
                            shown by default, until the collapse plugin adds the appropriate
                            classNamees that we use to style each element. These classNamees control
                            the overall appearance, as well as the showing and hiding via
                            CSS transitions. You can modify any of this with custom CSS or
                            overriding our default variables. It's also worth noting that
                            just about any HTML can go within the{" "}
                            <code>.accordion-body</code>, though the transition does limit
                            overflow.
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                            style={style}
                        >
                            Accordion Item #2
                        </button>
                        </h2>
                        <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                        >
                        <div className="accordion-body"  style={style}>
                            <strong>This is the second item's accordion body.</strong> It is
                            hidden by default, until the collapse plugin adds the
                            appropriate classNamees that we use to style each element. These
                            classNamees control the overall appearance, as well as the showing
                            and hiding via CSS transitions. You can modify any of this with
                            custom CSS or overriding our default variables. It's also worth
                            noting that just about any HTML can go within the{" "}
                            <code>.accordion-body</code>, though the transition does limit
                            overflow.
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                            style={style}
                        >
                            Accordion Item #3
                        </button>
                        </h2>
                        <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                        >
                        <div className="accordion-body"  style={style}>
                            <strong>This is the third item's accordion body.</strong> It is
                            hidden by default, until the collapse plugin adds the
                            appropriate className that we use to style each element. These
                            className control the overall appearance, as well as the showing
                            and hiding via CSS transitions. You can modify any of this with
                            custom CSS or overriding our default variables. It's also worth
                            noting that just about any HTML can go within the{" "}
                            <code>.accordion-body</code>, though the transition does limit
                            overflow.
                        </div>
                        </div>
                    </div>
                    </div>
                    <button type="button" className="btn btn-warning my-3" onClick={handleChange}>{btnText}</button>
      </div>
  
    </>
  );
};
