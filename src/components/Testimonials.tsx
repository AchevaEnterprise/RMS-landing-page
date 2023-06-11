import { Box, Flex, Image, Text } from "@chakra-ui/react";
import image1 from "../Images/attractive.jpg";
import image2 from "../Images/smile-1.jpg";
import image3 from "../Images/smile-2.jpg";

const Testimonials = () => {
  return (
    <Flex
      as="section"
      h="75vh"
      w="300vw"
      py="3rem"
      px="2rem"
      bg="radial-gradient(circle, rgba(238,174,202,1) 14%, rgba(222,176,208,1) 34%, rgba(215,97,155,1) 94%)"
      bgRepeat="repeat-x">
      <Flex h="80%" w="75vw" border="4px solid blue" m="auto 0">
        <Flex flexDir="column" gap=".6rem">
          <Image
            src={image1}
            alt="300 Level course Rep image"
            w={200}
            h="auto"
            bgSize="cover"
          />
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
