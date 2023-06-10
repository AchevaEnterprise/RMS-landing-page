import { Box, Flex, Image, Text } from "@chakra-ui/react";
import App from "../App";

const Testimonials = () => {
  return (
    <Flex
      as="section"
      h="60vh"
      w="300vw"
      py="3rem"
      px="1rem"
      bg="radial-gradient(circle, rgba(238,174,202,1) 14%, rgba(222,176,208,1) 34%, rgba(215,97,155,1) 94%)">
      <Flex>
        <Flex flexDir="column" gap=".6rem">
          <Image />
          <Text></Text>
          <Text></Text>
        </Flex>
        <Flex>
          <Text></Text>
        </Flex>
      </Flex>
      <Flex>
        <Flex flexDir="column" gap=".6rem">
          <Image />
          <Text></Text>
          <Text></Text>
        </Flex>
        <Flex>
          <Text></Text>
        </Flex>
      </Flex>
      <Flex>
        <Flex flexDir="column" gap=".6rem">
          <Image />
          <Text></Text>
          <Text></Text>
        </Flex>
        <Flex>
          <Text></Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Testimonials;
