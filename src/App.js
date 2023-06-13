import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton/';

// const defaultTareas = [
//     {texto: 'Lavar el auto', completed: false},
//     {texto: 'Estudiar Ingles', completed: false},
//     {texto: 'Curso de Java', completed: false},
//     {texto: 'Pasear al Perro', completed: false}
// ];
// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTareas));

function useLocalStorage(itemName, initialValue){

    const localStorageItem = localStorage.getItem(itemName);
    let parsedItem;

    if(!localStorageItem){
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = [];
    }else {
        parsedItem = JSON.parse(localStorageItem);
    }

    const [item, setItem] = React.useState(parsedItem);

    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    };

    return [item, saveItem];
};

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
    };

    
    return (
        <>
            <div className="container">
                <div className="todo-app">
                    <TodoCounter 
                        completed={completedTodos} 
                        total={totalTodos}
                    />
                    <div className="row">
                        <TodoSearch
                            searchValue={searchValue} 
                            setSearchValue={setSearchValue}
                        /> 
                        <CreateTodoButton onInsert={() => insertarTarea(searchValue)} /> 
                    </div>
                    <TodoList>
                        {searchTareas.map(todo => (
                            <TodoItem 
                                key={todo.texto} 
                                text={todo.texto}
                                completed={todo.completed}
                                onComplete={() => completeTodo(todo.texto)}
                                onDelete={() => deleteTodo(todo.texto)}
                            />))
                        }
                    </TodoList>
                </div>
            </div>
        </>
    );
}

export default App;
