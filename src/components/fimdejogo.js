import Pokehome from "./home/pokeHome"
import React from "react"
import { Button, Div } from "./home/styled"
export default class FimdeJogo extends React.Component{

    state = {
        voltarJogo: false
    }

    voltarJogo = () =>{

        this.setState({voltarJogo:true})
    }

    render(){

        if(this.state.voltarJogo === true){
            return(<Pokehome/>)
        }

        return(
            <Div>
                <h1>Fim de Jogo</h1>
                <h2>A sua pontuação foi de: {this.props.ponto}</h2>
                <Button onClick = {this.voltarJogo}>Recomeçar</Button>

            </Div>

        )
    }

}