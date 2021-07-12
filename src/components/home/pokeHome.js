import React, { useEffect, useState } from "react"
import axios from "axios"
import FimdeJogo from "../fimdejogo"
import { Button, Div, Img, DivResposta } from "./styled"


const BASE_URL = "https://pokeapi.co/api/v2/"

function PokeHome(){
    const [pokemonHome,setPokemonHome] = useState([])
    const [pokeEscolhas,setPokeEscolhas] = useState([])
    const [ponto,setPonto] = useState(0)
    const [vida,setVida] = useState(6)

    useEffect(() =>{
        gerarPokemon()
    }, [])


    function Capitalize(str){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }   

    const gerarPokemon = () => {
        const random = Math.floor((Math.random() * 898))
        axios
          .get(BASE_URL+`pokemon/${random}`)
          .then((resposta) => {
            setPokemonHome({nome: resposta.data.name, img: resposta.data.sprites.front_default})  
            gerarEscolhas(resposta.data.name)
          })
          .catch((erro) => {
            gerarPokemon()
          })
          
      }


    const  gerarEscolhas = (name) => {//Cria escolhas para o jogador
        const escolha = []
        let i = 0

        while(i < 3){
            const random = Math.floor((Math.random() * 898))
            
            axios   
            .get(BASE_URL+`pokemon/${random}`)
            .then((resposta) =>{

                escolha.push(resposta.data.name)

                if(escolha.length === 3){

                    escolha.push(name)
                    criarEscolha(escolha)
                }
            })
            .catch((err) => {
                gerarEscolhas(name)
            })

            i++ 
        }
            
    }

    const  criarEscolha = (poke) => { //Cria lista de opções

        const findDuplicates = arr => poke.filter((item, index) => poke.indexOf(item) != index)

        if(findDuplicates().length > 0){
            gerarEscolhas(poke[3])
        }else{
            setPokeEscolhas(ordenar(poke))
        }
        

    }

    const confirmarNome = (event) => { // Verifica resposta
        if(event.target.value === pokemonHome.nome){
            alert(`Você acertou o nome do ${Capitalize(pokemonHome.nome)}`)
            setPonto(ponto+10)
            
        }else{
            alert(`Você errou o nome, o certo é ${Capitalize(pokemonHome.nome)}`)
            setPonto(ponto-10)
            setVida(vida-1)
        }
        setPokeEscolhas([])
        setPokemonHome([])
        gerarPokemon()

    }

    const ordenar = (a) => { //Ordena opções de maneira aleatória
        for(let i = a.length -1; i > 0;i --){
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a
    }

    if(vida === 0){ //Verifica se está no fim do jogo
        return(
            <FimdeJogo
            ponto = {ponto}
            
            />
        )
    }

    const escolhas = pokeEscolhas.map((escolha) =>{ //Cria botões de escolha
 
        return(
            <Button 
            onClick = {confirmarNome}
            value = {escolha}>
            {Capitalize(escolha)}
            </Button>
        )
    })

    return(
        <Div>
            <h1>Quem é esse Pokémon?</h1>
            <h2>Ponto: {ponto}</h2>
            <h3>Vida: {vida}</h3>
            <Img>
                <img src = {pokemonHome.img}/>
            </Img>
            <DivResposta>
                {escolhas.length === 4 && escolhas}
            </DivResposta>

        </Div>
    
        
    )
    }

export default PokeHome