import axios from 'axios';
import React from 'react';
import ReactDOM, {render} from 'react-dom';
import './animate.css';
import './bootstrap.min.css'
import './colors.css'
import './custom.css'
import './flaticon.css'
import './font-awesome.min.css'
import './owl.carousel.css'
import './prettyPhoto.css'
import './responsive.css'
import './versions.css'
import App from './App';
import * as serviceWorker from './serviceWorker';

import wash_hands from "./images/wash_hands.jpg"
import  face_mask from "./images/face_mask.jpg"
import rastojanie from "./images/rastojanie.jpg"
import home from "./images/home.jpg"
import hrana from "./images/hrana.jpg"
import sick from "./images/sick.jpg"
// class Header extends React.Component{
//
//     render(){
//         return (<div><header>
//                 <div class="header-bottom wow fadeIn">
//                 <div class="container">
//                     <nav class="main-menu">
//                         <div class="navbar-header">
//                             <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i class="fa fa-bars" aria-hidden="true"></i></button>
//                         </div>
//
//                         <div id="navbar" class="navbar-collapse collapse">
//                             <ul class="nav navbar-nav">
//                                 <li><a class="active" href="index.html">Почетна</a></li>
//                                 <li><a data-scroll href="#about">Упатство</a></li>
//                                 <li><a data-scroll href="#service">Симулации</a></li>
//                                 <li><a data-scroll href="#doctors">Совети</a></li>
//
//                                 <li><a data-scroll href="#getintouch">Контакт</a></li>
//                             </ul>
//                         </div>
//                     </nav>
//
//                 </div>
//             </div>
//             </header>
//
//         </div>
//         );
//     }
// }
//
// class Upatstvo extends React.Component{
//     render() {
//         return (
//             <div>
//                 <div id="about" className="section wow fadeIn">
//                     <div className="container">
//
//
//                         <div className="row">
//                             <div className="col-md-6">
//                                 <div className="message-box">
//                                     <h4>Упатство</h4>
//                                     <h2>Интеракција</h2>
//                                     <p className="lead"> Целта на апликацијата е да овозможи интерактивно согледување на
//                                         последиците од корона вирусот, COVID-19. Каква е стапката на ширење, како се
//                                         намалува ширењето со
//                                         воведувањето карантин, изолацијата на одредени лица кои се заболени итн.
//                                         Се внесуваат параметри од типот на број на население во област, може да се
//                                         изгенерира
//                                         случајна мрежа па се прикажуваат графици и параметри за соодветното ширење во
//                                         рамките на таа мрежа
//                                         од контакти.</p>
//                                     <a href="#services" data-scroll
//                                        className="btn btn-light btn-radius btn-brd grd1 effect-1">Дознај повеќе</a>
//                                 </div>
//
//                             </div>
//
//
//
//                         </div>
//                     </div></div>
//             </div>
//         );
//     }
// }
//
//
//
// class Soveti extends React.Component{
//
//     render() {
//         return (<div>
//
//                 <div className="container">
//
//                     <div className="heading">
//                         <span className="icon-logo"><img src={Image} alt="#"></img></span>
//
//                     </div>
//
//                     <div className="row dev-list text-center">
//                         <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 wow fadeIn" data-wow-duration="1s"
//                              data-wow-delay="0.2s"
//                              >
//                             <div className="widget clearfix">
//                                 <img src={wash_hands} alt="" className="img-responsive img-rounded"></img>
//
//
//                                     <p>Честото и правилното миење на рацето во времетраење од најмалку 20 секунди,
//                                         овозможува отрстанување на вирусот од вашите раце.</p>
//
//
//                             </div>
//
//                         </div>
//
//
//                         <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 wow fadeIn" data-wow-duration="1s"
//                              data-wow-delay="0.2s"
//                             >
//                             <div className="widget clearfix">
//                                 <img src={face_mask} alt="" className="img-responsive img-rounded"></img>
//
//
//                                     <p>Носење на заштитна опрема, кога не може да се одржува растојанието од 2
//                                         метри..</p>
//
//
//
//                             </div>
//
//                         </div>
//
//
//                         <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 wow fadeIn" data-wow-duration="1s"
//                              data-wow-delay="0.4s"
//                              >
//                             <div className="widget clearfix">
//                                 <img src={rastojanie} alt="" className="img-responsive img-rounded"></img>
//
//
//                                     <p>Избегнување на гужви и одржување задолжително растојание од 2 метри.</p>
//
//
//                             </div>
//
//                         </div>
//
//
//                         <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 wow fadeIn">
//                             <div className="widget clearfix">
//                                 <img src={home} alt="" className="img-responsive img-rounded"></img>
//
//
//                                     <p>Останете дома колку што е можно повеќе. Излегувајте само ако имате итни обврски и
//                                         пробајте да
//                                         ги завршите брзо и да се заштитите од вирусот, почитувајќи ги протоколите
//                                         за лична заштита.</p>
//
//
//                             </div>
//
//                         </div>
//
//
//
//                         <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 wow fadeIn">
//                             <div className="widget clearfix">
//                                 <img src={hrana} alt="" className="img-responsive img-rounded"></img>
//
//
//                                     <p>Конзумирајте здрава храна, витамини за да го подобрите вашиот имун систем..</p>
//
//
//                             </div>
//
//                         </div>
//
//                         <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 wow fadeIn">
//                             <div className="widget clearfix">
//                                 <img src={sick} alt="" className="img-responsive img-rounded"></img>
//
//
//                                     <p>Доколку Ви се појават некакви симптоми, останете дома. Побарајте телефонски помош
//                                         од вашиот матичен лекар и тој ќе се погрижи за вашата состојба. Соодветно ќе ве
//                                         пренесе во клиника
//                                         доколку имате потреба и ќе Ви препише соодветна терапија</p>
//
//
//                             </div>
//
//                         </div>
//
//
//                     </div>
//
//                 </div>
//
//             </div>
//
//
//         );
//     }
// }
//
//
// class Simulate1 extends React.Component{
//     constructor(props) {
//
//         super(props);
//         this.state={
//             first: ''
//         }
//     }
//     handleUsernameChange = (event) => {
//         this.setState({
//             first: event.target.value
//
//         })
//         console.log(this.state.first)
//         // eslint-disable-next-line no-template-curly-in-string
//         return `http://127.0.0.1:8000/basic/basic?num=${this.state.first}`
//     }
//     handleSubmit = event => {
//         alert(`http://127.0.0.1:8000/basic/basic?num=${this.state.first}`)
//         axios.get('http://127.0.0.1:8000/basic/basic', {
//             params: {
//                 num: this.state.first
//             }
//         })
//         return `http://127.0.0.1:8000/basic/basic?num=${this.state.first}`
//     }
//
//     render() {
//
//         return(
//             <div><div>
//
//         <h2>Четврта симулација</h2><br/><br/><br/>
//             <p>Внесете параметар за број на население. Врз основа на оваа бројка
//                 се симулираат кривите за ширење на заразата. Во резултатот се прикажани следните криви:</p>
//                 <p>- Жолта боја - Крива која ја претставува евалуацијата на личности кои се изложени на опасност од заразата</p>
//                 <p>- Зелена боја - Крива која ја претставува евалуацијата на личности кои се суспектни</p>
//                 <p>- Црвена боја - Крива која ја претставува евалуацијата на личности кои се заразени</p>
//                 <p>- Сина - Крива која ја претставува евалуацијата на личности кои се оздравени</p>
//                 <form onSubmit={this.handleSubmit}>
//                 <div className="form-group">
//                     <label htmlFor="exampleInputEmail1">Внесете број на население</label>
//                     <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={this.state.first}
//                   onChange={this.handleUsernameChange}  ></input>
//                 </div>
//                 <br>
//                 </br>
//
//                     <div class="form-group">
//                         <button type="button" onClick={(e) => {
//                             e.preventDefault();
//                             window.location.href=`http://127.0.0.1:8000/basic/basic?num=${this.state.first}`
//                         }} className="btn btn-primary" className="btn btn-primary" >Симулирај</button></div>
//                     <br></br><br/><br></br><br></br>
//             </form>
//                 <img src={`${this.handleSubmit}`}></img>
//             </div></div>)}}
//
//
// class Simulate2 extends React.Component{
//     constructor(props) {
//
//         super(props);
//         this.state={
//             first1: '',
//             second1: ''
//         }
//     }
//     handleUsernameChange = (event) => {
//         this.setState({
//             first1: event.target.value,
//
//
//
//         })
//         console.log(this.state.first1)
//         // eslint-disable-next-line no-template-curly-in-string
//         return `${this.state.first1}`
//     }
//
//     handleUsernameChange1 = (event) => {
//         this.setState({
//             second1: event.target.value,
//
//
//
//         })
//         console.log(this.state.second1)
//         // eslint-disable-next-line no-template-curly-in-string
//         return `${this.state.second1}`
//     }
//     handleSubmit = event => {
//         //alert(`http://127.0.0.1:8000/basic/basic?num=${this.state.first}`)
//         axios.get('http://127.0.0.1:8000/basic/basic', {
//             params: {
//                 numm: this.state.first1,
//                 quar: this.state.second1
//             }
//         })
//         return `http://127.0.0.1:8000/basic/s?numm=${this.state.first1}&quar=${this.state.second1}`
//     }
//
//     render(){
//
//         return(<div>
//
//                 <br></br><br></br>
//                 <h2>Трета симулација</h2><br/><br/><br/>
//                 <p>Внесете параметар за број на население.  Внесете параметар за процент
//                     на личности во карантин. Врз основа на овие параметри
//                     се симулираат кривите за ширење на заразата.Во резултатот се прикажани следните криви:</p>
//                 <p>- Жолта боја - Крива која ја претставува евалуацијата на личности кои се изложени на опасност од заразата</p>
//                 <p>- Зелена боја - Крива која ја претставува евалуацијата на личности кои се суспектни</p>
//                 <p>- Црвена боја - Крива која ја претставува евалуацијата на личности кои се заразени</p>
//                 <p>- Сина - Крива која ја претставува евалуацијата на личности кои се оздравени</p>
//                 <form>
//                     <div className="form-group">
//                         <label htmlFor="exampleInputEmail1">Внесете број на население</label>
//                         <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
//                                value={this.state.first1}
//                                onChange={this.handleUsernameChange} ></input>
//                     </div>
//                     <br>
//                     </br>
//                     <div className="form-group">
//                         <label htmlFor="exampleInputEmail1">Внесете процент за личности во карантин</label>
//                         <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
//                                value={this.state.second1}
//                                onChange={this.handleUsernameChange1}></input>
//                     </div>
//                     <br>
//                     </br>
//                     <div className="form-group">
//                         <div >
//                             <button type="button" onClick={(e) => {
//                                 e.preventDefault();
//                                 window.location.href=`http://127.0.0.1:8000/basic/s?numm=${this.state.first1}&quar=${this.state.second1}`
//                             }} className="btn btn-primary" >Симулирај</button></div>
//                         <br></br><br/><br></br><br></br>
//                     </div>
//
//                 </form>
//             </div>
//
//
//
//         )
//
//     }
// }
//
//
//
// class Simulate3 extends React.Component{
//     constructor(props) {
//
//         super(props);
//         this.state={
//             first3: '',
//             second3: ''
//         }
//     }
//     handleUsernameChange = (event) => {
//         this.setState({
//             first3: event.target.value,
//
//
//
//         })
//         console.log(this.state.first3)
//         // eslint-disable-next-line no-template-curly-in-string
//         return `${this.state.first3}`
//     }
//
//     handleUsernameChange1 = (event) => {
//         this.setState({
//             second3: event.target.value,
//
//
//
//         })
//         console.log(this.state.second2)
//         // eslint-disable-next-line no-template-curly-in-string
//         return `${this.state.second3}`
//     }
//     handleSubmit = event => {
//         //alert(`http://127.0.0.1:8000/basic/basic?num=${this.state.first}`)
//         axios.get('http://127.0.0.1:8000/basic/basic', {
//             params: {
//                 people_number: this.state.first3,
//                 sick: this.state.second3
//             }
//         })
//         return `http://127.0.0.1:8000/basic/s?numm=${this.state.first3}&quar=${this.state.second4}`
//     }
//
//     render(){
//         return (
//             <div>
//                 <div>
//                     <br></br><br></br>
//                     <h2>Втора симулација</h2><br/><br/><br/>
//                     <p>Во овој дел се внесува број на личности за кои сакате да изградите сличајна мрежа. Се поставуваат случајни контакти меѓу нив.
//                         Се внесува и број на личности кои ги поставувате за заразени во мрежата. Се гради граф, така што јазлите се личности во мрежата,
//                         а ребрата се контактите. Со сина боја се означени личностите кои се здрави, но подложени на ризик од зараза, а со црвена оние
//                         кои се заразени и претставуваат опасност за пренесување на заразата. Со кликање на копчето "Симулирај"
//                         се прави пропагација на мрежата и се добива некој резултат на просечно ширење на заразат доколку не се превземаат никакви
//                         мерки за заштита.</p>
//                     <form>
//                         <div className="form-group">
//                             <label htmlFor="exampleInputEmail1">Внесете број на население</label>
//                             <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
//                                    value={this.state.first3}
//                                    onChange={this.handleUsernameChange}></input> <br/><br/>
//                             <label htmlFor="exampleInputEmail1">Внесете број на личности кои се заразени</label>
//                             <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
//                                    value={this.state.second3}
//                                    onChange={this.handleUsernameChange1}></input>
//                         </div>
//                         <br>
//                         </br>
//
//                         <br>
//                         </br>
//                         <div className="form-group">
//                             <div >
//                                 <button type="button" className="btn btn-primary" onClick={(e) => {
//                                     e.preventDefault();
//                                     window.location.href=`http://127.0.0.1:8000/net/net?people_number=${this.state.first3}&sick=${this.state.second3}`
//                                 }}>Симулирај</button></div>
//                             <br></br><br/><br></br><br></br>
//                         </div>
//
//                     </form>
//                 </div>
//
//             </div>
//         )
//     }
// }
//
// class Simulate4 extends React.Component {
//     constructor(props) {
//
//         super(props);
//         this.state={
//             first4: '',
//             second4: '',
//             third4: ''
//         }
//     }
//     handleUsernameChange = (event) => {
//         this.setState({
//             first4: event.target.value,
//
//
//
//         })
//         console.log(this.state.first4)
//         // eslint-disable-next-line no-template-curly-in-string
//         return `${this.state.first4}`
//     }
//
//     handleUsernameChange1 = (event) => {
//         this.setState({
//             second4: event.target.value,
//
//
//
//         })
//         console.log(this.state.second4)
//         // eslint-disable-next-line no-template-curly-in-string
//         return `${this.state.second4}`
//     }
//
//     handleUsernameChange2 = (event) => {
//         this.setState({
//             third4: event.target.value,
//
//
//
//         })
//         console.log(this.state.third4)
//         // eslint-disable-next-line no-template-curly-in-string
//         return `${this.state.third4}`
//     }
//     handleSubmit = event => {
//         //alert(`http://127.0.0.1:8000/basic/basic?num=${this.state.first}`)
//         axios.get('http://127.0.0.1:8000/basic/basic', {
//             params: {
//                 total: this.state.first4,
//                 infe: this.state.second4,
//                 quar: this.state.third4
//             }
//         })
//         //return `http://127.0.0.1:8000/basic/s?numm=${this.state.first1}&quar=${this.state.second1}`
//     }
//
//     render() {
//         return (<div>
//             <div>
//                 <br></br><br></br>
//                 <h2>Прва симулација</h2><br/><br/><br/>
//                 <p>Во овој дел се внесува број на личности за кои сакате да изградите сличајна мрежа. Се поставуваат случајни контакти меѓу нив.
//                     Се внесува и број на личности кои ги поставувате за заразени во мрежата. Се внесува и број на личности
//                     кои сакате да ги ставите во карантин. Се гради граф, така што јазлите се личности во мрежата,
//                     а ребрата се контактите. Со сина боја се означени личностите кои се здрави, но подложени на ризик од зараза, а со црвена оние
//                     кои се заразени и претставуваат опасност за пренесување на заразата. Со црна боја се означени оние кои што се заразени, но
//                     се изолирани (под карантин) и не претставуваат опасност за ширење на вирусот. Со зелена боја се означени оние кои се
//                     здрави, но се придржуваат на мерките за лична заштита максимално и постои многу мала веројатност да
//                     создадат кластери за ширење на зараза. Со кликање на копчето "Симулирај"
//                     се прави пропагација на мрежата и се добива некој резултат на просечно ширење на заразата во опишаното сценарио</p>
//                 <form>
//                     <div className="form-group">
//                         <label htmlFor="exampleInputEmail1">Внесете број на население</label><br/>
//                         <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp "
//                                value={this.state.first4}
//                                onChange={this.handleUsernameChange}></input><br/>
//                         <label htmlFor="exampleInputEmail1">Внесете број  на заразени</label><br/>
//                         <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp "
//                                value={this.state.second4}
//                                onChange={this.handleUsernameChange1}></input><br/>
//                         <label htmlFor="exampleInputEmail1">Внесете број на личности во карантин</label>
//                         <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
//                                value={this.state.third4}
//                                onChange={this.handleUsernameChange2}></input>
//                     </div>
//                     <br>
//                     </br>
//
//                     <br>
//                     </br>
//                     <div className="form-group">
//                         <div >
//                             <button type="button" className="btn btn-primary" onClick={(e) => {
//                                 e.preventDefault();
//                                 window.location.href=`http://127.0.0.1:8000/dist/dist?total=${this.state.first4}&infe=${this.state.second4}&quar=${this.state.third4}`}}>Симулирај</button></div>
//                         <br></br><br/><br></br><br></br>
//                     </div>
//
//                 </form>
//             </div>
//         </div>)
//     }
// }
//
//
//
//
//
// ReactDOM.render(<Header/>, document.getElementById("root1"));
// ReactDOM.render(<Upatstvo></Upatstvo>, document.getElementById("upatstvo"))
// ReactDOM.render(<Soveti></Soveti>,document.getElementById("doctors"))
//
//
//
//
//
//
//
// ReactDOM.render(<Simulate4></Simulate4>, document.getElementById("simulate4"))
// ReactDOM.render(<Simulate3></Simulate3>, document.getElementById("simulate3"))
// ReactDOM.render(<Simulate2></Simulate2>, document.getElementById("simulate2"))
// ReactDOM.render(<Simulate1></Simulate1>, document.getElementById("simulate1"))
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
