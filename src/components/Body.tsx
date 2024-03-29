import {
  Box,
  CircularProgress,
  CircularProgressLabel,
  Flex,
} from "@chakra-ui/react";
import Offer from "./Offer";
import Faqs from "./Faqs";
import Testimonials from "./Testimonials";
import TestimonialsMobile from "./TestimonialsMobile";
const Body = () => {
  const primaryFontWeight: number = 400;
  const textColor: string = "#2C191F";
  const colorText: string = "#091518";

  return (
    <Box overflow="hidden" textColor={colorText}>
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
            gap="1rem">
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
        px="2rem"
        fontFamily="inherit"
        fontWeight={primaryFontWeight}>
        <Offer />
        <Faqs />
        <Box
          display={{
            base: "none",
            lg: "flex",
          }}>
          <Testimonials />
        </Box>
        <Box
          display={{
            base: "flex",
            lg: "none",
          }}>
          <TestimonialsMobile />
        </Box>
      </Box>
    </Box>
  );
};

export default Body;
