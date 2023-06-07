//import './css/TodoItem.css';

function TodoItem(props) {
    return(
        <li>
            <span className={`${props.completed == true ? "icon-check" : "icon-uncheck"}`}></span>

            <p className={`${props.completed && "checked"}`}>{props.text}</p>

            <span className=""></span>
        </li>
     
    );
}


export { TodoItem };

//{`unchecked ${props.completed} && "checked"`}