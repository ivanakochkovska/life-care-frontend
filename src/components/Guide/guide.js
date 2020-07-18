import React from "react";
//import '../animate.css';
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




class Upatstvo extends React.Component{
    render() {
        return (
            <div>
                <div id="about" className="section wow fadeIn">
                    <div className="container">


                        <div className="row">
                            <div className="col-md-6">
                                <div className="message-box">
                                    <h4>Упатство</h4>
                                    <h2>Интеракција</h2>
                                    <p className="lead"> Целта на апликацијата е да овозможи интерактивно согледување на
                                        последиците од корона вирусот, COVID-19. Каква е стапката на ширење, како се
                                        намалува ширењето со
                                        воведувањето карантин, изолацијата на одредени лица кои се заболени итн.
                                        Се внесуваат параметри од типот на број на население во област, може да се
                                        изгенерира
                                        случајна мрежа па се прикажуваат графици и параметри за соодветното ширење во
                                        рамките на таа мрежа
                                        од контакти.</p>
                                    <a href="#services" data-scroll
                                       className="btn btn-light btn-radius btn-brd grd1 effect-1">Дознај повеќе</a>
                                </div>

                            </div>



                        </div>
                    </div></div>
            </div>
        );
    }
}
export default Upatstvo;
