import { Box, Text, Flex, Image } from "@chakra-ui/react";
import cash from "../Images/cash.png";
import chat from "../Images/chat.png";
import graduate from "../Images/graduate.png";

const Body = () => {
  const primaryFontWeight: number = 600;
  const textColor: string = "#2C191F";
  const borderColor: string = "2px solid black";
  const borderRadius: string = "10px";
  const imageWidth: string = "200px";
  const flex = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <Box p="1rem" maxW="1000px" m="0 auto">
      <Box {...flex} border={borderColor} textAlign="center" my="3rem" p="1rem">
        <Text
          as="h1"
          textAlign="center"
          fontWeight={primaryFontWeight}
          fontSize={{
            base: "80%",
            md: "2rem",
          }}>
          Mathematics Department's Result Management System
        </Text>
      </Box>
      <Box textAlign="center" my="2rem">
        <Text as="h4" fontWeight="800">
          FEATURED
        </Text>
        <Text as="h2">Process and stamp your Transcripts on the go</Text>
        <Text>
          Due to this centralized process, getting a duly stamped transcript
          just got much more easier
        </Text>
      </Box>
      <Flex
        wrap="wrap"
        justifyContent="space-between"
        alignItems="center"
        textAlign="center"
        my="4rem">
        <Flex
          flexDir="column"
          border="2px solid black"
          borderRadius={borderRadius}
          p="1rem"
          gap="1.2rem">
          <Image src={cash} alt="cash image" h="auto" w={imageWidth} />
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
          borderRadius={borderRadius}
          p="1rem"
          gap="1.2rem">
          <Image src={graduate} alt="cash image" h="auto" w={imageWidth} />
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
          borderRadius={borderRadius}
          p="1rem"
          gap="1.2rem">
          <Image src={chat} alt="cash image" h="auto" w={imageWidth} />
          <Box
            as="figcaption"
            textColor={textColor}
            fontWeight={primaryFontWeight}>
            Chat with C.A{" "}
          </Box>
        </Flex>
      </Flex>
      <Box>
        <Box
          p=".5rem"
          my="2.5rem"
          border="2px solid black"
          borderRadius={borderRadius}
          textAlign="left"
          fontWeight="400">
          <Box p="1rem">
            <Text
              as="h2"
              fontSize="1.8rem"
              fontWeight={600}
              textAlign="center"
              my=".5rem">
              About
            </Text>

            <Text>
              Our EdTech is an adaptive and intelligent web-based result
              management system for academic institutions, to process students’
              academic performance with ease due to unmet needs of result
              declaration in African universities as it is manually done with
              extensive human intervention. <br />
              This team consists but not limited to 3 core team members: Daniel
              Chinemerem (Software Engineer), Njoku Chigoziem Glory (Product
              Designer), Nduagwuike Christopher Obinna (Product Manager, data
              analyst) and Dr Nnamdi Araka (Project Supervisor)
              <br />
              <strong>Vision:</strong> To become a leading EdTech in Africa’s
              startup ecosystem. <br />
              <strong> Mission Statement</strong>: we pride ourselves in
              interactive EdTech system for academic institutions to process
              students’ academic performance with ease.
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Body;
