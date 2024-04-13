import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../../redux/todosSlice';

function Task () {
    const dispatch = useDispatch()
    const tasks = useSelector((state) => state.tasks)
    return (
        <>
        {tasks.map(task => (
            <div className="card" >
                <h3>{task.text}</h3>
                <button type="button" onClick={() => dispatch(deleteTask(task.id))}>Eliminar</button>
            </div>
        ))}
        </>
    )
}

export default Task