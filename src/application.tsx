import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import HomePage from "./pages/home";
import ContactPage from "./pages/contact";

import Navbar from "./components/navbar";
import Footer from "./components/footer";

const Application: React.FC<{}> = () => {
    return (
        <>
            <Router>
                <Navbar />
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                </ul>
                <Switch>
                    <Route exact path='/'>
                        <HomePage />
                    </Route>
                    <Route path='/contact'>
                        <ContactPage />
                    </Route>
                </Switch>
            </Router>
            <Footer />
        </>
    );
};

export default Application;
