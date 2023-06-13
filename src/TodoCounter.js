
import icon from './images/icon.png';

function TodoCounter({total, completed}) {

    return (
    total === completed 
    ?   <> 
            <h2>Felicidades 🙌👌👏🎉</h2> 
            <h3>Has finalizado todas las tareas !!</h3>
        </>
    :   <> 
            <h2>Lista de Tareas 
                <img src={icon} alt={icon}></img>
            </h2>
            <h3>Has completado {completed} de {total} tareas</h3>
        </>
    )
}

export { TodoCounter };

