import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import Header from './Header';
import { ModeContext } from './ModeContext/ModeContext';

const Navigation = () => {
    
    // const [darkmode, setDarkmode] = useState(getInitialMode());
    const [darkmode, setDarkmode] = useState(getInitialMode());


    useEffect(() => {
        localStorage.setItem('dark', JSON.stringify(darkmode))
    }, [darkmode]);

    function getInitialMode(){

        const savedMode = JSON.parse(localStorage.getItem('dark'))

        return savedMode || false;
    }  


    return (
        <Router>
            <ModeContext.Provider value={{ darkmode, setDarkmode}}>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/profile" component={Profile} />
                </Switch>
            </ModeContext.Provider>
           


        </Router>
    )
}

export default Navigation;