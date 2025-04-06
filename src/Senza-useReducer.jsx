// import { useState, useReducer } from 'react'

// const initialValue =[
//   {text: "Fare la spesa",
//     completed:false
//   },
//   {text: "Fare il bucato",
//     completed:true
//   },
//   {text: "Fare la doccia",
//     completed:false
//   },
// ]


// function App() {
//   const [text, setText] = useState("")
//   const [tasks, setTasks] = useState(initialValue)

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

//   return (
//     <>
//       <h2>Lista di cose da fare</h2>
//       <input type="text" 
//       placeholder='Aggiungi task'
//       value={text}
//       onChange={(e)=>setText(e.target.value)}/>
//       <button onClick={addTask}>Aggiungi Task</button>
//       <ul>
//         {
//           tasks.map((task, i) =>(
//             <li key={i}>
//               <p onClick={() => toggleTask(i)}>
//                 {task.completed? <s>{task.text}</s> : task.text}
//               </p>
//               <button onClick={() => deleteTask(i)}>Elimina</button>
//               <button onClick={() => cloneTask(i)}>Duplica</button>
//             </li>
//           ))
//         }
//       </ul>
//     </>
//   )
// }

// export default App
