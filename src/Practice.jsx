import React, { useMemo, useState, useCallback } from 'react'

const createIdGenerator = () => {
    let count = 0;
    return() => {
        const id = count
        count++
        return id
    }
}

const Practice = () => {

const [taks, setTasks] = useState([])

const returnedId = useCallback(createIdGenerator(), [])

const addTask = () => {
    const id = returnedId()
    const newTask = {id, name: `Task ${setTasks.length}`}
    setTasks((prev) => [...prev, newTask])
}

return (
    <>
    <h2>Ciao</h2>
    </>
)
}

export default Practice

