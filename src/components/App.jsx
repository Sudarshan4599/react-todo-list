import React, { useState } from "react";
import Todoitem from "./Todoitem";

function App() {

    const [inputText, setInputText] = useState("")
    const [items, setItems] = useState([])

    function handleChange(event) {
        const newValue = event.target.value

        setInputText(newValue)
    }

    function handleClick() {
        setItems(prevItems => {
            return [...prevItems, inputText]
        })
        setInputText("")
    }

    function deleteItem(id){
        setItems(prevItems => {
            return prevItems.filter((item, index) => {
                return index !== id
            })
        })
    }


    return (
        <div className="container">
            <div className="heading">
                <h1>To-Do List</h1>
            </div>
            <div className="form">
                <input onChange={handleChange} type="text" placeholder="Enter your list" value={inputText} />
                <button onClick={handleClick}>
                    <span>Add</span>
                </button>
            </div>
            <div>
                <ul>
                    {items.map((item , index) => (
                        <Todoitem 
                        key = {index}
                        id = {index}
                        text = {item}
                        onChecked = {deleteItem}
                        />
                        ))}
                </ul>
            </div>
        </div>
    );
}

export default App;
