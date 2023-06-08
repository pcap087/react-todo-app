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
    {texto: 'Pasear al Perro', completed: false}
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
                            completedTodos = {completedTodos}
                        />))
                    }
                </TodoList>
            </div>
        </div>
    );
}

export default App;
