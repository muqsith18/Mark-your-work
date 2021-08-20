import React, { useState } from 'react'
import './style.css'

// add items
const Todos = () => {
  const [ipvalue, setipvalue] = useState(" ")
  const [list, setlist] = useState([])
  const addItems = () => {
    if (!ipvalue) {

    } else {
      setlist([...list, ipvalue]);
      setipvalue("")
    }
  }

  // remove items
  const removeItem = (id) => {
    const updatedlist = list.filter((ele, ind) => {
      return ind !== id;
    })
    setlist(updatedlist)
  }

  // reset list
  const clearItem = () => {
    setlist([])
  }

  return (
    <div className='wrapper'>
        <div>
          <h1 className='wrapper head'> Agenda</h1>
        </div>
      <div className='inputField inputField-input '>
        <input type='text' placeholder='Add todo' value={ipvalue} onChange={e => setipvalue(e.target.value)} />
        <i className='fas fa-plus ' title="addItem" onClick={addItems}></i>
      </div>
         <div className='wrapper todoList' >
        {list.map((ele, ind) => {
          return (
            <div   key={ind}>
             <h2>
               <ul className='  todoList-li  todoList-li-span'>
                 <li>
                {ele}
                <span > <i className="far fa-trash-alt add-btn " onClick={() => removeItem(ind)}></i></span>
                </li>
                </ul>
                </h2>
            </div>
          )
        })}
        </div>
      
      <div className='footer footer-button'>
        <button className="btn effect04 " data-sm-link-text="CLEAR" onClick={clearItem}>Clear All</button>
      </div>
    </div>
  )
}

export default Todos;