
import { useState, useRef, useEffect } from "react"

// //.FOCUS & SELECT
// //All apertura del componente voglio andare a cliccare all interno > fare un focus sul nostro input
// //Fare direttamente selezione del testo

// function UseRef() {
//     const inputRef = useRef()

//     useEffect(() => {
//         //inputRef.current e`il mio input
//         inputRef.current.focus()
//         inputRef.current.select()
//     }, [])//al mounting pagina sono gia dentro input

//     return(
//         <input 
//         type="text" 
//         defaultValue="Modifica questo testo.."
//         ref={inputRef}/>
//     )
// }

// //RESET - medoto originale e useRef
// function UseRef() {

//     console.log("rerender") 

//     const inputRef = useRef()
//     // const [value, setValue] = useState("")

//     return (
//         <div>
//             <input
//                 type="text"
//                 placeholder="Scrivi qui.."
//                 ref={inputRef}
//                 // value={value}
//                 // onChange={(e) => setValue(e.target.value)} 
//                 />
//             {/* <button onClick={() => setValue("")}>Reset</button> */}
//             <button onClick={() => inputRef.current.value = ""}>Reset</button>
//         </div>
//     )
// }

//SCROLL

// function UseRef() {
// //sectionRef è un oggetto con una proprietà .current che inizialmente è undefined.
// //Servirà per "agganciarsi" a un elemento DOM.
//     const sectionRef = useRef()//Creare il "riferimento"

//     const scrollToSection = () => {
//         //sectionRef.current: Prende l'elemento DOM a cui è collegato il ref (il <div> finale).
//         // scrollIntoView(): Metodo nativo del browser che fa scorrere la pagina fino a mostrare quell'elemento.
//         sectionRef.current.scrollIntoView({behavior: "smooth"})//funzione per scrollare su quell elemento
//     }


//     return (
//         <div>
//             <button onClick={scrollToSection}>Vai alla selezione</button>
//             <div style={{ height: "200vh", background: "red" }}></div>
//             {/* sectionRef.current punta al <div>  */}
//             <div ref={sectionRef}>Ecco la sezione!</div>
//         </div>
//     )
// }

//SCROLL & FOCUS

// function Component() {
//     const sectionRef = useRef();
//     const inputRef = useRef();

//     const scrollAndFocus = () => {
//         sectionRef.current.scrollIntoView(); // Scrolla
//         inputRef.current.focus(); // Focus sull'input
//     };

//     return (
//         <div>
//             <button onClick={scrollAndFocus}>Azione!</button>
//             <div style={{ height: "100vh" }}>Spazio...</div>
//             <div ref={sectionRef}>Sezione Target</div>
//             <input ref={inputRef} placeholder="Scrivi qui" />
//         </div>
//     );
// }

//VIDEO

function UseRef() {

    const videoRef = useRef()
    
    const playVideo =() => videoRef.current.play()
    const pauseVideo =() => videoRef.current.pause()

    return (
        <div>
            <video 
            width= "300"
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            ref={videoRef}
            // controls
            />
            <button onClick={playVideo}>Play</button>
            <button onClick={pauseVideo}>Pause</button>
        </div>
    )

}


// //FORM

// //mi serve avere stato per sapere cosa sta digitando 
// //utente poiche ho una validazione
// //per email non c e controllo quindi posso trasformare in un input non controllato

// function UseRef() {
//     //Note: mano a mano che scriviamo value all interno dell input react non rirenderizza pagina > console.log(rerender)
//     //prima volta al mounting pagina si
//     //su username ad ogni lettera rerender..
//     //per email nessun rerender perche non c e usestate
//     console.log("rerender")


//     const [username, setUsername] = useState("")
//     const emailRef = useRef()
//     // const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")
//     const confirmPasswordRef = useRef()
//     // const [confirmPassword, setConfirmPassword] = useState("")

//     //ref e l'elemento in se > il nostro input (input.value in js per prelevare la value di un input)
//     //emailRef.current valore corrente email, ci stampa object
//     const submit = (e) => {
//         e.preventDefault();
//         if(confirmPasswordRef.current.value !== password){
//             console.log("le due password non coincidono")
//         } else {
//             //dobbiamo prelevare il valore di input
//         const emailInput = emailRef.current //emailInput.value
//         console.log(`
//             Hai fatto il submit con:
//             -Username: ${username}
//             -email: ${emailRef.current.value}
//             -password: ${password}
//             -confirmPassword: ${confirmPasswordRef.current.value}
//         `)
//         }  
//     }


//     return (
//         <div className="container">
//             <form onSubmit={submit}>
//                 {/* USERNAME */}
//                 <section>
//                     <input
//                         type="text"
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                         placeholder="Username" />
//                     {/* Qui <strong> non è usato per il grassetto, ma come wrapper per 
//                     applicare uno stile condizionale, anche span ok */}
//                     <strong style={{ color: username.length < 6 ? "red" : "green" }}>
//                         {username.length < 6 ? "Almeno 6 caratteri" : "Username valid"}
//                     </strong>
//                 </section>
//                 {/* EMAIL */}
//                 <section>
//                     <input
//                         type="email"
//                         //prop per lavorare con useref
//                         ref={emailRef}//variabile da noi creata
//                         // value={email}
//                         // onChange={(e) => setEmail(e.target.value)}
//                         placeholder="Email" />
//                 </section>
//                 {/* PASSWORD */}
//                 <section>
//                     <input
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         placeholder="Password" />
//                     <strong style={{ color: password.length < 8 ? "red" : "green" }}>
//                         {password.length < 8 ? "Almeno 8 caratteri" : "Password valid"}
//                     </strong>
//                 </section>
//                 {/* CONFIRM PASSWORD */}
//                 <section>
//                     <input
//                         type="password"
//                         ref={confirmPasswordRef}
//                         // value={confirmPassword}
//                         // onChange={(e) => setConfirmPassword(e.target.value)}
//                         placeholder="Conferma Password" />
//                 </section>
//                 <button type="submit">Registrati</button>
//             </form>
//         </div>
//     )
// }

export default UseRef