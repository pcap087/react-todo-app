import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoFooter } from '../TodoFooter'

function AppUI({completedTodos, totalTodos, searchValue, setSearchValue, searchTareas, completeTodo, deleteTodo, insertarTarea}){
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
                    <TodoFooter/>
                </div>
            </div>
        </>
    );
}
export { AppUI }; 