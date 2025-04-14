import React from 'react'
import { useState } from 'react'
import useDocumentTitle from './useDocumentTitle'
import useMousePosition from './useMousePosition'
import useFormData from './useFormData'


//1.
// /////////useDocumentTitle - MODIFICA TITOLO DOCUMENTO HTML//////////
//1.creo custom hook in file a parte
//2.in htm document ho messo titolo Custom CustomHooks, creo useDocumentTitle.jsx
//3.Collego l input al titolo del document
// const CustomHooks = () => {
//     //passiamo title a un input se scrivo New Title nell input il titolo della pagina si aggiornera
//     const [title, setTitle] = useDocumentTitle("Custom Hook")//default
//   return (
//     <div>
//         <h2>Custom Hooks</h2>
//         <input
//         type="text"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         />
//     </div>
//   )
// }

// export default CustomHooks

//2.
////////useMousePosition///////////
//1.creo hook che ci ritorna posizione x e y del mouse,
// che sara oggetto x e y

// const CustomHooks = () => {

//     const {x, y} = useMousePosition()//default

//   return (
//     <div>
//         <h2>Custom Hooks</h2>


//     </div>
//   )
// }

// export default CustomHooks

//4.
//useForm > hook che ci aiuta a gestire il nostro form
//normalmente per ognuno state o creare oggetto che ha le proprieta
// ma possiamo centralizzare con useForm

const CustomHooks = () => {

    //funzionalita rest centralizzata nell
    const { formData, handleChange, resetForm } = useFormData({
        email: "",
        username:"",
        password: "",
        privacy: true,
    })

    console.log(formData)

    
    return (
        <div>
            <h2>Custom Hooks</h2>
            <form action="">
                <input
                    type="email"
                    name='email'
                    placeholder='email'
                    value={formData.email}
                    onChange={handleChange} />

                <input type="text"
                    name='username'
                    placeholder='username'
                    value={formData.username}
                    onChange={handleChange} />

                <input type="password"
                    name='password'
                    placeholder='password'
                    value={formData.password}
                    onChange={handleChange}/>
                <label>
                <input type="checkbox"
                    name='privacy'
                    value={formData.privacy}
                    onChange={handleChange}/>
                    <span>Accetta privacy Policy</span>
                </label>

                    <button onClick={resetForm}>Reset</button>
            </form>
        </div>
    )
}

export default CustomHooks