import React, { useContext } from 'react';
import { ModeContext } from './ModeContext/ModeContext';


const Profile = () => {
    let { darkmode, setDarkmode } = useContext(ModeContext);

    return (
        <div className={darkmode ? 'dark-mode' : 'light-mode'}>
            <div style={{ marginTop: "5rem" }} className={darkmode ? 'text-white' : 'text-dark'} >Profile page</div>
            <h1 className={darkmode ? 'dark-mode' : 'light-mode'}>Profile Page</h1>
        </div>
    )
}

export default Profile;