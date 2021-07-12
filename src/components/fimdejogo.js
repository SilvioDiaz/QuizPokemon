import Pokehome from "./home/pokeHome"
import React, {useState} from "react"
import { Button, Div } from "./home/styled"

import {
    TelegramShareButton,
    FacebookShareButton,
    WhatsappShareButton,
    TwitterShareButton
} from "react-share"

function FimdeJogo(props){

    const [voltarJogo,setVoltarJogo] = useState()
    const socialMessage = `Fiz ${props.ponto} no Quiz Pokémon, acha que consegue me vencer?`
    const resetJogo = () =>{
        setVoltarJogo(true)
    }


        if(voltarJogo === true){
            return(<Pokehome/>)
        }

        return(
            <Div>
                <h1>Fim de Jogo</h1>
                <h2>A sua pontuação foi de: {props.ponto}</h2>
                <Button onClick = {resetJogo}>Recomeçar</Button>

                <TelegramShareButton url = {window.location.href} title = {socialMessage}>
                    <p>Telegram</p>
                </TelegramShareButton>

                <FacebookShareButton url = {window.location.href}
                    quote = {socialMessage}
                    hashtag = {"#contrateSilvio,#PokeQuiz"}
                 >
                     <p>Facebook</p>
                </FacebookShareButton>

                <WhatsappShareButton url = {window.location.href} title = {socialMessage}>
                    <p>Whatsapp</p>
                </WhatsappShareButton>

                <TwitterShareButton url = {window.location.href} title = {socialMessage} hashtag = {"#contrateSilvio,#PokeQuiz"}>
                    <p>Twitter</p>
                </TwitterShareButton>
            </Div>

        )
    }
export default FimdeJogo