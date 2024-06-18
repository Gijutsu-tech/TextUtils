import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState("");
    
    const handleUpClick = () => {
        let upText = text.toUpperCase()
        setText(upText);
        if (text.length > 0) {
            props.showAlert("Converted to Uppercase", "Success!")
        }
    }

    const handleLowClick = () => {
        let lowText = text.toLowerCase()
        setText(lowText);
        if (text.length > 0) {
            props.showAlert("Converted to Lowercase", "Success!")
        }
    }

    const handleClearText = () => {
        let clearText = ""
        setText(clearText)
        if (text.length > 0) {
            props.showAlert("Cleared Text", "Success!")
        }
    }

    const handleInverseCase = () => {
        if (text.length > 0) {
            props.showAlert("Inversed Case", "Success!")
        }
        if (text === text.toUpperCase()) {
            setText(text.toLowerCase())
        }
        else if (text === text.toLowerCase()) {
            setText(text.toUpperCase())
        }
    }

    const handleCopyText = () => {
        navigator.clipboard.writeText(text)
        if (text.length > 0) {
            props.showAlert("Copied to Clipboard", "Success!")
        }
    }

    const handleSaveText = () => {
        var saveName = prompt("Enter a Name for save")
        if (saveName != null) {
            var mySaveText = text
            localStorage.setItem(saveName, mySaveText)
            props.showAlert(`'${saveName}' saved to storage`, "Success!")
        }
    }

    const handleGetSavedText = () => {
        var getItem = prompt("Enter the name of the save to get")
        if (getItem != null) {
            var savedText = localStorage.getItem(getItem)
            if (savedText !== null) {
                setText(localStorage.getItem(getItem))
                props.showAlert(`'${getItem}' imported from storage`, "Success!")
            }
    
            if (savedText === null) {
                props.showAlert(`Save file named '${getItem}' does not exist`, "ERROR!")
            }
    
            else {
                function checkZero() {
                    if (savedText.length === 0) {
                        props.showAlert(`No text available in '${getItem}'`, "ERROR!")
                    }
                }
                checkZero()
            }
        }

    }

    const handleClearAllSaves = () => {
        localStorage.clear()
        props.showAlert(`Cleared all save files`, "Success!")
    }

    const handleRead = () => {
        let utterance = new SpeechSynthesisUtterance(text)
        speechSynthesis.speak(utterance)
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    var words = text.split(" ").length
    var letters = text.length

    return (
        <div>




            <div className={`modal fade`} id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className={`modal-dialog`}>
                    <div className={`modal-content bg-${props.mode} text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Confirmation</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Cl"></button>
                        </div>
                        <div className="modal-body">
                            Are you sure you want to clear all save data?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={handleClearAllSaves}>Clear</button>
                        </div>
                    </div>
                </div>
            </div>




            <div className={`container my-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>

                <h1 className='text-center'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className={`form-control bg-${props.mode} text-${props.mode === 'light' ? 'dark' : 'light'}`} value={text} placeholder='Enter Text Here' onChange={handleOnChange} rows="7" id="exampleInputEmail1" />
                </div>

                <div className="btnContainer">
                    <button type="submit" onClick={handleUpClick} className="btn btn-primary mx-2 my-2">{props.uppercase}</button>
                    <button type="submit" onClick={handleLowClick} className="btn btn-primary mx-2 my-2">{props.lowercase}</button>
                    <button type="submit" onClick={handleInverseCase} className="btn btn-primary mx-2 my-2">{props.InverseCase}</button>
                    <button type="submit" onClick={handleClearText} className="btn btn-primary mx-2 my-2">{props.clearText}</button>
                    <button type="submit" onClick={handleCopyText} className="btn btn-primary mx-2 my-2">Copy Text</button>
                    <button type="submit" onClick={handleSaveText} className="btn btn-primary mx-2 my-2">Save Text</button>
                    <button type="submit" onClick={handleGetSavedText} className="btn btn-primary mx-2 my-2">Get Saved Text</button>
                    <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-primary mx-2 my-2">Clear all saves</button>


                    <button type="submit" onClick={handleRead} className="btn btn-primary mx-2 my-2">Read Aloud</button>
                </div>
            </div>
            <div className={`container flex-row text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <h3>Summary of your text</h3>
                <p>{text.length > 0 ? words : 0} Words and {letters} Characters</p>
                <h3 className='mt-2'>Preview</h3>
                <p>{text.length > 0 ? text : "Enter some text in the textbox to preview it here."}</p>
                <h3>Reading Time:</h3>
                <p>{text.length > 0 ? 0.008 * words : "0"} Minutes</p>
            </div>
        </div>
    )
}
