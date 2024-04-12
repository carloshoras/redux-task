import {useDispatch} from 'react-redux'
import { useState } from 'react'


function AddTaskForm ({addTask}) {
    const [inputTask, setInputTask] = useState("")
    const dispatch = useDispatch()
    return (
        <>
        <input type="text" onChange={(e) => setInputTask(e.target.value)}/>
        <button type="button" onClick={() => {dispatch(addTask({taskName: inputTask}))}}>Pica</button>
        </>
    )
}

export default AddTaskForm