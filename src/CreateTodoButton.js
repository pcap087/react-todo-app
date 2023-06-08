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
        <button className="button-add" onClick={clickButton}>Agregar</button>
    )
}

export { CreateTodoButton };

