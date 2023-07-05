import {
  Box,
  CircularProgress,
  CircularProgressLabel,
  Flex,
} from "@chakra-ui/react";
import Offer from "./Offer";
import Faqs from "./Faqs";
import Testimonials from "./Testimonials";
const Body = () => {
  const primaryFontWeight: number = 600;
  const textColor: string = "#2C191F";

  return (
    <Box overflow="hidden">
      <Box as="section" py="1rem" px="3rem" bgColor="#F2F2F2">
        <Flex
          gap="2rem"
          fontFamily="inherit"
          justifyContent={{
            lg: "space-between",
          }}
          alignItems="center"
          flexDir={{
            base: "column-reverse",
            lg: "row",
          }}>
          <CircularProgress value={60} color="#3D6E7B" size="130px">
            <CircularProgressLabel fontWeight={700} color={textColor}>
              60%
            </CircularProgressLabel>
          </CircularProgress>
          <Flex
            flexDir="column"
            width={{
              base: "100%",
              lg: "50%",
            }}
            gap="1rem"
            textColor="#492A34CC">
            <Box
              as="h4"
              textAlign="center"
              textDecor="underline"
              fontWeight="600">
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
        <Testimonials />
      </Box>
    </Box>
  );
};

export default Body;
