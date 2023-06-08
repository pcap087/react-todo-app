function TodoItem({text, completed, completedTodos}) {
    
    const checkTodo = () => {
       console.log(text); 
    }


    return(
        <li>
            <button type="button" 
                className="icon-uncheck"
                onClick={checkTodo}
            />
    
            <p>{text}</p>
   
            <button type="button" 
                className="icon-deleted"
            />
 
        </li>
    );
}


export { TodoItem };

//{`unchecked ${props.completed} && "checked"`}

//className={`${props.completed == true ? "icon-check" : "icon-uncheck"}`}

//<p className={`${props.completed && "checked"}`}>{props.text}</p>