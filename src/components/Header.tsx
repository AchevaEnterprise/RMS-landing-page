import {
  Box,
  Flex,
  LinkBox,
  Link,
  ButtonGroup,
  Button,
  Text,
} from "@chakra-ui/react";
import bgImage from "../Images/bg.png";

const Header = () => {
  const textColor: string = "#2C191F";

  const primaryFontWeight: number = 600;
  const primaryLineheight: number = 2.06;
  const borderWidth: string = "2px";
  const secondaryHeaderColor: string = "#37262ABF";
  const buttonBgColor: string = "#F9F1F1";

  const topRightButoonStyles = {
    fontWeight: primaryFontWeight,
    lineHeight: primaryLineheight,
    color: textColor,
  };

  const flex = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const buttonBg = {
    bgColor: buttonBgColor,
    px: "8px",
    py: "5px",
    borderWidth: borderWidth,
    borderRadius: "10px",
  };

  return (
    <Box
      h="75vh"
      backgroundImage={`url(${bgImage})`}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover">
      <Flex justifyContent="space-between" alignItems="center" px="1rem">
        <Box>
          <Text
            textDecorationLine="overline"
            textDecorationColor={textColor}
            textDecorationThickness=".05"
            textDecorationStyle="solid"
            as="h1"
            fontStyle="revert-layer"
            fontWeight="900"
            letterSpacing={9}
            fontSize="2.2rem"
            fontFamily="body"
            w="auto">
            RMS
          </Text>
        </Box>
        <LinkBox display="flex" gap="4rem">
          <Link>Transcript</Link>
          <Link>Dashboard</Link>
          <Link>Results</Link>
        </LinkBox>
        <Box>
          <ButtonGroup color={textColor} {...flex}>
            <Button
              {...topRightButoonStyles}
              border="none"
              bg="none"
              padding="8px">
              Login
            </Button>
            <Button {...topRightButoonStyles} {...buttonBg} variant="outline">
              Sign Up
            </Button>
          </ButtonGroup>
        </Box>
      </Flex>
      <Flex
        w="40%"
        m="0 auto"
        flexDir="column"
        h="100%"
        justifyContent="center"
        gap="2rem">
        <Text
          textAlign="center"
          as="h2"
          color={textColor}
          fontSize="2rem"
          fontWeight={900}
          lineHeight={2.0}>
          Keep tabs on all your results from the comfort of home
        </Text>
        <Text
          textAlign="center"
          as="h4"
          color={secondaryHeaderColor}
          fontSize="1.5rem"
          fontWeight={500}
          lineHeight={1.7}>
          Enables all parties involved to manage results with <br /> what is fat
          proving an almost seamless approach
        </Text>
        <ButtonGroup {...flex} gap="1rem">
          <Button {...topRightButoonStyles} {...buttonBg} bgColor="none">
            Request a Demo
          </Button>
          <Button
            {...topRightButoonStyles}
            {...buttonBg}
            bgColor={buttonBgColor}>
            Create an account
          </Button>
        </ButtonGroup>
      </Flex>
    </Box>
  );
};

export default Header;
