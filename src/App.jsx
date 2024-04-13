import {addTodo} from '../redux/todosSlice.js';
import {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux' 

const App = () => {
  const [inputText, setInputText] = useState('')
  const dispatch = useDispatch()
  const todos = useSelector(state => state.todos)

  const handleClickAdd = () => {
    dispatch(addTodo({
      id: Math.floor(Math.random()*11),
      text: inputText
    }))
  }
  return (
    <>
    <h1>Lista de tareas</h1>
    <input 
      type="text" 
      placeholder='Introduce la tarea' 
      value={inputText}
      onChange={e=> setInputText(e.target.value)}/>
    <button type="button" onClick={handleClickAdd}>Añadir Tarea</button>
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.text}
        </li>
      ))}
    </ul>
  </>
  );
};

export default App;
