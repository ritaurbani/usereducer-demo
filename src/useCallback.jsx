const createIdGenerator = () => {//variabile count nel suo scope (closure)
    let count = 0;
    return () => {//a ogni sua esecuzione ritorna un id che viene incrementato
        const id = count;
        count ++;
        return id;
    }
}

import { useState, useCallback } from "react"
//devo capire quali sono le dipendeze che devono determinare una ricreazione della mia funzione generateID 
//voglio creare solo una volta quando mio componente e montato ma non quando va in update

function App() {
    const [tasks, setTasks] = useState([])
    //funzione ritornata da create...
    //questa quando componente App viene rirendierizzato viene ricreata > usiamo useCallback >
    const generateId = useCallback(createIdGenerator(), [])//ora incrementa id come dovrebbe, prima id non si incrementava, era sempre 0

    //questa funzione modifica lo stato tasks > triggera rirender del componente App > 
    //il che signnifica che ricrea tutte le funzioni e le variabili dichiarate al suo interno >
    //anche la funzione generateId viene ricreata da 0 azzerando il contatore > usiamo useCallback
    const addTask = () => {
        const id = generateId();//id ad ogni esecuzione cresce
        const newTask = {id, name: `Task ${tasks.length}`};
        setTasks((prev) => [...prev, newTask])
    }

    return (
        <div>
            <button onClick={addTask}>Aggiungi</button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task.name} (ID: {task.id})</li>
                ))}
            </ul>
        </div>
    )

}


