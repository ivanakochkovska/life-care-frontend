import Simulate4 from "../../components/simulation4/simulate4";
import Simulate3 from "../../components/simulation3/simulate3";
import Simulate2 from "../../components/simulation2/simulate2";
import Simulate1 from "../../components/simulation1/simulation1";

import React from "react";
import Contact from "../../components/contact/contact";
class Simulations extends React.Component{
    render(){
        return(
            <div >
                <Simulate4></Simulate4>
                <Simulate3></Simulate3>
                <Simulate2></Simulate2>
                <Simulate1></Simulate1>

            </div>
        )
    }
}
export default Simulations;
