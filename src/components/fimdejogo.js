import Pokehome from "./home/pokeHome"
import React, {useState} from "react"
import { Button, Div,SocialButtons,SocialArea } from "./home/styled"

import {
    TelegramShareButton,
    FacebookShareButton,
    WhatsappShareButton,
    TwitterShareButton
} from "react-share"

import Facebook from "../img/Facebook.png"
import Telegram from "../img/Telegram.png"
import Twitter from "../img/Twitter.png"
import Whatsapp from "../img/Whatsapp.png"

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
                <h2>Compartilhe sua pontuação</h2>
                <SocialArea>
                    <TelegramShareButton url = {window.location.href} title = {socialMessage}>
                            <SocialButtons src = {Telegram}/>
                        </TelegramShareButton>

                        <FacebookShareButton url = {window.location.href}
                            quote = {socialMessage}
                            hashtag = {"#contrateSilvio,#PokeQuiz"}
                        >
                            <SocialButtons src = {Facebook}/>
                        </FacebookShareButton>

                        <WhatsappShareButton url = {window.location.href} title = {socialMessage}>
                            <SocialButtons src = {Whatsapp}/>
                        </WhatsappShareButton>

                        <TwitterShareButton url = {window.location.href} title = {socialMessage} hashtag = {"#contrateSilvio,#PokeQuiz"}>
                            <SocialButtons src = {Twitter}/>
                        </TwitterShareButton>
                </SocialArea>
            </Div>

        )
    }
export default FimdeJogo