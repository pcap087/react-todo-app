import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTareas = [
    {texto: 'Lavar el auto', completed: false},
    {texto: 'Estudiar Ingles', completed: false},
    {texto: 'Curso de Java', completed: false},
    {texto: 'Pasear al Perro', completed: false},
    {texto: 'Pasear al Gato', completed: false}
]

function App() {
    //estado para el buscador de tareas
    const [searchValue, setSearchValue] = React.useState('');

    //estado para la cantidad de tareas
    const [tareas, setTareas] = React.useState(defaultTareas);

    //cantidad de tareas completadas
    const completedTodos = tareas.filter(item => item.completed === true).length;

    //cantidad de tareas del array
    const totalTodos = defaultTareas.length;

    //filtar los datos en el buscador
    const searchTareas = defaultTareas.filter(tarea => tarea.texto.toLowerCase().includes(searchValue.toLowerCase()));

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
        setTareas(newTodo);
    }

    //funcion para eliminar las tareas
    // const deleteTodo = (texto) => {
    //     //copia del array
    //     const newTodo = [...tareas]; 

    //     //const todoIndex = objId.indexOf(item.codigo);
    //     //buscamos el indice del elemento
    //     const todoIndex = newTodo.findIndex(
    //         (todo) => todo.texto === texto
    //     );

    //     //accedemos en el indice del areglo y quitamos el elemento
    //     newTodo.splice(todoIndex,1);

    //     //enviamos para que actualice el estado
    //     setTareas(newTodo);
    // }
    const deleteTodo = (texto) => {
        const newTodo = [...tareas]; 
        const updatedTodos = newTodo.filter((todo) => todo.texto !== texto);
        setTareas(updatedTodos);
    }
    

    return (
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
                    <CreateTodoButton/> 
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
    );
}

export default App;
