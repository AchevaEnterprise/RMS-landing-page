import { Box, Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      h="25vh"
      bgColor="#3E6F7C"
      textColor="#FDECF3"
      p="2rem"
      fontWeight="300"
      fontSize=".9rem">
      <Flex justifyContent="space-between">
        <Text fontSize="1.2rem" fontWeight="600">
          RMS
        </Text>
        <Flex flexDir="column" alignItems="center" rowGap="5rem">
          <Flex gap="6rem" wrap="wrap">
            <Flex flexDir="column">
              <Link>Chat</Link>
              <Link>DashBoard</Link>
            </Flex>
            <Flex flexDir="column">
              <Link>Transcript</Link>
              <Link>Departmental Dues</Link>
            </Flex>
            <Flex flexDir="column">
              <Link>Contact Us</Link>
              <Link>Privacy Policy</Link>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        position="absolute"
        bottom="4"
        left="45%"
        translateX="-50%"
        translateY="-50%">
        <Text>All Rights Reserved &copy; 2023</Text>
      </Flex>
    </Box>
  );
};

export default Footer;
