// import PropTypes from 'prop-types';
import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        let newText= text.toUpperCase();
        setText(newText);
    }

    const handleLoClick=()=>{
      let newText= text.toLowerCase();
      setText(newText);
    }

    const handleClearClick=()=>{
      let newText= '';
      setText(newText);
    }
    const handleCopyText = () => {
      navigator.clipboard.writeText(text)
          .then(() => {
              alert('Text copied to clipboard!');
          }) 
    };
    const handleSentenceCase = () => {
      if (text.trim().length === 0) {
          return;
      }
  
      const words = text.split(' ').map(word => {
          if (word.length > 0) {
              return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
          }
          return '';
      });
  
      const newText = words.join(' ');
      setText(newText);
    };
    const handleExtraSpace=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "))
    } 
    const handleOnChange=(event) =>{
        setText(event.target.value);
    }

    const [text, setText] =useState('');
    //agar value change kerna hai text ki 
    //text = "new text" //very wrong way to change the state
    //setText= "new text" //correct way to change the state
  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="7"></textarea>
        </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-2" onClick={handleCopyText}>Copy to ClipBoard</button>
      <button className="btn btn-primary mx-2" onClick={handleSentenceCase}>Convert to Senetnce Case</button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove extra Spaces</button>
    </div>
    <div className="container my-4">
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} and {text.length} characters</p>
      <p>read in {0.008 * text.split(" ").length } minutes</p>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
    </>
  )
}