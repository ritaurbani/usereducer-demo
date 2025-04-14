import React from 'react'
import { useState, useEffect } from 'react'

//se non viene pasasto nessun data sono oggetto vuoto
const useFormData = (initialValues = {}) => { 

const [formData, setFormData] = useState(initialValues)

//creo funzione che mi permette di modificare 
// ogni singolo valore

const handleChange = (event) => {
    //estraiamo anceh propeieta type e cheked
    const {name, value, type, checked} = event.target
    //partendo da formdata corrente manteniamo 
    //le sue proprieta a parte quello con chiave name con nuovo value 
    //il value estratto dall evento
    setFormData(curr => ({
        ...curr,
        // [name]: value
        [name]: type ==="checkbox" ? checked : value
    }))
}

    const resetForm = (e) => {
        e.preventDefault()
        setFormData(initialValues)
    }

  return {formData, handleChange, resetForm}
}


export default useFormData