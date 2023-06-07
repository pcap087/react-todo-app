import React from 'react';

function TodoSearch({
    searchValue, 
    setSearchValue}){
    return (
    <>
        <input type="text" 
            onChange={e => setSearchValue(e.target.value)} 
            value={searchValue}
            placeholder="add your task"
        />
    </>
    )
}

export { TodoSearch };

