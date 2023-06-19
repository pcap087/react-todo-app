import React from 'react';
import { AppUI } from './AppUI/AppUI.js';
// custom hooks
import { useLocalStorage } from './hooks/useLocalStorage'; 

function App() {

    //estado para el buscador de tareas
    const [searchValue, setSearchValue] = React.useState('');

    //estado para la cantidad de tareas
    const [tareas, saveTodos] = useLocalStorage('TODOS_V1', []);

    //cantidad de tareas completadas
    const completedTodos = tareas.filter(item => item.completed === true).length;

    //filtar los datos en el buscador
    const searchTareas = tareas.filter(tarea => {
        const tareaText   = tarea.texto.toLowerCase()
        const buscarTexto = searchValue.toLowerCase();
        return tareaText.includes(buscarTexto);
    });

    //cantidad de tareas del array
    const totalTodos = tareas.length;

    //funcion para marcar las tareas
    const completeTodo = (texto) => {
        //copia del array
        const newTodo   = [...tareas]; 

        //buscamos el indice del elemento
        const todoIndex = newTodo.findIndex(
            (todo) => todo.texto === texto
        );

        //accedemos en el indice del areglo y modificamos la propiedad
        newTodo[todoIndex].completed = !newTodo[todoIndex].completed;

        //enviamos para que actualice el estado
        saveTodos(newTodo);
    }

    //funcion para eliminar tareas
    const deleteTodo = (texto) => {
        const updatedTodos = tareas.filter((todo) => todo.texto !== texto);   
        saveTodos(updatedTodos);     
    };

    //funcion para agregar tareas
    const insertarTarea = (text) => {
        const newTarea = {
            texto: text, 
            completed: false
        }
        //enviamos al estado actualizador las anteriores + la tarea nueva
        saveTodos([...tareas, newTarea]);
        //actualizamos el estado del input
        setSearchValue('');
    };


    
    return (
       <AppUI 
            completedTodos={completedTodos}
            totalTodos={totalTodos}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            searchTareas={searchTareas}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
            insertarTarea={insertarTarea}
        />
    );
}

export default App;
