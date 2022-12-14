// Action Types
const ADD_TODO = "todos/ADD_TODO";
const DELETE_TODO = "todos/DELETE_TODO";
const TOGGLE_TODO = "todos/TOGGLE_TODO";

// Action Creator
let nextId = 5;
export const addTodo = text => ({
    type: ADD_TODO,
    todo: {
        id: nextId++,
        text
    }
});
export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id
});

export const deleteTodo = id => ({
    type: DELETE_TODO,
    id
});

const initialState = [
    {
        id: 1,
        text: 'Clean Room',
        done: true
    },
    {
        id: 2,
        text: 'Study',
        done: true
    },
    {
        id: 3,
        text: 'Shop Grocery',
        done: false
    },
    {
        id: 4,
        text: 'Do Assignments',
        done: false
    }
];

export default function todos(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return state.concat(action.todo);
        case TOGGLE_TODO:
            return state.map(
                todo =>
                    todo.id === action.id
                        ? { ...todo, done: !todo.done }
                        : todo
            );
        case DELETE_TODO:
            return state.filter(todo => todo.id !== action.id);
        default:
            return state;
    }
}