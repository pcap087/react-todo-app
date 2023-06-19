function TodoItem({text, completed, onComplete, onDelete}) {
    return(
        <li className="animated fadeIn">
            {/* boton completar */}
            <button type="button" onClick={onComplete}
                className={`${completed === true ? "icon-check" : "icon-uncheck"}`}
            />

            {/* campo texto */}
            <input type="text" 
                className={`${completed && "checked"}`}
                value={text}
                readOnly
            />

            {/* boton de editar */}
            {/* <button type="button" className="icon-edit" onClick={onDelete}/> */}

            {/* boton de eliminar */}
            <button type="button" className="icon-deleted" onClick={onDelete}/>
        </li>
    );
}


export { TodoItem };

//{`unchecked ${props.completed} && "checked"`}

//className={`${props.completed == true ? "icon-check" : "icon-uncheck"}`}

//<p className={`${props.completed && "checked"}`}>{props.text}</p>