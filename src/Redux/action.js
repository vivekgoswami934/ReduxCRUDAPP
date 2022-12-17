import axios from "axios";
import * as types from "./actionTypes";

const getTodosRequest = () => {
  return {
    type: types.GET_TODOS_REQUEST,
  };
};

const getTodosSuccess = (payload) => {
  return {
    type: types.GET_TODOS_SUCCESS,
    payload,
  };
};

const getTodosError = () => {
  return {
    type: types.GET_TODOS_ERROR,
  };
};

const addTodoRequest = () => {
  return {
    type: types.ADD_TODO_REQUEST,
  };
};

const addTodoSuccess = (payload) => {
  return {
    type: types.ADD_TODO_SUCCESS,
    payload,
  };
};

const addTodoError = () => {
  return {
    type: types.ADD_TODO_ERROR,
  };
};

const statusTodoRequest = () => {
  return {
    type: types.STATUS_TODO_REQUEST,
  };
};

const statusTodoSuccess = (payload) => {
  return {
    type: types.STATUS_TODO_SUCCESS,
    payload,
  };
};

const statusTodoError = () => {
  return {
    type: types.STATUS_TODO_ERROR,
  };
};

const getTodos = (dispatch) => {
  dispatch(getTodosRequest()); // isLoadig  -> true
  return axios
    .get("http://localhost:8080/todos")
    .then((r) => dispatch(getTodosSuccess(r.data))) // getTodos(payload)
    .catch((e) => {
      dispatch(getTodosError());
    }); 
};

const addTodo = (payload) => (dispatch) => {
  if (payload) {
    const payloadObj = {
      title: payload,  
      status: false,
    };
    dispatch(addTodoRequest());
    return axios
      .post("http://localhost:8080/todos", payloadObj)
      .then((r) => {
        dispatch(addTodoSuccess());
      })
      .catch((e) => {
        dispatch(addTodoError());
      });
  }
};

const statusTodo =
  ({ id, status }) =>
  (dispatch) => {
    dispatch(statusTodoRequest());
    return axios
      .patch(`http://localhost:8080/todos/${id}`, { status: status })
      .then((r) => {
        dispatch(statusTodoSuccess());
      })
      .catch((e) => {
        dispatch(statusTodoError());
      });
  };

const deleteTodo = (id) => async (dispatch) => {
  dispatch({ type: "delete_request" });
  return await axios
    .delete(`http://localhost:8080/todos/${id}`)
    .then((r) => {
      dispatch({ type: "delete_success" });
    })
    .catch((e) => {
      dispatch({ type: "delete_error" });
    });
};

export { getTodos, addTodo, statusTodo, deleteTodo };

//   promise.then()
