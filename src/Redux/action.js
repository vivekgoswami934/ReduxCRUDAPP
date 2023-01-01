import axios from "axios";
import * as types from "./actionTypes";

const API_URL = "https://good-puce-caterpillar-boot.cyclic.app/todosreduxcrud";
// const API_URL = "http://localhost:8080/todosreduxcrud";

const getTodosRequest = () => {
  return {
    type: types.GET_TODOS_REQUEST, // isLoading : true
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

/// clousers

//  function outer(a){
//   return function inner(b){
//        return a+b
//   }
//  }

//  outer(10)(4)

const getTodos = (dispatch) => {
  console.log("gettods calling");
  dispatch(getTodosRequest()); // isLoadig  -> true
  return axios
    .get(`${API_URL}`)
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
      .post(`${API_URL}`, payloadObj)
      .then((r) => {
        dispatch(addTodoSuccess());
      })
      .catch((e) => {
        dispatch(addTodoError());
      });
  }
};

 // get post patch put delete

//  {
 // id : 1
//   key1 : 1
//   status : 2
//  }



const statusTodo = ({ id, status }) => (dispatch) => {
    dispatch(statusTodoRequest());
    return axios
      .patch(`${API_URL}/${id}`, { status: status })
      .then((r) => {
        dispatch(statusTodoSuccess());
      })
      .catch((e) => {
        dispatch(statusTodoError());
      });
  };

const deleteTodo = (id) => async (dispatch) => {
  // dispatch({ type: "delete_request" });
  return await axios
    .delete(`${API_URL}/${id}`)
    .then((r) => {
      dispatch({ type: "delete_success" });
    })
    .catch((e) => {
      dispatch({ type: "delete_error" });
    });
};

// const outer =>  (payload) => async (dispatch) = > {

// }

export const updateTodo = (payload) => async (dispatch) => {
  const { id } = payload;
  console.log("chinta siva")
  console.log("id at action", id);
  dispatch({ type: types.UPDATE_TODO_REQUEST });
  try {
    const res = await axios.put(`${API_URL}/${id}`, payload);
    console.log(res);
    dispatch({ type: types.UPDATE_TODO_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: types.UPDATE_TODO_ERROR });
    console.log(
      "Error while calling updateTodo API at frontend ",
      error.message
    );
  }
};

export { getTodos, addTodo, statusTodo, deleteTodo };

//   promise.then()
