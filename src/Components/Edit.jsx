import { Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getTodos, updateTodo } from "../Redux/action";

const Edit = ({ data, editShowData, renderData }) => {
  
  const dispatch = useDispatch();
  const [value, setValue] = useState(data.title);

  const editFunction = async () => {
    console.log(value);
    const payload = { ...data, title: value };
    await dispatch(updateTodo(payload))
      .then(() => {
        dispatch(getTodos);
      })
      .then(() => editShowData());
  };

  return (
    <form onSubmit={editFunction}>
      <Input
        variant="filled"
        textAlign="center"
        colorScheme="gray.200"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
};

export default Edit;
