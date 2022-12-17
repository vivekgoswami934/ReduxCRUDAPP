import { Box, Button, Center, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, getTodos, statusTodo } from "../Redux/action";

const Row = ({ data, rowID }) => {
  const dispatch = useDispatch();
  const { title, status, id } = data;
  console.log(data);
  const shadow = "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"

  const handleStatus = ({ id, status }) => {
    let x = { status: !status, id: id };
    console.log(x);
    dispatch(statusTodo(x)).then(() => dispatch(getTodos));
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id)).then(() => dispatch(getTodos));
  };

  return (
    <Box key={id} boxShadow={shadow} p="1"  mb="20px">
      <Flex justifyContent="space-evenly">
        <Center flex="1">{rowID + 1}</Center>
        <Center flex="4">
          <Text> {title}</Text>
        </Center>
        <Center flex="2">
          <Button colorScheme={status ? "green" : "yellow"} onClick={() => handleStatus({ ...data })}>
            {status ? "done" : "not done"}
          </Button>
        </Center>
        <Center flex="2">
          <Button colorScheme="red" onClick={() => handleDelete(id)}> Delete</Button>
        </Center>
      </Flex>
    </Box>
  );
};

export default Row;
