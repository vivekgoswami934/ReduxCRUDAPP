import { Flex } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux';
import MyButton from './MyButton'

const Nav = () => {
    const { todos } = useSelector((store) => store);
    const done = todos?.filter((e) => e.status === true);
    const notDone = todos?.filter((e) => e.status === false);
  return (
    <>
    <Flex
        justifyContent="space-around"
        mt="3"
        p="3"
        borderBottom="2px solid whitesmoke"
      >
        <MyButton status={"Total"} num={todos?.length} color="gray" />
        <MyButton status={"Completed"} num={done?.length} color="green" />
        <MyButton status={"Not Completed"} num={notDone?.length} color="pink" />
      </Flex>
      
    </>
  )
}

export default Nav
