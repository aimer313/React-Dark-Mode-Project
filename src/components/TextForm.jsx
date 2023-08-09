import React, { useState } from "react";

// const [var , function ] = usestate (Default Value)
const TextForm = (props) => {
  const handleUpClick = () => {
    // console.log("UpperCase Was Clicked" + text)
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase" , "success")
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase" , "success")
  }

  const handleCopyText = () => {
    let newText = "Saquib Make A Copy Function"
    setText(newText)
    // setText(newText)

  }

  // for inputs 
  const handleOnChange = (event) => {
    // console.log("On Change")
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  // text = "new Text" (Wronng Way)
  // setText("new Text") (Correct Way)
  return (
    <>
      <div className="container" style = {{color : props.mode === 'dark' ? 'white' : '#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label">
            Example textarea
          </label>
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style = {{backgroundColor : props.mode === 'dark' ? 'grey' : 'white' ,
          color : props.mode === 'dark' ? 'white' : '#042743'}}
          ></textarea>
        </div>

        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert To LowerCase
        </button>
        <button className="btn btn-primary mx-2" id = "copy1" onClick={handleCopyText}>
          Copy Text
        </button>
      </div>

      <div className="container my-3" style = {{color : props.mode === 'dark' ? 'white' : '#042743'}}>
        <h1>Your text Summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it"}</p>
      </div>
    </>
  );
};

export default TextForm;
