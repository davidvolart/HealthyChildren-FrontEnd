import React, {Component} from 'react';
import Header from '../AuthTopBar/Header'
import './SignUp.css'

class SignUp extends Component<any, any>{

    constructor(props: any){
        super(props);
        this.handleOnClickRegister = this.handleOnClickRegister.bind(this);
    }

    handleOnClickRegister(event: any){
        this.props.history.push({ pathname: `/signup`})
    }

    render(){
        return(
            <>
                <Header/>
                <div className="formContainer">
                    <h2>Registro</h2>
                    <form>
                            <input type="text" placeholder="Introduce tu email" name="user"  required/>
                            <input type="password" placeholder="Introduce tu contraseña" name="password"  required/>
                            <input type="text" placeholder="Introduce tu nombre" name="name"  required/>
                            <input type="number" min="0" step=".01" placeholder="Introduce tu peso en KG" name="weigth"  required/>
                            <input type="number" min="0" step=".01" placeholder="Introduce tu altura en metros" name="heigth"  required/>
                            <button className = "submitSignUp" type="submit">Sign up</button>
                        </form>
                </div>
            </>     
        )
    }
}

export default SignUp