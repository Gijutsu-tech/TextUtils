import React from 'react'
import PropTypes from 'prop-types'
// import {Link} from 'react-router-dom'

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
            </ul>
            <div className="form-check form-switch">
              <input className="form-check-input " onClick={props.toggleMode} type="checkbox" role="button" id="flexSwitchCheckDefault" />
              <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">{props.switchText}</label>
            </div>

          </div>
        </div>
      </nav>
    </div>
  )
}

//to ensure that you dont send a wrong proptype ex:- number instead of string
Navbar.propTypes = {
  title: PropTypes.string.isRequired, //value of prop would be required or it will trhow error
  aboutText: PropTypes.string.isRequired
}

//if no props are specified then these props are written
// Navbar.defaultProps = {
//   title : "Enter Title Here",
//   aboutText: "Enter About"
// }
