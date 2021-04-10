import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./pages/home";
import ContactPage from "./pages/contact";

import Navbar from "./components/navbar";
import Footer from "./components/footer";

const Application: React.FC<{}> = () => {
    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/contact' component={ContactPage} />
                </Switch>
            </Router>
            <Footer />
        </>
    );
};

export default Application;