import { Box, Text, Flex, Image } from "@chakra-ui/react";
import cash from "../Images/cash.png";
import chat from "../Images/chat.png";
import graduate from "../Images/graduate.png";
import info from "../Images/info.png";
const Body = () => {
  const textColor: string = "#2C191F";

  const primaryFontWeight: number = 600;

  const flex = {
    display: "flex",

    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <Box p="1rem" my="3rem">
      <Box
        border="2px solid black"
        width="100%"
        m="0 auto"
        textAlign="center"
        my=".5rem">
        <Text as="h1" textAlign="center">
          Mathematics Department's Result Management System of the Federal
          University of Technology Owerri
        </Text>
      </Box>
      <Box textAlign="center" my="2rem">
        <Text as="h4"> FEATURED</Text>
        <Text as="h2">Process and stamp your Transcripts on the go</Text>
        <Text>
          Due to this centralized process, getting a duly stamped transcript
          just got much more easier
        </Text>
      </Box>
      <Flex
        wrap="wrap"
        justifyContent="space-evenly"
        textAlign="center"
        my="2rem">
        <Flex
          flexDir="column"
          border="2px solid black"
          borderRadius="10px"
          p="1rem"
          gap="1.2rem">
          <Image src={cash} alt="cash image" h="auto" w="200px" />
          <Box
            as="figcaption"
            textColor={textColor}
            fontWeight={primaryFontWeight}>
            {" "}
            Pay Departmental dues
          </Box>
        </Flex>
        <Flex
          flexDir="column"
          border="2px solid black"
          borderRadius="10px"
          p="1rem"
          gap="1.2rem">
          <Image src={graduate} alt="cash image" h="auto" w="200px" />
          <Box
            as="figcaption"
            textColor={textColor}
            fontWeight={primaryFontWeight}>
            Get Transcript{" "}
          </Box>
        </Flex>
        <Flex
          flexDir="column"
          border="2px solid black"
          borderRadius="10px"
          p="1rem"
          gap="1.2rem">
          <Image src={chat} alt="cash image" h="auto" w="200px" />
          <Box
            as="figcaption"
            textColor={textColor}
            fontWeight={primaryFontWeight}>
            Chat with C.A{" "}
          </Box>
        </Flex>
      </Flex>
      <Box>
        <Flex gap="1rem">
          <Image src={info} alt="Vision" h="auto" maxW="300px" />
          <Box
            p=".5rem"
            border="2px solid black"
            borderRadius="10px"
            textAlign="left">
            <Box w="70%">
              <Text as="h2">About RMS</Text>
              <Text as="h4">Result Management Sysytem (RMS)</Text>
              <Text>
                This is a final year project for the department of Mathematics
                in FUTO. <br />
                This team consists but not limited to 3 core team members:
                Daniel Chinemerem (software engineer), Njoku Chigoziem Glory
                (product designer), Nduagwuike Christopher Obinna (product
                manager, data analyst) and Dr Nnamdi Araka (project supervisor).{" "}
                <br /> <br />
                <strong>Vision</strong>: To become a leading EdTech in Africa’s
                startup ecosystem. <br /> <br />
                <strong>Mission Statement</strong> : we pride ourselves in
                interactive EdTech system for academic institutions to process
                students’ academic performance with ease.
              </Text>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Body;
