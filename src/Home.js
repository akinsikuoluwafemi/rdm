import React, {useContext} from 'react';
import { ModeContext } from './ModeContext/ModeContext';
import SearchBar from './SearchBar';
import youtube from './apis/youtube';

const Home = () => {
    let { darkmode, setDarkmode } = useContext(ModeContext);

    const onTermSubmit = (term) => {
         youtube.get('/search', {
            params: {
                q: term
            }
        })
    }


    return (
        // <div className={darkmode ? 'dark-mode' : 'light-mode'}>
        //     <div style={{ marginTop: "5rem" }} className={darkmode ? 'dark-mode' : 'light-mode'}>Home page</div>
        //     <h1 className={darkmode ? 'dark-mode' : 'light-mode'}>Home Page</h1>
        // </div>
        <div className={darkmode ? `dark-mode full` : `light-mode full`}>
            <div style={{ paddingTop: "5rem" }} className="container bg-light ">
                <div className="row">
                    <SearchBar  onFormSubmit={onTermSubmit} />
                </div>
            </div>
        </div>
       
    )
}

export default Home;