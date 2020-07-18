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



class Simulate3 extends React.Component{
    constructor(props) {

        super(props);
        this.state={
            first3: '',
            second3: ''
        }
    }
    handleUsernameChange = (event) => {
        this.setState({
            first3: event.target.value,



        })
        console.log(this.state.first3)
        // eslint-disable-next-line no-template-curly-in-string
        return `${this.state.first3}`
    }

    handleUsernameChange1 = (event) => {
        this.setState({
            second3: event.target.value,



        })
        console.log(this.state.second2)
        // eslint-disable-next-line no-template-curly-in-string
        return `${this.state.second3}`
    }
    handleSubmit = event => {
        //alert(`http://127.0.0.1:8000/basic/basic?num=${this.state.first}`)
        axios.get('http://127.0.0.1:8000/basic/basic', {
            params: {
                people_number: this.state.first3,
                sick: this.state.second3
            }
        })
        return `http://127.0.0.1:8000/basic/s?numm=${this.state.first3}&quar=${this.state.second4}`
    }

    render(){
        return (
            <div>
                <div>
                    <br></br><br></br>
                    <h2>Втора симулација</h2><br/><br/><br/>
                    <p>Во овој дел се внесува број на личности за кои сакате да изградите сличајна мрежа. Се поставуваат случајни контакти меѓу нив.
                        Се внесува и број на личности кои ги поставувате за заразени во мрежата. Се гради граф, така што јазлите се личности во мрежата,
                        а ребрата се контактите. Со сина боја се означени личностите кои се здрави, но подложени на ризик од зараза, а со црвена оние
                        кои се заразени и претставуваат опасност за пренесување на заразата. Со кликање на копчето "Симулирај"
                        се прави пропагација на мрежата и се добива некој резултат на просечно ширење на заразат доколку не се превземаат никакви
                        мерки за заштита.</p>
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Внесете број на население</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                   value={this.state.first3}
                                   onChange={this.handleUsernameChange}></input> <br/><br/>
                            <label htmlFor="exampleInputEmail1">Внесете број на личности кои се заразени</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                   value={this.state.second3}
                                   onChange={this.handleUsernameChange1}></input>
                        </div>
                        <br>
                        </br>

                        <br>
                        </br>
                        <div className="form-group">
                            <div >
                                <button type="button" className="btn btn-primary" onClick={(e) => {
                                    e.preventDefault();
                                    window.location.href=`http://127.0.0.1:8000/net/net?people_number=${this.state.first3}&sick=${this.state.second3}`
                                }}>Симулирај</button></div>
                            <br></br><br/><br></br><br></br>
                        </div>

                    </form>
                </div>

            </div>
        )
    }
}
export default Simulate3;
