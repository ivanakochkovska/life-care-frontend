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



class Simulate2 extends React.Component{
    constructor(props) {

        super(props);
        this.state={
            first1: '',
            second1: ''
        }
    }
    handleUsernameChange = (event) => {
        this.setState({
            first1: event.target.value,



        })
        console.log(this.state.first1)
        // eslint-disable-next-line no-template-curly-in-string
        return `${this.state.first1}`
    }

    handleUsernameChange1 = (event) => {
        this.setState({
            second1: event.target.value,



        })
        console.log(this.state.second1)
        // eslint-disable-next-line no-template-curly-in-string
        return `${this.state.second1}`
    }
    handleSubmit = event => {
        //alert(`http://127.0.0.1:8000/basic/basic?num=${this.state.first}`)
        axios.get('http://127.0.0.1:8000/basic/basic', {
            params: {
                numm: this.state.first1,
                quar: this.state.second1
            }
        })
        return `http://127.0.0.1:8000/basic/s?numm=${this.state.first1}&quar=${this.state.second1}`
    }

    render(){

        return(<div>

                <br></br><br></br>
                <h2>Трета симулација</h2><br/><br/><br/>
                <p>Внесете параметар за број на население.  Внесете параметар за процент
                    на личности во карантин. Врз основа на овие параметри
                    се симулираат кривите за ширење на заразата.Во резултатот се прикажани следните криви:</p>
                <p>- Жолта боја - Крива која ја претставува евалуацијата на личности кои се изложени на опасност од заразата</p>
                <p>- Зелена боја - Крива која ја претставува евалуацијата на личности кои се суспектни</p>
                <p>- Црвена боја - Крива која ја претставува евалуацијата на личности кои се заразени</p>
                <p>- Сина - Крива која ја претставува евалуацијата на личности кои се оздравени</p>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Внесете број на население</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                               value={this.state.first1}
                               onChange={this.handleUsernameChange} ></input>
                    </div>
                    <br>
                    </br>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Внесете процент за личности во карантин</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                               value={this.state.second1}
                               onChange={this.handleUsernameChange1}></input>
                    </div>
                    <br>
                    </br>
                    <div className="form-group">
                        <div >
                            <button type="button" onClick={(e) => {
                                e.preventDefault();
                                window.location.href=`http://127.0.0.1:8000/basic/s?numm=${this.state.first1}&quar=${this.state.second1}`
                            }} className="btn btn-primary" >Симулирај</button></div>
                        <br></br><br/><br></br><br></br>
                    </div>

                </form>
            </div>



        )

    }
}

export default Simulate2;
