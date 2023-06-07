import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTareas = [
    {texto: 'Tarea 1', completed: true},
    {texto: 'Tarea 2', completed: false},
    {texto: 'Tarea 3', completed: false}
]

function App() {
    const [tareas, setTareas] = React.useState(defaultTareas);

    const [searchValue, setSearchValue] = React.useState('');

    const completedTodos = tareas.filter(todo => !!todo.completed).length; 
    const totalTodos = 0;

    return (
        <div className="container">
            <div className="todo-app">
                <TodoCounter 
                    completed={completedTodos} 
                    total={25}
                />
                <div className="row">
                    <TodoSearch
                        searchValue={searchValue} 
                        setSearchValue={setSearchValue}
                    /> 
                    <CreateTodoButton/> 
                </div>
                <TodoList>
                    {defaultTareas.map(todo => (
                        <TodoItem key={todo.texto} 
                            text={todo.texto}
                            completed={todo.completed}
                        />))
                    }
                </TodoList>
            </div>
        </div>
    );
}

export default App;
