import { Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTodos, updateTodo } from "../Redux/action";

const Edit = ({ data, editShowData , renderData }) => {
  console.log(data, "vivek");
  const dispatch = useDispatch();
  const [value, setValue] = useState(data.title);

  const editFunction = async () => {
    console.log(value);
    const payload = { ...data, title: value };
    await dispatch(updateTodo(payload))
      .then(()=>{renderData()})
      .then(() => editShowData());
    // console.log("done editing")
  };

  return (
    <form onSubmit={editFunction}>
      <Input
        variant="filled"
        colorScheme="gray.100"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
};

export default Edit;