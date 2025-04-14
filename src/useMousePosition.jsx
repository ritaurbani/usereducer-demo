import React from 'react'
import {useState, useEffect} from 'react'


const useMousePosition = () => {

    const [mousePosition, setMousePosition] = useState({x:0, y:0})

    //come calcolo posizione? esiste evento della nostra window che si chiama mouse move
    //ma non posso scriverlo qui o si realizzera ad ogni rerender del componente
    //solo al caricamento del componente che usera questo hook

    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            console.log(e)
        })
    })
    
    return mousePosition
}

export default useMousePosition