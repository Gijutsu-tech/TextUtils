import React, {useState} from 'react'


export default function TextForm(props) {
    const [text, setText] = useState("");

    const handleUpClick = ()=>{
        let upText = text.toUpperCase()
        setText(upText);
        if (text.length>0) {
            props.showAlert("Converted to Uppercase", "Success!")
        }
    }

    const handleLowClick = ()=>{
        let lowText = text.toLowerCase()
        setText(lowText);
        if (text.length>0) {
            props.showAlert("Converted to Lowercase", "Success!")
        }
    }

    const handleClearText = ()=>{
        let clearText = ""
        setText(clearText)
        if (text.length>0) {
            props.showAlert("Cleared Text", "Success!")
        }
    }

    const handleInverseCase = ()=>{
        if (text.length>0) {
            props.showAlert("Inversed Case", "Success!")
        }
        if (text === text.toUpperCase()) {
            setText(text.toLowerCase())
        }
        else if (text === text.toLowerCase()) {
            setText(text.toUpperCase())
        }
    }

    const handleCopyText = ()=>{
        navigator.clipboard.writeText(text)
        if (text.length>0) {
            props.showAlert("Copied to Clipboard", "Success!")
        }
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    var words = text.split(" ").length
    var letters = text.length

    return (
        <div>
            <div className={`container my-3 text-${props.mode==='light'?'dark':'light'}`}>

                <h1 className='text-center'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className={`form-control bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`} value={text} placeholder='Enter Text Here' onChange={handleOnChange} rows="14" id="exampleInputEmail1"/>
                </div>

                <div className="container">
                    <button type="submit" onClick={handleUpClick} className="btn btn-primary r-2">{props.uppercase}</button>
                    <button type="submit" onClick={handleLowClick} className="btn btn-primary mx-2">{props.lowercase}</button>
                    <button type="submit" onClick={handleClearText} className="btn btn-primary mx-2">{props.clearText}</button>
                    <button type="submit" onClick={handleInverseCase} className="btn btn-primary mx-2">{props.InverseCase}</button>
                    <button type="submit" onClick={handleCopyText} className="btn btn-primary mx-2">Copy Text</button>
                </div>
            </div>
            <div className={`container flex-row text-${props.mode==='light'?'dark':'light'}`}>
                <h3>Summary of your text</h3>
                <p>{text.length>0?words:"0"} Words and {letters} Characters</p>
                <h3 className='mt-2'>Preview</h3>
                <p>{text.length>0?text:"Enter some text in the textbox to preview it here."}</p>
                <h3>Reading Time:</h3>
                <p>{0.008 * words} Minutes</p>
            </div>
        </div>
    )
}
