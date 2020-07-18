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



class Simulate1 extends React.Component{
    constructor(props) {

        super(props);
        this.state={
            first: ''
        }
    }
    handleUsernameChange = (event) => {
        this.setState({
            first: event.target.value

        })
        console.log(this.state.first)
        // eslint-disable-next-line no-template-curly-in-string
        return `http://127.0.0.1:8000/basic/basic?num=${this.state.first}`
    }
    handleSubmit = event => {
        alert(`http://127.0.0.1:8000/basic/basic?num=${this.state.first}`)
        axios.get('http://127.0.0.1:8000/basic/basic', {
            params: {
                num: this.state.first
            }
        })
        return `http://127.0.0.1:8000/basic/basic?num=${this.state.first}`
    }

    render() {

        return(
            <div><div>

                <h2>Четврта симулација</h2><br/><br/><br/>
                <p>Внесете параметар за број на население. Врз основа на оваа бројка
                    се симулираат кривите за ширење на заразата. Во резултатот се прикажани следните криви:</p>
                <p>- Жолта боја - Крива која ја претставува евалуацијата на личности кои се изложени на опасност од заразата</p>
                <p>- Зелена боја - Крива која ја претставува евалуацијата на личности кои се суспектни</p>
                <p>- Црвена боја - Крива која ја претставува евалуацијата на личности кои се заразени</p>
                <p>- Сина - Крива која ја претставува евалуацијата на личности кои се оздравени</p>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Внесете број на население</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={this.state.first}
                               onChange={this.handleUsernameChange}  ></input>
                    </div>
                    <br>
                    </br>

                    <div class="form-group">
                        <button type="button" onClick={(e) => {
                            e.preventDefault();
                            window.location.href=`http://127.0.0.1:8000/basic/basic?num=${this.state.first}`
                        }} className="btn btn-primary" className="btn btn-primary" >Симулирај</button></div>
                    <br></br><br/><br></br><br></br>
                </form>
                <img src={`${this.handleSubmit}`}></img>
            </div></div>)}}

export default Simulate1;
