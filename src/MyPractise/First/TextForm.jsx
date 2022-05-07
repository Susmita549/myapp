import React from 'react'
// import './first.css'

export default function TextForm(props) {
  return (
    <div>

<h4>{props.title}</h4>
<div className="mb-3">
  
  
  <textarea className="form-control" id="myBox" rows="10"></textarea>
</div>

    </div>
  )
}
