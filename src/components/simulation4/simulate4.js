import React from "react";
import axios from "axios";
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
class Simulate4 extends React.Component {
    constructor(props) {

        super(props);
        this.state={
            first4: '',
            second4: '',
            third4: ''
        }
    }
    handleUsernameChange = (event) => {
        this.setState({
            first4: event.target.value,



        })
        console.log(this.state.first4)
        // eslint-disable-next-line no-template-curly-in-string
        return `${this.state.first4}`
    }

    handleUsernameChange1 = (event) => {
        this.setState({
            second4: event.target.value,



        })
        console.log(this.state.second4)
        // eslint-disable-next-line no-template-curly-in-string
        return `${this.state.second4}`
    }

    handleUsernameChange2 = (event) => {
        this.setState({
            third4: event.target.value,



        })
        console.log(this.state.third4)
        // eslint-disable-next-line no-template-curly-in-string
        return `${this.state.third4}`
    }
    handleSubmit = event => {
        //alert(`http://127.0.0.1:8000/basic/basic?num=${this.state.first}`)
        axios.get('http://127.0.0.1:8000/basic/basic', {
            params: {
                total: this.state.first4,
                infe: this.state.second4,
                quar: this.state.third4
            }
        })
        //return `http://127.0.0.1:8000/basic/s?numm=${this.state.first1}&quar=${this.state.second1}`
    }

    render() {
        return (<div id="service">
            <div>
                <br></br><br></br>
                <h2>Прва симулација</h2><br/><br/><br/>
                <p>Во овој дел се внесува број на личности за кои сакате да изградите сличајна мрежа. Се поставуваат случајни контакти меѓу нив.
                    Се внесува и број на личности кои ги поставувате за заразени во мрежата. Се внесува и број на личности
                    кои сакате да ги ставите во карантин. Се гради граф, така што јазлите се личности во мрежата,
                    а ребрата се контактите. Со сина боја се означени личностите кои се здрави, но подложени на ризик од зараза, а со црвена оние
                    кои се заразени и претставуваат опасност за пренесување на заразата. Со црна боја се означени оние кои што се заразени, но
                    се изолирани (под карантин) и не претставуваат опасност за ширење на вирусот. Со зелена боја се означени оние кои се
                    здрави, но се придржуваат на мерките за лична заштита максимално и постои многу мала веројатност да
                    создадат кластери за ширење на зараза. Со кликање на копчето "Симулирај"
                    се прави пропагација на мрежата и се добива некој резултат на просечно ширење на заразата во опишаното сценарио</p>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Внесете број на население</label><br/>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp "
                               value={this.state.first4}
                               onChange={this.handleUsernameChange}></input><br/>
                        <label htmlFor="exampleInputEmail1">Внесете број  на заразени</label><br/>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp "
                               value={this.state.second4}
                               onChange={this.handleUsernameChange1}></input><br/>
                        <label htmlFor="exampleInputEmail1">Внесете број на личности во карантин</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                               value={this.state.third4}
                               onChange={this.handleUsernameChange2}></input>
                    </div>
                    <br>
                    </br>

                    <br>
                    </br>
                    <div className="form-group">
                        <div >
                            <button type="button" className="btn btn-primary" onClick={(e) => {
                                e.preventDefault();
                                window.location.href=`http://127.0.0.1:8000/dist/dist?total=${this.state.first4}&infe=${this.state.second4}&quar=${this.state.third4}`}}>Симулирај</button></div>
                        <br></br><br/><br></br><br></br>
                    </div>

                </form>
            </div>
        </div>)
    }
}

export default Simulate4;
