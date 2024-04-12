import List from './components/List'
import AddTaskForm from './components/AddTasjForm';

const App = () => {
  
  return (
    <>
    <h1>Lista de tareas</h1>
      <AddTaskForm/>
      <div className='cards'>
      <List/>
    </div>
  </>
  );
};

export default App;
