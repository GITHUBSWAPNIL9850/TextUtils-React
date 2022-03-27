import React, {useState} from 'react'



export default function HeaderSearchForm(props) {
    
    const handleUpperClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppearcase!", "success");
    }

    const handleLowerClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowercase!", "success");
    }

    const handleTitleClick = () => {
        let newText = text.split(" ").map(w => w[0].toUpperCase() + w.substring(1).toLowerCase()).join(" ");
        setText(newText);
        props.showAlert("converted to titlecase!", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleCopy = () => {
        var text = document.getElementById("headerSearchBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("copied to clipboard!", "success");
    }

    const handleExtraSpace = () => {
        var newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

    const [text, setText] = useState('');
    
    return (
        <>
        <div className="container" style={{color: props.mode === 'dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white':'#042743'}} id="headerSearchBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpperClick}>Uppear Case</button>
            <button className="btn btn-primary mx-2" onClick={handleLowerClick}>Lower Case</button>
            <button className="btn btn-primary mx-2" onClick={handleTitleClick}>Title Case</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode === 'dark'?'white':'#042743'}}>
            <p>Your text summary</p>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
        </div>
        </>
    )
}