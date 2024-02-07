import React from "react";
import Card from "react-bootstrap/Card";

export default function Todoitems({ items, onDelete }) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{items.title}</Card.Title>
          <Card.Text>{items.desc}</Card.Text>
          <button
            className="btn btn-sm btn-danger"
            onClick={() => {
              onDelete(items);
            }}
          >
            delete
          </button>
        </Card.Body>
      </Card>
    </div>
  );
}
