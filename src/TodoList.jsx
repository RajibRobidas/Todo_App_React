import { useState } from "react";
import {v4 as uuidv4} from "uuid";
import './TodoList.css';


export default function TodoList() {
    let [todos, setTodos] = useState([{ task: "Sample Task", id: uuidv4(), isDone: false }]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        if(newTodo != ""){
            setTodos((prevTodos) => {
                return [...prevTodos, {task: newTodo, id: uuidv4(), isDone: false }];
            });
            setNewTodo("");
        }
    };

    let updateTodoList = (event) => {
        setNewTodo(event.target.value);
    };

    let deleteTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((prevTodos) => prevTodos.id != id));
    };

    let markAsDoneAll = () => {
        setTodos((prevTodos) => (
            prevTodos.map((todo) => {
                return {
                    ...todo,
                    isDone: true,
                }
            })
        ));
    };

    let markAsDone = (id) => {
        setTodos((prevTodos) => (
            prevTodos.map((todo) => {
                if(todo.id == id) {
                    return {
                        ...todo,
                        isDone: true,
                    };
                } else {
                    return todo;
                }
            })
        ));
    };

    return (
        <div id="todo">
            <div id="addTask">
                <input placeholder="add a task" value={newTodo} onChange={updateTodoList} />
                <button onClick={addNewTask}>Add Task</button>
            </div>

            <div id="showTask">
                <hr />
                <br />
                <h4 id="headline">Tasks Todo</h4>
                <br /><br />

                <ul>
                    {todos.map((todo) => ( 
                        <li key={todo.id}>
                            <span style={todo.isDone ? {textDecorationLine: "line-through"} : {}}>{todo.task}</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <button onClick={() => deleteTodo(todo.id)}>delete</button>
                            <button onClick={() => markAsDone(todo.id)}>Mark As Done</button>
                        </li>
                    ))}
                </ul>
                <button onClick={markAsDoneAll}>Mark As Done All</button>
            </div>
        </div>
    );
}