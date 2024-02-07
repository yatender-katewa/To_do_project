import React from "react";
import Todoitems from "./todoitem";

export default function Todos(props) {
  let myStyle = {
    minHeight: "70vh",
    margin: "40px auto",
  };
  return (
    <div className="container" style={myStyle}>
      <h3>Todos List</h3>
      {props.items.length === 0
        ? "No Todos to display"
        : props.items.map((items) => {
            return (
              <Todoitems
                items={items}
                key={items.sno}
                onDelete={props.onDelete}
              />
            );
          })}
    </div>
  );
}
