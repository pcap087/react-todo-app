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
    return (
        <div className="container">
            <div className="todo-app">
                <TodoCounter completed={16} total={25}/>
                <div className="row">
                    <TodoSearch/> 
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
