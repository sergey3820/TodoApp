import React from "react";
import Liitem from "./liItem";
import "./Item.css";


function Item({ state }) {
    return(
      <ul className="item_wrapper">
          {state.map((item) => {
              return <Liitem state={item} />
          })}
      </ul>
    );
}
export default Item;