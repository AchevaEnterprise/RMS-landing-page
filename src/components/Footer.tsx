import { Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      mt="4rem"
      flexDir="column"
      gap="4rem"
      bgColor="#3E6F7C"
      textColor="#FDECF3"
      p="4rem"
      fontWeight="300"
      fontSize=".9rem">
      <Flex
        justifyContent="space-between"
        gap={{
          base: "4rem",
          lg: "0",
        }}>
        <Text fontSize="1.2rem" fontWeight="600">
          RMS
        </Text>
        <Flex flexDir="column" alignItems="center" rowGap="5rem" wrap="wrap">
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
      <Flex justifyContent="center" mt="1rem">
        <Text>All Rights Reserved &copy; 2023</Text>
      </Flex>
    </Flex>
  );
};

export default Footer;
