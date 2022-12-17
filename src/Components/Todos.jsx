import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, getTodos, statusTodo } from "../Redux/action";
import TodoInput from "./TodoInput";

const Todos = () => {

  const dispatch = useDispatch();  // when we call our function from action.js
  const {todos , isLoading} = useSelector((store) => store); // when we need data from our store
   // store is object and we can destructure
  // const isLoading = useSelector((store) => store.isLoading);

  const handleStatus = ({ id, status }) => {
    let x = { status: !status, id: id };   
    console.log(x);
    dispatch(statusTodo(x)).then(() => dispatch(getTodos));
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id)).then(() => dispatch(getTodos));
  };

  useEffect(() => { 
    dispatch(getTodos);
    console.log("called")
  }, [dispatch]);  

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div style={{border : "2px solid black"}}>
      <h1>Todos...</h1>
      <TodoInput />
      {todos.length > 0 &&
        todos.map((item,id) => {
          return (
            <div key={item.id} className="container">
              <div>
                
                {id+1}
                 <h7> {item.title}</h7>
               
              </div>
              <div>
                <button
                  className="statusbutton"
                  onClick={() => handleStatus({ ...item })}
                style={{background : item.status ? "green" : "yellow"}}
                >
                  {item.status ? "done" : "not done"}
                </button>
              </div>

              <div>
                <button
                  className="deleteButton"
                  onClick={() => handleDelete(item.id)}> Delete</button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Todos;
