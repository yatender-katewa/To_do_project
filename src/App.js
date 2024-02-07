import React, { useState, useEffect } from "react";
import Footer from "./mycomponents/footer";
import AddToDo from "./mycomponents/AddToDo";
import Heade from "./mycomponents/Heade";
import { Hode } from "./mycomponents/Hode";
import Todos from "./mycomponents/todos";
import { About } from "./mycomponents/About";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [items, setItems] = useState(() => {
    const storedItems = JSON.parse(localStorage.getItem("items"));
    return storedItems || [];
  });

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const onDelete = (temp) => {
    console.log("I am onDelete of todo", temp);
    setItems(items.filter((x) => x !== temp));
  };

  const addTodo = (title, desc) => {
    console.log("I am adding todo", title, desc);
    const sno = items.length === 0 ? 0 : items[items.length - 1].sno + 1;
    const newTodo = { sno, title, desc };
    setItems([...items, newTodo]);
  };

  return (
    <Router>
      <Heade title="My list" searchbar={true} />
      <AddToDo addTodo={addTodo} />
      <Todos items={items} onDelete={onDelete} />
      <Footer />
    </Router>
  );
}

export default App;
