import { useState, useReducer } from 'react'

//la action ci indica come modificare array di tasks all azione di add
const tasksReducer = (tasks, action) => {
  switch(action.type){
    //1.come modificare array di tasks allazione ADD
    case "ADD_TASK":
      //payload = text??? deve essere diverso da valore vuoto
      if(!action.payload.trim()) return tasks; //devo ritornare state corrente(tasks cosi come sono) perche se undefiend, tutto diventa undefines
      // Creo un nuovo task con il testo passato nel payload
      const taskToAdd = {
        text: action.payload.trim(),
        completed: false
      };//non dobbiamo usare setState - e la funzione 
      return [...tasks, taskToAdd]
    //1.come modificare array di tasks allazione TOGGLE
    case "TOGGLE_TASK":
      return tasks.map((task, index) => {
        //i non e definitia, ed e'l indice che passiamo ad action come payload
        if(index === action.payload){
          return{...task, completed: !task.completed}
        }
        return task;
      })
    case "DELETE_TASK":
      return tasks.filter((task, index) => {
        return index !== action.payload
        })
    case "CLONE_TASK":
      const taskToClone = tasks[action.payload];
      return [...tasks, taskToClone]
    default:
      return tasks;
  }
}

const initialTasks =[
  {text: "Fare la spesa",
    completed:false
  },
  {text: "Fare il bucato",
    completed:true
  },
  {text: "Fare la doccia",
    completed:false
  },
]


function App() {
  const [text, setText] = useState("")
  
  // const [tasks, setTasks] = useState(initialValue)

  //Per tutte le funzioni sotto devo fare un DISPATCH
  const [tasks, dispatchTasks] = useReducer(tasksReducer, initialTasks)

//   const addTask = () => {
//     if(!text.trim()) {return}
//     const taskToAdd = {
//       text:text.trim(),
//       completed:false
//     }
//     setTasks([...tasks, taskToAdd])//(curr => [...curr, taskToAdd])
//   }

//   //cambia proprieta completed della task cliccando sul paragrafo che contiene task
//   const toggleTask = (i) => {//sto passando a toggle l indice del task cliccato(vedi sotto nel <p>)
//     //curr: stato attuale di tasks
//     setTasks(curr => curr.map((task, index) => {
//       //if index === clickedIndex
//       if(index === i){//quando troviamo la task con indice passato allora return...
//         return {...task, completed: !task.completed}
//       }//else implicito
//       return task;//se non e task cliccato allora ritorna task com era 
//     }))
//   }

//   const cloneTask = (i) => {//duplica indica restituire una copia che aggiungi alla ffine dell array-(non con map, perche map modifica)
//   setTasks(curr => {  
//   //estrae il task che si trova nell'indice i dell'array curr
//     const taskToClone = curr[i];
//     //nuovo array che include tutti i task originali più il task duplicato (clonato).
//     return [...curr, taskToClone]
//   });
//   }


//   const deleteTask = (i) => {
//     setTasks(curr => curr.filter((task, index) => {
//       return index!==i}))
//   }
// //Alternativa con piu costanti
//   // const deleteTask = (i) => {
//   //  const updatedTaks =  tasks.filter((task, index) => index !== i)
//   //  setTasks(updatedTaks)
//   // }

  const handleAddTask = () => {
    dispatchTasks({ type: "ADD_TASK", payload: text });
    setText("")
  }

  return (
    <>
      <h2>Lista di cose da fare</h2>
      <input type="text" 
      placeholder='Aggiungi task'
      value={text}
      onChange={(e)=>setText(e.target.value)}/>
      <button onClick={handleAddTask}>Aggiungi Task</button>
      <ul>
        {
          tasks.map((task, i) =>(
            <li key={i}>
              <p onClick={() => dispatchTasks({ type: "TOGGLE_TASK", payload: i })}>
                {task.completed? <s>{task.text}</s> : task.text}
              </p>
              <button onClick={() => dispatchTasks({ type: "DELETE_TASK", payload: i })}>Elimina</button>
              <button onClick={() => dispatchTasks({ type: "CLONE_TASK", payload: i })}>Duplica</button>
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default App
