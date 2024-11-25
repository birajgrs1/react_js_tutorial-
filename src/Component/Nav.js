/*
function Nav(){
    return(
        <div>
        <h2>This is NavBar.</h2>
        </div>
    );
}

export default Nav;


// using Arrow function


const Nav = () =>{

    //Inline CSS
    const myStyle = {
        backgroundColor: 'pink',
        color: 'white'
    }
    const myAnotherStyle= {
        backgroundColor: 'purple',
        color: 'white'
    }
        

    
        return(
        <div>
        { <h2 style={myStyle}>This is NavBar.</h2>
        <p style={myAnotherStyle}>Hello, All from Navigation bar.</p> }
        <h2>This is Navbar.</h2>
        </div>
    );
}
export default Nav;
*/


import React from "react";

function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/features">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/pricing">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              {/* If the link is disabled, use aria-disabled */}
              <a
                className="nav-link"
                href="/"
                aria-disabled="true"
                tabIndex="-1"
              >
                Disabled
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;
