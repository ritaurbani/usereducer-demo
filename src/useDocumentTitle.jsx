import { useState, useEffect } from "react"

// Perché usare useEffect qui?
// document.title è un side effect: Modifica qualcosa fuori da React(il browser).
// React non gestisce automaticamente document.title, quindi lo aggiorniamo manualmente con useEffect.
//Quando si usa useEffect: Per modificare cose esterne (API, DOM, timer, ecc.).

//document.title??
//document è un oggetto globale del browser che rappresenta la pagina web.
//title è una sua proprietà che puoi leggere o modificare.



function useDocumentTitle(defaultValue){
    //quando cambia lo state si cambia anche il titolo del documento 
    // cui si accede facendo document.title
    const [documentTitle, setDocumentTitle] = useState(defaultValue)

    useEffect(() => {
        if(!documentTitle.trim()){//se e vuoto(o contiene solo spazi vuoti) clasciamo inialvalue
            document.title = defaultValue
        }else{//se c e
            document.title = documentTitle
        }
    }, [documentTitle])//useEffect si attiva quando questo cambia, no ad ogni render

    return [documentTitle, setDocumentTitle]
}

export default useDocumentTitle