import React, { useContext, useEffect } from 'react';
import NavLink from 'react-router-dom/NavLink';
import { ModeContext } from './ModeContext/ModeContext';


const Header = () => {
    
    const { darkmode, setDarkmode } = useContext(ModeContext);


    






    console.log(darkmode);
    return (
        <nav className={darkmode ? `navbar navbar-expand-md navbar-dark bg-dark fixed-top` : `navbar navbar-expand-md navbar-light bg-light fixed-top`} >
                <a href="#" className="navbar-brand">Youtube</a>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav">
                        <NavLink className="nav-item nav-link active" to="/">Home</NavLink>
                        <NavLink className="nav-item nav-link active" to="/profile">Profile</NavLink>
                        <a href="#" class="nav-item nav-link">Messages</a>
                        <a href="#" class="nav-item nav-link disabled" tabindex="-1">Reports</a>
                    </div>
                    <div class="navbar-nav ml-auto">
                    {/* <button onClick={() =>  >{darkmode ? "dark-mode" : "light-mode"}</button> */}
                    <span className="toggle">
                        <input
                            checked={darkmode}                            
                            onChange={() => setDarkmode(prevMode => !prevMode)}
                            type="checkbox"
                            className="checkbox"
                            id="checkbox"
                        />
                        <label htmlFor="checkbox"></label>
                    </span>

                    </div>
                </div>
            </nav>

            
        
    )
}

export default Header;