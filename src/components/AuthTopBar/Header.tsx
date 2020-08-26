import React, {Component} from 'react';
import './Header.css'
import { withRouter } from 'react-router'


class Header extends Component<any, any>{

    constructor(props: any){
        super(props);
        this.handleOnClickRegister = this.handleOnClickRegister.bind(this);
    }

    handleOnClickRegister(event: any){
        this.props.history.replace({ pathname: `/signup`})
    }

    render(){
        return(
            <div className="headerContainer">
                <button onClick = {this.handleOnClickRegister} className="headerButton">Registrate</button>
            </div>  
        )
    }
}

export default withRouter(Header)