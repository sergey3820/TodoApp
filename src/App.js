import React, {useEffect, useState} from "react";
import "./App.css";
import Item from "./Item";
import {Context} from "./Context";

function App() {

    const [state, setState] = useState([]);

    useEffect(() => {
        const raw = localStorage.getItem('state') || []
        setState(JSON.parse(raw))
    }, [])

    useEffect(() => {
        localStorage.setItem("state", JSON.stringify(state));
    }, [state])

    const [title, setTitle] = useState('');

    const addTodo = event => {
        if (event.key === 'Enter') {
            setState([
                ...state,
                {
                    id: Date.now(),
                    text: title,
                    com: false
                }
            ])
            setTitle('');
        }
    }

    function pox(id) {
        setState(state.map(el => {
            if (el.id === id) {
                el.com = !el.com
            }
            return el
        }))
    }

    function removeItem(id) {
        setState(state.filter(item => item.id !== id))
    }

    return (
        <Context.Provider value={{
            pox, removeItem
        }}>

            <div className="app">
                <h1 style={{textAlign: "center", marginTop: "5%"}}>Todo App</h1>
                <div className="app_app">
                    <div className="input_div">
                        <p>Enter your todo</p>
                        <input
                            type="text"
                            value={title}
                            onChange={event => setTitle(event.target.value)}
                            onKeyPress={addTodo}
                            className="app_input"
                        />
                    </div>
                    {state.length ? <Item
                        state={state}
                    /> : <p
                        style={{
                            color: "red",
                            textAlign: "center",
                            fontSize: "20px",
                            fontWeight: "bold"
                        }}>
                        You have not any todos yet
                    </p>}
                </div>
            </div>
        </Context.Provider>
    );
}

export default App;