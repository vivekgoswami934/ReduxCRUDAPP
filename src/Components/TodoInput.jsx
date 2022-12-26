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
  const abc = "rgba(10, 10, 13, 0.25) 0px 10px 2px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset"

  return (
    <Center boxShadow={abc} >
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
