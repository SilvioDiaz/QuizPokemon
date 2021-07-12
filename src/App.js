import React,{useState} from "react";
import Pokehome from "./components/home/pokeHome";
import { Button, Div } from "./components/home/styled";

function App(){

  const [jogar,setJogar] = useState()

    
  const start = () =>{
    setJogar(true)
  }

    if(jogar === true){
      return(
        <Pokehome/>
      )
    }

    return (
      <Div>
        <Button onClick = {start}>Começar o jogo</Button>
      </Div>
    );
  }

export default App
