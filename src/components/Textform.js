import React, {useState}from 'react'
import PropTypes from 'prop-types'

export default function Textform(props) {
  const [text, setText] = useState("");

  const handleUPClick = ()=>{
   let newtext = text.toUpperCase();
      setText(newtext);
      props.showAlert("success","Converted To Upper Case!");
  }

  const handleLoClick = ()=>{
    let newtext = text.toLowerCase(); 
       setText(newtext);
       props.showAlert("success","Converted To Lower Case!");
   }

  const handlespeech = ()=>{
    let message = new SpeechSynthesisUtterance();
    message.text = text;
    window.speechSynthesis.speak(message);
    props.showAlert("success","Speaking!");
  
  }

  const Copytext = ()=>{
    //var text = document.getElementById("myBox");
    //text.select();
    navigator.clipboard.writeText(text);
    //document.getSelection().removeAllRanges();
    props.showAlert("success","Copied to Clipboard!");
  
  }

  const Remspaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("success","Extra Spaces Removed!");
  
  }
  
  const removetext = ()=>{
    setText(" ");
    props.showAlert("success","Frame Cleared!");

  }

  const handleOnChange = (event)=>{
    setText(event.target.value)
}
  
  return (
    <>
<div className="container">
<h1 className={`text-${ props.mode === 'light' ? 'dark':'light'} my-3`}>{props.heading}</h1>
<div className="mb-3">
<textarea className="form-control" style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color : props.mode === 'dark' ? 'white' : 'black'}} id="myBox" rows="10" value={text} onChange={handleOnChange} ></textarea>
</div>
<button disabled={text.length===0}className="btn btn-danger mx-1 my-1" onClick={handleUPClick}>Convert To Upercase</button>
<button disabled={text.length===0}className="btn btn-success mx-1 my-1" onClick={handleLoClick}>Convert To Lowercase</button>
<button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handlespeech}>Speak</button>
<button disabled={text.length===0}className="btn btn-danger mx-1 my-1" onClick={Copytext}>Copy to Clipboard</button>
<button disabled={text.length===0}className="btn btn-success mx-1 my-1" onClick={Remspaces}>Remove Extra Spaces</button>
<button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={removetext}>Clear Text</button>
</div>

<div className="container my-2">
<h2 className={`text-${ props.mode === 'light' ? 'dark':'light'}`}>Your Text Summary</h2>
<p style={{color: props.mode === 'dark' ? 'white' : 'black'}}>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words & {text.length} Characters</p>
<p style={{color: props.mode === 'dark' ? 'white' : 'black'}}>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Avg Minutes To Read</p>
<h2 className={`text-${ props.mode === 'light' ? 'dark':'light'}`}>Preview</h2>
<p style={{color: props.mode === 'dark' ? 'white' : 'black'}}>{text.length > 0 ? text : "Enter Something! to preview it here"}</p>
</div>
</>

  )
}

Textform.propTypes = {heading: PropTypes.string}
//{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters