
import { useState, useRef } from "react"

//mi serve avere stato per sapere cosa sta digitando 
//utente poiche ho una validazione
//per email non c e controllo quindi posso trasformare in un input non controllato


function UseRef() {
    //Note: mano a mano che scriviamo value all interno dell input react non rirenderizza pagina > console.log(rerender)
    //prima volta al mounting pagina si
    //su username ad ogni lettera rerender..
    //per email nessun rerender perche non c e usestate
    console.log("rerender")


    const [username, setUsername] = useState("")
    const emailRef = useRef()
    // const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const confirmPasswordRef = useRef()
    // const [confirmPassword, setConfirmPassword] = useState("")

    //ref e l'elemento in se > il nostro input (input.value in js per prelevare la value di un input)
    //emailRef.current valore corrente email, ci stampa object
    const submit = (e) => {
        e.preventDefault();
        if(confirmPasswordRef.current.value !== password){
            console.log("le due password non coincidono")
        } else {
            //dobbiamo prelevare il valore di input
        const emailInput = emailRef.current //emailInput.value
        console.log(`
            Hai fatto il submit con:
            -Username: ${username}
            -email: ${emailRef.current.value}
            -password: ${password}
            -confirmPassword: ${confirmPasswordRef.current.value}
        `)
        }  
    }


    return (
        <div className="container">
            <form onSubmit={submit}>
                {/* USERNAME */}
                <section>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username" />
                    <strong style={{ color: username.length < 6 ? "red" : "green" }}>
                        {username.length < 6 ? "Almeno 6 caratteri" : "Username valid"}
                    </strong>
                </section>
                {/* EMAIL */}
                <section>
                    <input
                        type="email"
                        //prop per lavorare con useref
                        ref={emailRef}//variabile da noi creata
                        // value={email}
                        // onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email" />
                </section>
                {/* PASSWORD */}
                <section>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password" />
                    <strong style={{ color: password.length < 8 ? "red" : "green" }}>
                        {password.length < 8 ? "Almeno 8 caratteri" : "Password valid"}
                    </strong>
                </section>
                {/* CONFIRM PASSWORD */}
                <section>
                    <input
                        type="password"
                        ref={confirmPasswordRef}
                        // value={confirmPassword}
                        // onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Conferma Password" />
                </section>
                <button type="submit">Registrati</button>
            </form>
        </div>
    )
}

export default UseRef