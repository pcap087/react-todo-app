function CreateTodoButton() {
    //traditional function
    // function clickButton(){
    //     console.log('click button');
    // }

    //arrow function
    let clickButton = () => {
        console.log('click button');
    };

    return (
        <button onClick={clickButton}>Agregar</button>
    )
}

export { CreateTodoButton };

