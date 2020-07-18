import React from "react";

class Midheader extends React.Component{
    render(){
        return(
            <div id="time-table" className="time-table-section">
                <div className="container">
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <div className="row">
                            <div className="service-time one" >
                                <span className="info-icon"><i className="fa fa-ambulance"
                                                               aria-hidden="true"></i></span>
                                <h3>Итни случаи</h3>
                                <p>Преоптеретениот капацитет на болниците може да доведе до
                                    ситуација во која што на пациентите на кои им треба итна болничка услуга, да не
                                    можат да се згрижат.

                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <div className="row">
                            <div className="service-time middle" >
                                <span className="info-icon"><i className="fa fa-clock-o" aria-hidden="true"></i></span>
                                <h3>Работно време на центарот за јавно здравје во Битола</h3>
                                <div className="time-table-section">
                                    <ul>
                                        <li><span className="left">Понеделник - Петок </span><span className="right">07:00 - 15:00</span>
                                        </li>
                                        <li><span className="left">Сабота</span><span className="right">затворено</span>
                                        </li>
                                        <li><span className="left">Недела</span><span className="right">затворено</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <div className="row">
                            <div className="service-time three" >
                                <span className="info-icon"><i className="fa fa-hospital-o"
                                                               aria-hidden="true"></i></span>
                                <h3>Работно време на болницата во Битола</h3>
                                <p> Болницата е достапна 24/7 за згрижување на пациенти.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Midheader;
