import Homes from '../component/Home';
import React from "react";
import { Routes, Route } from "react-router-dom";
import Gellary from "../component/Gellaery";
import Services from "../component/Services";
import Contact from "../component/ContactUS";
import AboutUS from "../component/aboutUs";

import LoginForm from '../component/login';
import Singin from '../component/signup';

function Navigation () {
    // constructor() {
    //     super()
    //     this.state = {

    //     }
    // }

        return (
            <>
                <Routes>
                    {/* <Route path="/" element={<Login />}>
                        hello1
                    </Route> */}
                    <Route path="/" element={<Homes />}>
                        
                    </Route>
                    <Route path="/Gellary" element={<Gellary />}>   
                        </Route>
                    <Route path="/Service" element={<Services />}>   
                        </Route>
                    <Route path="/Contact" element={<Contact />}>   
                        </Route>
                    <Route path="/About" element={<AboutUS/>}>   
                        </Route>
                    <Route path="/Sigin" element={<Singin/>}>   
                        </Route>
                    <Route path="/Login" element={<LoginForm/>}>   
                        </Route>

                </Routes>
            </>

        )




}

export default Navigation