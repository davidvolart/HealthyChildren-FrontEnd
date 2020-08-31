import React, {Component} from 'react';
import Header from '../AuthTopBar/Header'
import './LogIn.css'
import axios from 'axios'

class LogIn extends Component<any, any>{
    
    constructor(props: any){
        super(props)
        this.state = {
            email: '',
            password: '',
            hasErrors: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    componentDidMount(){
        document.body.style.backgroundColor = "#85B3D1FF"
    }

    handleSubmit(event: any){
        event.preventDefault();

        if(this.validation(this.state)){
            const body = {
                "email" : this.state.email,
                "password" : this.state.password,
            }
    
            const headers = {'Content-Type': 'application/json'}
            axios.post('http://0.0.0.0:8000/api/user/login/', body, {headers})
                    .then(res => alert('User is ok'))
                    .catch(error => this.setState({hasErrors: 'No exite un usuario con estas credenciales. Vuelve a intentarlo.'}))
        }
    }

    validation(app: any): boolean{
        if(!this.validateEmail(app.email)){
            this.setState({hasErrors: 'El email no es valido.'})
            return false
        }else if(app.password.length < 8){
            this.setState({hasErrors: 'La contraseña debe tener minimo 8 caracteres.'})
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
        const { email, password, hasErrors } = this.state;
        return(
            <>
                <Header isLogIn/>
                <div className="formContainer">
                    <h2>Inicio de sessión</h2>
                    {hasErrors && (<div className="error"> {this.state.hasErrors} </div>) }
                    <form action="" onSubmit={this.handleSubmit}>
                            <input type="text" placeholder="Introduce tu usuario" name="email" value = {email} onChange={this.handleChange} required/>
                            <input type="password" placeholder="Introduce tu contraseña" name="password" value = {password} onChange={this.handleChange} required/>
                            <button className="submitButton" type="submit">Login</button>
                        </form>
                </div>
            </>      
        )
    }
}

export default LogIn