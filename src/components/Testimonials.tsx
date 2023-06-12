import { Flex, Image, Text } from "@chakra-ui/react";
import image1 from "../Images/attractive.jpg";
import image2 from "../Images/smile-1.jpg";
import image3 from "../Images/smile-2.jpg";

const Testimonials = () => {
  return (
    <Flex
      as="section"
      h="75vh"
      w="300vw"
      //   py="3rem"
      //   px="2rem"
      bg="radial-gradient(circle, rgba(238,174,202,1) 14%, rgba(222,176,208,1) 34%, rgba(215,97,155,1) 94%)"
      bgRepeat="repeat-x">
      <Flex
        h="60%"
        w="75vw"
        border="4px solid blue"
        justifyContent="space-evenly"
        // m="auto 0"
        alignItems="center"
        bg="radial-gradient(circle, rgba(238,174,202,.4) 14%, rgba(222,176,208,.4) 34%, rgba(215,97,155,.4) 94%)"
        gap=".2rem">
        <Flex flexDir="column" gap=".6rem" w="100%" alignItems="center">
          <Image
            src={image1}
            alt="300 Level course Rep image"
            w={200}
            h="auto"
            bgSize="cover"
            borderRadius="12px"
          />
          <Text>Deborah Oha</Text>
          <Text fontWeight="400" fontSize="1rem">
            300L Course Rep
          </Text>
        </Flex>
        <Flex w="60%">
          <Text textColor="teal.600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
            ullam dolores deleniti quam suscipit odio atque. Illo cum sequi
            maiores amet iste quos, magnam doloribus alias? Quod asperiores
            consequuntur ipsa Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Nam quisquam sapiente sit, illo facilis accusantium magni,
            quos dicta cumque facere fuga, cupiditate saepe quaerat earum
            blanditiis modi asperiores. Obcaecati, odit.
          </Text>
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
