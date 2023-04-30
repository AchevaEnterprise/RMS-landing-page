import { Box, Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" bgColor="#2C191F" textColor="#FDECF3" fontWeight="300">
      <Flex flexDir="column" alignItems="center" rowGap="5rem" pt="2rem">
        <Flex gap="6rem">
          <Flex flexDir="column">
            <Link>Transcript</Link>
            <Link>Departmental Dues</Link>
          </Flex>
          <Flex flexDir="column">
            <Link>Chat C.A</Link>
            <Link>DashBoard</Link>
          </Flex>
          <Flex flexDir="column">
            <Link>Contact Us</Link>
            <Link>Privacy Policy</Link>
          </Flex>
        </Flex>
        <Flex textAlign="center">
          <Text>All Rights Reserved &copy; 2023</Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
