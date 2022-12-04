import React from "react";

import TodoList from "./todoList";

function Todos({ todos }) {
    return (
        <TodoList todos={todos} />
    )
}

export default Todos;