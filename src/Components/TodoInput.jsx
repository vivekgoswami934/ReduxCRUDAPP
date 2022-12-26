import { AddIcon } from "@chakra-ui/icons";
import { Button, Center, Flex, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, getTodos } from "../Redux/action";

const TodoInput = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    //first add the data using POST request
    //call the getTodos function to fetch all the data from db.json
    dispatch(addTodo(todo)).then(() => dispatch(getTodos));
  };

  return (
    <Center >
      <Flex padding="5" >
        <Center>
          <Input
            size="lg"
            variant="flushed"
            value={todo}
            placeholder="Write your Todo..."
            onChange={(e) => setTodo(e.target.value)}
          />
          <Button colorScheme="whatsapp" onClick={() => handleAdd()}>
            <AddIcon  color="white" />
          </Button>
        </Center>
      </Flex>
    </Center>
  );
};

export default TodoInput;
