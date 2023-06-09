function TodoItem(props) {

    return(
        <li>
            <button
                className={`${props.completed === true ? "icon-check" : "icon-uncheck"}`}
                onClick={props.onComplete}
            />
    
            <p className={`${props.completed && "checked"}`}>{props.text}</p>
   
            <button
                className="icon-deleted"
                onClick={props.onDelete}>
            </button>
 
        </li>
    );
}


export { TodoItem };

//{`unchecked ${props.completed} && "checked"`}

//className={`${props.completed == true ? "icon-check" : "icon-uncheck"}`}

//<p className={`${props.completed && "checked"}`}>{props.text}</p>