// import PropTypes from 'prop-types';
import { set } from 'mongoose';
import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        let newText= text.toUpperCase();
        setText(newText);
    }
    const handleOnChange=(event) =>{
        setText(event.target.value);
    }

    const [text, setText] =useState('Enter the text');
    //agar value change kerna hai text ki 
    //text = "new text" //very wrong way to change the state
    //setText= "new text" //correct way to change the state
  return (
<div>
    <h1>{props.heading}</h1>
    <div className="mb-3">
  {/* <label for="mybox" class="form-label">Enter your Text Below!</label> */}
    <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="7"></textarea>
    </div>
    <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
</div>
  )
}