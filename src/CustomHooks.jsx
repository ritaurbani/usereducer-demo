import React from 'react'
import { useState }  from 'react'
import useDocumentTitle from './useDocumentTitle'


//1. MODIFICA TITOLO DOCUMENTO HTML
//1.creo custom hook in file a parte
//2.in htm document ho messo titolo Custom CustomHooks, creo useDocumentTitle.jsx
const CustomHooks = () => {
    //passiamo title a un input se scrivo New Title nell input il titolo della pagina si aggiornera
    const [title, setTitle] = useDocumentTitle("Custom Hook")//default
  return (
    <div>
        <h2>Custom Hooks</h2>
        <input 
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        />
    </div>
  )
}

export default CustomHooks