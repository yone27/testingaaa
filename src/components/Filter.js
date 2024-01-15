import React from 'react'

import './Filter.css';

const Filter = () => {
    
    // iniciar sesion en el servidor
    const handleClick = async e => {
        e.preventDefault()
        const elems = document.querySelector('.card-colum-3')
        for (const iterator of elems.children) {
            if(e.target.dataset.filter === '*') {
                iterator.style = 'display:block;'
            }else if(iterator.classList.contains(e.target.dataset.filter)){
                iterator.style = 'display:block;'
            }else{
                iterator.style = 'display:none;'
            }
        }   
    }

    return (
        <section id="filters" className="button-group">
            <button className="btn" onClick={handleClick} data-filter="*">All</button>
            <button className="btn" onClick={handleClick} data-filter="ReactJs">ReactJs</button>
            {/* <button className="btn" onClick={handleClick} data-filter="vuejs">VueJS</button> */}
            <button className="btn" onClick={handleClick} data-filter="NodeJs">NodeJs</button>
            <button className="btn" onClick={handleClick} data-filter="MERN">MERN</button>
            {/* <button className="btn" onClick={handleClick} data-filter="php">PHP</button> */}
            <button className="btn" onClick={handleClick} data-filter="Templates">Templates</button>
        </section>
    )
}

export default Filter
