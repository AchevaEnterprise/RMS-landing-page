import {
  Box,
  CircularProgress,
  CircularProgressLabel,
  Flex,
} from "@chakra-ui/react";
import Offer from "./Offer";
import Faqs from "./Faqs";
const Body = () => {
  const primaryFontWeight: number = 600;
  const textColor: string = "#2C191F";
  // const borderColor: string = "2px solid black";
  // const borderRadius: string = "10px";
  // const imageWidth: string = "200px";
  // const flex = {
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  // };

  return (
    <Box>
      <Box
        as="section"
        py="1rem"
        px="3rem"
        bgGradient="linear-gradient(270deg, #DC7F9B 0%, #E0B7B7 50.62%, #FDECF3 100%)">
        <Flex fontFamily="inherit" justifyContent="space-between" wrap="wrap">
          <CircularProgress value={60} color="#DC7F9B" size="130px">
            <CircularProgressLabel fontWeight={700} color={textColor}>
              60%
            </CircularProgressLabel>
          </CircularProgress>
          <Flex flexDir="column" width="50%" gap="10px" textColor="#492A34CC">
            <Box as="h4" textAlign="center">
              Fun Fact
            </Box>
            <Box as="p">
              Did you know that 60% of the students in the higher institutions
              feels a certain pressure weeks building up to the result’s
              readiness?
            </Box>
          </Flex>
        </Flex>
      </Box>
      <Box
        maxW="1400px"
        m="0 auto"
        fontFamily="inherit"
        fontWeight={primaryFontWeight}>
        <Offer />
        <Faqs />
      </Box>
    </Box>
  );
};

export default Body;
