import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
    const { items } = useSelector((state) => state.counter);

    var [inputValue, setInputValue] = useState([]);


    function addValue(x) {
        setInputValue(inputValue => [...inputValue, x]);

    }

    function clearAllValues() {
        setInputValue(inputValue => []);

    }

    function deleteValue(x) {
        setInputValue(inputValue => [...inputValue.filter(val => val !== x)]);

    }

    function handleClick() {
        let el = document.querySelector('.target');
        el.style.setProperty('text-decoration', 'line-through');
    }



    return (
        <div>
            <div className="addition">
                <input type="text" id='item' placeholder="Add a Todo Item" /><br></br>
                <button className="addItem" onClick={() => addValue(document.getElementById('item').value)}>Add Item</button>
            </div>

            <div className="list">
                <h3>Todo List</h3>
                <p>{inputValue.map(
                    (x) => <p className="target">{x}
                        <button onClick={() => deleteValue(x)}><i className="fa fa-trash"></i>Delete </button>
                        <button onClick={() => handleClick()}>Mark As Done </button></p>
                )}</p>
            </div>

            <button className="clearList" onClick={() => clearAllValues()}> Clear List </button>

        </div>
    );
};

export default Counter;