import React, {Component} from 'react';
import Header from '../AuthTopBar/Header'
import './SignUp.css'
import axios from 'axios'

class SignUp extends Component<any, any>{

    constructor(props: any){
        super(props);
        this.state = {
            email: '',
            password: '',
            name: '',
            age: '',
            weigth: '',
            heigth: '',
            hasErrors: '',
        }
        this.handleOnClickRegister = this.handleOnClickRegister.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleOnClickRegister(event: any){
        this.props.history.push({ pathname: `/signup`})
    }

    handleChange(event: any){
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(e: any){
        e.preventDefault();
        
        if(this.validation(this.state)){
            const body = {
                "email" : this.state.email,
                "password" : this.state.password,
                "name" : this.state.name,
                "weight" : this.state.weigth,
                "height" : this.state.heigth,
                "age" : this.state.age,
            }
    
            const headers = {'Content-Type': 'application/json'}
            axios.post('http://0.0.0.0:8000/api/user/create/', body, {headers})
                .then(res => this.props.history.push({ pathname: `/login`}))
                .catch(error => this.setState({hasErrors: 'Este email ya esta en uso.'}))
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

    render(){
        const { email, password, name, age, weigth, heigth, hasErrors } = this.state;
        return(
            <>
                <Header/>
                <div className="formContainer">
                    <h2>Registro</h2>
                    {hasErrors && (<div className="error">{this.state.hasErrors}</div>) }
                    <form action="" onSubmit ={this.handleSubmit}>
                            <input type="text" placeholder="Introduce tu email" name="email" value = {email} onChange={this.handleChange} required/>
                            <input type="password" placeholder="Introduce tu contraseña (mínimo 8 caracteres)" name="password" value = {password} onChange={this.handleChange} required/>
                            <input type="text" placeholder="Introduce tu nombre" name="name" value = {name} onChange={this.handleChange} required/>
                            <input type="number" min="0" step="1" placeholder="Introduce tu edad" name="age" value = {age} onChange={this.handleChange} required/>
                            <input type="number" min="0" step=".01" placeholder="Introduce tu peso en KG" name="weigth" value = {weigth} onChange={this.handleChange} required/>
                            <input type="number" min="0" step=".01" placeholder="Introduce tu altura en metros" name="heigth" value = {heigth} onChange={this.handleChange} required/>
                            <button className = "submitSignUp" type="submit">Sign up</button>
                    </form>
                </div>
            </>     
        )
    }
}

export default SignUp