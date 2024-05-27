import { useState } from "react"
import Chatbot from "./chat"
import SearchWidget from "./search"


export const Ncertguru = ({ncertkey}:any) =>{
    console.log(ncertkey)
    let component = (<></>)
    if(ncertkey === 'chat')
        component =(<Chatbot />)
    if(ncertkey === 'search')
        component =(<SearchWidget />)
    return component;

}