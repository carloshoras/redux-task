import { createSlice } from '@reduxjs/toolkit';

//configuramos estado inicial
const initialState = {
    tasks: [
        { id: 1, text: 'Hacer la compra', completed: false },
        { id: 2, text: 'Llamar al médico', completed: true },
        { id: 3, text: 'Hacer ejercicio', completed: false }
      ]
};

//configuracion de la porcion (de nuestra parte que va a hacer el cambio inicial)
//y luego otro cambio como el setState
export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  // reducers --> cambios que vamos a necesitar dentro de ese estado
  reducers: {
    addTask: (state, action) => {
      const { taskName } = action.payload;
      state.tasks.push({
        id:state.tasks.length+1,
        text:taskName,
        completed:false
      });
    },
    deleteTask: (state, action) => {
        state.tasks = state.tasks.filter(task => task.id !== action.payload.id)
    }
  },
});

export const { addTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
