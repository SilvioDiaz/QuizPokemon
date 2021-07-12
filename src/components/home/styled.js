import styled from 'styled-components'

export const Button = styled.button`
    background-color: #E86F73;
    color: #E8E7D9;
    font-size: xx-large;
    font-weight: bolder;
    border: none;
    margin: 0.5rem;
    height:5rem;
    &:hover{
        cursor:  pointer;
        background-color: #E8E7D9;
        color: #E86F73;
    }

`

export const Img = styled.div`
    img{
        width: 200px;
    }
`

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color:#1F1F1F;
    height:100vh;
`
export const DivResposta = styled.div`
    display: grid;
    grid-template-columns: 2fr 2fr;
`
export const SocialButtons = styled.img`
    width: 50px;
`
export const SocialArea = styled.div`
    margin:1rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 1rem;

`