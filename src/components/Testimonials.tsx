import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import image1 from "../Images/attractive.jpg";
import image2 from "../Images/smile-1.jpg";
import image3 from "../Images/smile-2.jpg";

const Testimonials = () => {
  return (
    <Box as="section" my="1rem">
      <Heading textAlign="center">What People Saya About Us</Heading>
      <Flex
        bg="teal.900"
        h="70vh"
        w="200vw"
        my="1rem"
        borderRadius="20px"
        alignItems="center"
        px="5rem">
        <Flex
          h="60%"
          bg="blue.200"
          w="30%"
          gap="2rem"
          alignItems="center"
          justifyContent="center">
          <Flex flexDir="column" textAlign="center">
            <Image
              src={image1}
              alt="attractive"
              w="250px"
              // h="200px"
              borderRadius="40px"
            />
            <Text fontWeight="800" fontSize="1.6rem">
              Josephine Simeon
            </Text>
            <Text fontSize="1rem" fontWeight="500">
              300L Course Rep
            </Text>
          </Flex>
          <Text w="60%">
            I have used the RMS and it has helped me alot, it makes it easy for
            me to see and understand my results. I have used the RMS and it has
            helped me alot, it makes it easy for me to see and understand my
            results. I have used the RMS and it has helped me alot, it makes it
            my results. results. I have used the RMS and it has helped me alot,
            it makes it my results.
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Testimonials;
