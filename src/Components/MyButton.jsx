import React from "react";
import { Button } from "@chakra-ui/react";

const MyButton = ({ status, num, color }) => {
  // console.log(status, num, color);
  return (
    <Button colorScheme={color}  >
      {status} :- {num}
    </Button>
  );
};

export default MyButton;
