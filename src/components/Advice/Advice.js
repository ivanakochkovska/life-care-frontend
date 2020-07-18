import React from "react";
import wash_hands from "../../images/wash_hands.jpg";
import face_mask from "../../images/face_mask.jpg";
import rastojanie from "../../images/rastojanie.jpg";
import home from "../../images/home.jpg";
import hrana from "../../images/hrana.jpg";
import sick from "../../images/sick.jpg";

class Soveti extends React.Component{

    render() {
        return (<div id="doctors">

                <div className="container">

                    <div className="heading">
                        <span className="icon-logo"><img src={Image} alt="#"></img></span>

                    </div>

                    <div className="row dev-list text-center">
                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 wow fadeIn" data-wow-duration="1s"
                             data-wow-delay="0.2s"
                        >
                            <div className="widget clearfix">
                                <img src={wash_hands} alt="" className="img-responsive img-rounded"></img>


                                <p>Честото и правилното миење на рацето во времетраење од најмалку 20 секунди,
                                    овозможува отрстанување на вирусот од вашите раце.</p>


                            </div>

                        </div>


                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 wow fadeIn" data-wow-duration="1s"
                             data-wow-delay="0.2s"
                        >
                            <div className="widget clearfix">
                                <img src={face_mask} alt="" className="img-responsive img-rounded"></img>


                                <p>Носење на заштитна опрема, кога не може да се одржува растојанието од 2
                                    метри..</p>



                            </div>

                        </div>


                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 wow fadeIn" data-wow-duration="1s"
                             data-wow-delay="0.4s"
                        >
                            <div className="widget clearfix">
                                <img src={rastojanie} alt="" className="img-responsive img-rounded"></img>


                                <p>Избегнување на гужви и одржување задолжително растојание од 2 метри.</p>


                            </div>

                        </div>


                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 wow fadeIn">
                            <div className="widget clearfix">
                                <img src={home} alt="" className="img-responsive img-rounded"></img>


                                <p>Останете дома колку што е можно повеќе. Излегувајте само ако имате итни обврски и
                                    пробајте да
                                    ги завршите брзо и да се заштитите од вирусот, почитувајќи ги протоколите
                                    за лична заштита.</p>


                            </div>

                        </div>



                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 wow fadeIn">
                            <div className="widget clearfix">
                                <img src={hrana} alt="" className="img-responsive img-rounded"></img>


                                <p>Конзумирајте здрава храна, витамини за да го подобрите вашиот имун систем..</p>


                            </div>

                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 wow fadeIn">
                            <div className="widget clearfix">
                                <img src={sick} alt="" className="img-responsive img-rounded"></img>


                                <p>Доколку Ви се појават некакви симптоми, останете дома. Побарајте телефонски помош
                                    од вашиот матичен лекар и тој ќе се погрижи за вашата состојба. Соодветно ќе ве
                                    пренесе во клиника
                                    доколку имате потреба и ќе Ви препише соодветна терапија</p>


                            </div>

                        </div>


                    </div>

                </div>

            </div>


        );
    }
}

export default Soveti;
