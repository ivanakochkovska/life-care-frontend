import React from "react";
import '../../bootstrap.min.css'
import '../../colors.css'
import '../../custom.css'
import '../../flaticon.css'
import '../../font-awesome.min.css'
import '../../owl.carousel.css'
import '../../prettyPhoto.css'
import '../../responsive.css'
import '../../versions.css'
import '../../animate.css'


class Header extends React.Component{

    render(){
        return (<div><header>
                <div class="header-bottom wow fadeIn">
                    <div class="container">
                        <nav class="main-menu">
                            <div class="navbar-header">
                                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i class="fa fa-bars" aria-hidden="true"></i></button>
                            </div>

                            <div id="navbar" class="navbar-collapse collapse">
                                <ul class="nav navbar-nav">
                                    <li><a class="active" href="index.html">Почетна</a></li>
                                    <li><a data-scroll href="#about">Упатство</a></li>
                                    <li><a data-scroll href="#service">Симулации</a></li>
                                    <li><a data-scroll href="#doctors">Совети</a></li>

                                    <li><a data-scroll href="#getintouch">Контакт</a></li>
                                </ul>
                            </div>
                        </nav>

                    </div>
                </div>
            </header>





            </div>
        );
    }
}
export default Header;
