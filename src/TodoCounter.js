
import icon from './images/icon.png';

function TodoCounter({total, completed}) {
    return (
        <>
            <h2>Lista de Tareas 
                <img src={icon}></img>
            </h2>
            <h3>Has completado {completed} de {total} tareas</h3>
        </>
    )
}

export { TodoCounter };

