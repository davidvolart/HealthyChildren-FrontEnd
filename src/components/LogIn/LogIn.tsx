import React, {Component} from 'react';
import Header from '../AuthTopBar/Header'
import './LogIn.css'

type state = {
    user: string,
    password: string,
    hasErrors: boolean,
}

class LogIn extends Component<any, state>{
    
    constructor(props: state){
        super(props)
        this.state = {
            user: '',
            password: '',
            hasErrors: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    componentDidMount(){
        document.body.style.backgroundColor = "#85B3D1FF"
    }

    handleSubmit(event: any){
        if(this.validation(this.state)){
            alert('Credentials are valid')
        }else{
            this.setState({hasErrors: true})
        }
        event.preventDefault();
    }

    validation(app: any): boolean{
        if(app.password.length < 8 || !this.validateEmail(app.user)){
            return false
        }
        return true
    }

    validateEmail(email: string): boolean{
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    handleChange(event: any){
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
    }

    render(){
        const { user, password, hasErrors } = this.state;
        return(
            <>
                <Header isLogIn/>
                <div className="formContainer">
                    <h2>Inicio de sessión</h2>
                    {hasErrors && (<div className="error"> Algunos campos están vacíos o contienen valores incorrectos. </div>) }
                    <form>
                            <input type="text" placeholder="Introduce tu usuario" name="user" value = {user} onChange={this.handleChange} required/>
                            <input type="password" placeholder="Introduce tu contraseña" name="password" value = {password} onChange={this.handleChange} required/>
                            <button className="submitButton" type="submit" onClick = {this.handleSubmit}>Login</button>
                        </form>
                </div>
            </>      
        )
    }
}

export default LogIn