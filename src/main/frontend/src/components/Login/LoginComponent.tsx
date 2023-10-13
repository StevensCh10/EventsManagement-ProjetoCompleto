import { Flex } from "@chakra-ui/react";

import { RightPartScreen } from "../RightPartScreen";
import { LeftScreenLogin } from "./LeftScreenLogin";

export const LoginComponent = () => {
  return (
    <Flex w="100vw" h="100vh" justify="center" align="center">
      <Flex w="98vw" h="95vh">
        <LeftScreenLogin />
        <RightPartScreen />
      </Flex>
    </Flex>
  );
};
