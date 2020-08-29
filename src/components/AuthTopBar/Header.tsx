import React, {Component} from 'react';
import './Header.css'
import { withRouter } from 'react-router'


class Header extends Component<any, any>{

    constructor(props: any){
        super(props);
        this.handleOnClickRegister = this.handleOnClickRegister.bind(this);
    }

    handleOnClickRegister(event: any){
        const pathname = this.props.isLogIn ? `/signup` : `/login` 
        this.props.history.replace({ pathname: pathname})
    }

    render(){
        return(
            <div className="headerContainer">
                <button onClick = {this.handleOnClickRegister} className="headerButton">{this.props.isLogIn ?  'Registrate' : 'Inicia Sessión'}</button>
            </div>  
        )
    }
}

export default withRouter(Header)