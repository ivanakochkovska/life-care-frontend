import React from "react";
class  Contact extends React.Component{
    render(){
        return(

                <div id="getintouch">
                    <div className="header-top wow fadeIn">
                        <div className="container">
                            <a className="navbar-brand" ><img src="images/logo.png" alt=""/></a>
                            <div className="right-header">
                                <div className="header-info">
                                    <div className="info-inner">
                                        <span className="icontop"><img src="images/phone-icon.png" alt="#"/></span>
                                        <span className="iconcont"><a href="tel:047 208 100">047 208 100 (централа)</a></span>
                                    </div>
                                    <div className="info-inner">
                                        <span className="icontop"><i className="fa fa-envelope" aria-hidden="true"></i></span>
                                        <span className="iconcont"><a data-scroll
                                                                      href="mailto:cjzbitola@cjzbt.org.mk">cjzbitola@cjzbt.org.mk</a></span>
                                    </div>
                                    <div className="info-inner">
                                        <span className="icontop"><i className="fa fa-clock-o"
                                                                     aria-hidden="true"></i></span>
                                        <span className="iconcont"><a data-scroll
                                                                      href="#">Дневно 07:00 - 15:00</a></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>);


    }
}
export default Contact;
