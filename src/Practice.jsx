import React, { use, useState } from 'react'

const Practice = () => {

    const [query, setQuery] = useState("")

    const getQuery = async () => {
        if(!query.trim()){
            return
        }
    }
    try{
        const resp = await fetch(``)
        const data = await resp.json()
        setQuery(data)
    }catch(error){
        console.error("no data available")
    }


return (
    <>
    <h2>Ciao</h2></>
)
}

export default Practice

