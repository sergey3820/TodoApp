import React, {useContext} from "react";
import "./Liitem.css";
import {Context} from './Context'

function Liitem({state}) {

    const {pox, removeItem} = useContext(Context)

    const cls = [];

    if (state.com) {
        cls.push("done")
    }
    return (
        <li className="liWrapper">
          <span className="span_wrapper">
          <input
              type="checkbox"
              checked={state.com}
              onChange={() => pox(state.id)}
          />
          <p onClick={() => pox(state.id)} style={{fontSize: "18px"}} className={cls.join('')}>{state.text}</p>
              </span>
            <button className="deleteBtn" onClick={() => removeItem(state.id)}><i className="fas fa-trash-alt"></i>
            </button>
        </li>
    );
}

export default Liitem;