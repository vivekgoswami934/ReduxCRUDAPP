import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Box, Button, Center, Flex, Text } from "@chakra-ui/react";
import React, { memo } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, getTodos, statusTodo } from "../Redux/action";
import Edit from "./Edit";

const shadow = "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px";


// componenet
const Row = ({ data, rowID }) => {
  const [editShow, setEditShow] = useState(true);
  const dispatch = useDispatch();
  
  const { title, status, id } = data;

  const editShowData = () => {
    setEditShow((prev) => !prev);
  };
  console.log("child render")

  const handleStatus = ({ id, status }) => {
    let payload = { status: !status, id };
    
    dispatch(statusTodo(payload)).then(() => dispatch(getTodos));
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id)).then(() => dispatch(getTodos));
  };

  return (
    <Box key={id} boxShadow={shadow} p="1" mb="20px">
      <Flex justifyContent="space-evenly">
        <Center flex="1">
          <Text fontWeight="bold">{rowID + 1}</Text>{" "}
        </Center>
        <Center flex="4">
          {editShow ? (
            <Text  style={{textDecoration : data?.status ? "line-through" : ""}} fontWeight="bold"> {title}</Text>
          ) : (
            <Edit data={data} editShowData={editShowData}/> )}
        </Center>
        <Center flex="2">
          <Button colorScheme="blue" onClick={() => editShowData()}>   
            <EditIcon />
          </Button>
        </Center>
        <Center flex="2">
          <Button
            colorScheme={status ? "green" : "yellow"}
            onClick={() => handleStatus({ ...data })}
          >
            {status ? "done" : "not done"}
          </Button>
        </Center>
        <Center flex="2">
          <Button colorScheme="red" onClick={() => handleDelete(id)}>
            <DeleteIcon />
          </Button>
        </Center>
      </Flex>
    </Box>
  );
};

export default memo(Row);
