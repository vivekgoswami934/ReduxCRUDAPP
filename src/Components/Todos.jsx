import { Box, Text } from "@chakra-ui/react";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../Redux/action";
import Loader from "./Loader";
import Row from "./Row";
import TodoInput from "./TodoInput";

const Todos = () => {
  const dispatch = useDispatch(); // when we call our function from action.js
  const { todos, isLoading } = useSelector((store) => store); // when we need data from our store
  const store = useSelector((store) => store); // when we need data from our store
  console.log(store);
  // store is object and we can destructure
  // const isLoading = useSelector((store) => store.isLoading);
  // console.log(todos,isLoading)

  useEffect(() => {
    dispatch(getTodos);
    console.log("called");
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Box>
      <Box m="auto" bg="whiteAlpha.800" border="2px solid whitesmoke">
        <Text align="center" fontSize="40px">
          Todos...
        </Text>
      </Box>
      <TodoInput />

      {todos.length > 0 &&
        todos?.reverse().map((item, id) => {
          return <Row key={id} data={item} rowID={id} />;
        })}
    </Box>
  );
};

export default Todos;
