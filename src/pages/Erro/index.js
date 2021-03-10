import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Erro extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <h1>Ops, Página não encontrada!</h1>
                <p>Voltar para <Link to="/" >Home</Link></p>
            </div>
        );
    }
}

export default Erro;