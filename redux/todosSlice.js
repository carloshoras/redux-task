import { createSlice } from '@reduxjs/toolkit';

//configuramos estado inicial
// const initialState = [
//         { id: 1, text: 'Hacer la compra', completed: false },
//         { id: 2, text: 'Llamar al médico', completed: true },
//         { id: 3, text: 'Hacer ejercicio', completed: false }
//       ]

//configuracion de la porcion (de nuestra parte que va a hacer el cambio inicial)
//y luego otro cambio como el setState
export const taskSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload)
    },
    deleteTodo: (state, action) => {
        return state.filter(todo => todo.id !== action.payload)
    }
  },
});

export const { addTodo, deleteTodo } = taskSlice.actions;
export default taskSlice.reducer;
