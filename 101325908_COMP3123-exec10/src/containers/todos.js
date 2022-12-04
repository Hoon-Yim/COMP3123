import React from "react";

import TodoHead from "../components/todosHead";
import TodoList from "../components/todoList";
import TodoCreate from "../components/todoCreate";

function TodosContainer() {
    return (
        <>
            <TodoHead />
            <TodoList />
            <TodoCreate />
        </>
    );
}

export default TodosContainer;