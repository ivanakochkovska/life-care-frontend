import React from "react";
import Upatstvo from "../../components/Guide/guide";
import Soveti from "../../components/Advice/Advice";
import Header from "../../components/header/header";
import Midheader from "../../components/midheader/midheader";
class GuideHeader extends React.Component{
    render(){
        return(
            <div>
                <Header></Header>

                <Upatstvo></Upatstvo>
                <Soveti></Soveti>
            </div>
        )
    }
}
export default GuideHeader;
