// function debounce(callback, delay) {
//     let timer;
//     return (value) => {
//         clearTimeout(timer);
//         timer = setTimeout(() => {
//             callback(value);
//         }, delay)
//     }
// }

// //callback eseguita solo dopo che e passato delay
// //perfetto per ridurre chiamate API o eventi frequenti
// //SERVE PER FORZA USARE LA callback function > 
// // perche c e un valore di cui devo tenere traccia

// //////////////////////ALTRO ESEMPIO////////////////////

// function SearchInput() {
//     const [query, setQuery] = useState("");

//     //faccio questa ricerca quando utente ha smesso di scrivere per almeno 500 ms
//     //ma ogni volta che cambio lo stato > triggero rerender del SearchInput component 
//     // e ricreo da 0 la funzione handleSearch a ogni rerender e timer non viene modificato, 
//     // viene resettato ogni volta che componente si aggiorna e debounce non funzionera
//     const handleSearch = debounce((newQuery) => {
//         console.log("API call:", newQuery)
//     }, 500);

//     ///////////SOLUTION: useCallback////////////
//     const handleSearch = useCallback(
//         debounce((newQuery) => {//funzione deboounce di una funzione dentro useCallback
//             console.log("API call:", newQuery)
//         }, 500),
//         []//handlesearch e creata una sola volta evitanto reset inutili del timeout
//           //
//     )

//     return (
//         <input 
//         type="text"
//         onChange={(e) => handleSearch(e.target.value)}
//         placeholder="Cerca..." />
//     )
// }
////////////////////////////////////////ACTUAL EXCERCISE/////////////////////////////////////
//se eseguo funzione senza aspettare delay, in realta eseguo solo una volta
//perche pulisco timeout ogni volta

function debounce(callback, delay){//callback: la funzione da eseguire (ex:il filtro o la ricerca).

       
    let timer = 0;
    return (value) => {
        clearTimeout(timer);
        // Cancelliamo il timer precedente ogni volta che l'utente 
        // digita qualcosa di nuovo.
        // Così se continua a scrivere, resettiamo il countdown.


        timer = setTimeout(() => {
            callback(value)//dopo il delay, se l’utente NON ha scritto di nuovo, eseguo la callback
        }, delay);
    }
}

// Ogni volta che l’utente scrive una lettera → chiamiamo la funzione ritornata da debounce

// clearTimeout(timer) resetta il countdown → "ok aspetta, l’utente sta ancora scrivendo!"

// Quando l’utente si ferma e passa il tempo di delay(es. 500ms) → eseguo la callback.

import {useEffect, useState, useCallback} from "react"

function App() {
    const [query, setQuery] = useState('')

//per ogni lettera che io type nell input viene eseguito un esegui fetch    
//ma non ha senso fare tutte queste richieste, ne bastava una quando ho finito 
// di scrivere la parola batman, quindi dobbiamo eseguire questa funzione solo 
// quando e passato mezzo secondo
//quindi usiamo funzione debounce (vedi sopra)
//1.
    eseguiFetch = (query) => {
        console.log("API call:", query)
    }
    /////riscrivo usando ddebounce/////
    //anche con debounce funzione eseguifetch e cio che ritorna il mio debounce, essa viene rirenderizzata ogni volta
    //ma non voglio questo perche voglio mantenere potere closure per mantenere timer attivo
    //quindi usiamo useCallback
    //2.
    const eseguiFetch = debounce((query) => {//debounce prende una callback e un tempo delay
        console.log("API call:", query)
    }, 500)

    //Invece di scrivere la 3 puoi anche scrivere cosi
    const eseguiFetchCallback = useCallback(eseguiFetch, [])

    //3.
    //uso con useCallback
    const eseguiFetch = useCallback(debounce((query) => {//debounce prende una callback e un tempo delay
        console.log("API call:", query)
    }, 500), [])//vuoto per creare eseguiFetch solo una volta



    //al cambio di query prelevo i film che rispondono alla query(value= query)
    useEffect(() => {
        eseguiFetch(query)
    }, [query])
}

// Ogni volta che query cambia(cioè ogni volta che l'utente scrive una lettera nell'input)

// Scatta il useEffect

// Dentro il useEffect chiami eseguiFetch(query)

// E siccome eseguiFetch è una funzione debounce, ogni volta che viene chiamata, lei resetta il timer.

//     Quindi:

// Scrivo "B" → query cambia → parte useEffect → chiama eseguiFetch("B") → debounce resetta timer

// Scrivo "Ba" → query cambia → parte useEffect → chiama eseguiFetch("Ba") → debounce resetta timer

// Scrivo "Bat" → ecc.

return (
    //input controllato perche state query e associato all input
    <input
    type="text"
    placeholder="Cerca..."
    value={query}
    onChange={(e) => setQuery(e.target.value)}/>
)

export default App