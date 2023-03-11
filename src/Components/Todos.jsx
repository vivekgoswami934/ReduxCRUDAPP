import { Box, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../Redux/action";
import Loader from "./Loader";
import Nav from "./Nav";
import Row from "./Row";
import TodoInput from "./TodoInput";

const Todos = () => {
  const dispatch = useDispatch(); 

  const {todos , isLoading } = useSelector((store) => store) 
 

  useEffect(() => {
    dispatch(getTodos);
    console.log("called");
  }, []);
  

  


  if(isLoading) return <Loader />;
  

  return (
    <Box>
      <Box m="auto" bg="whiteAlpha.800" border="2px solid whitesmoke">
        <Text align="center" fontSize="40px">
          Todos...
        </Text>
      </Box>
      <Nav  />
      <TodoInput />

      {todos.length > 0 &&
        todos?.reverse().map((item, id) => {
          return (
            <Row key={id} data={item} rowID={id}  />
          );
        })}
    </Box>
  );
};

export default Todos;
