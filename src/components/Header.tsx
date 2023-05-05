import {
  Box,
  Flex,
  ButtonGroup,
  Button,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Link,
} from "@chakra-ui/react";
import bgImage from "../Images/bg.png";
import { HamburgerIcon } from "@chakra-ui/icons";

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
  const buttonStyles = {
    ...topRightButoonStyles,
    border: "none",
    bg: "none",
    padding: "8px",
  };

  const LoginButton = () => <Link {...buttonStyles}>Login</Link>;

  const SignUpButton = () => (
    <Link {...buttonStyles} variant="outline">
      Sign Up
    </Link>
  );

  return (
    <Box
      h={{ base: "85vh", lg: "75vh" }}
      backgroundImage={`url(${bgImage})`}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover">
      <Flex justifyContent="space-between" alignItems="center" px="1rem">
        <Box>
          <Text
            as="h1"
            fontStyle="revert-layer"
            fontWeight="700"
            letterSpacing={4}
            fontSize="2.2rem"
            fontFamily="inherit"
            w="auto">
            RMS
          </Text>
        </Box>

        <Box display={{ base: "none", md: "block" }}>
          <ButtonGroup color={textColor} {...flex}>
            <LoginButton />
            <SignUpButton />
          </ButtonGroup>
        </Box>

        <Box display={{ base: "block", md: "none" }}>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
            />
            <MenuList color={textColor}>
              <MenuItem>
                <LoginButton />
              </MenuItem>
              <MenuItem>
                <SignUpButton />
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
      <Flex
        w={{
          base: "80%",
          md: "50%",
        }}
        m="0 auto"
        flexDir="column"
        h="100%"
        justifyContent="center"
        gap="2rem">
        <Text
          textAlign="center"
          as="h2"
          color={textColor}
          fontSize={{
            base: "1.4rem",
            md: "2rem",
          }}
          fontWeight={{
            base: 700,
            md: 900,
          }}
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

        <Button
          {...topRightButoonStyles}
          {...buttonBg}
          bgColor="none"
          variant="ghost">
          Create Account
        </Button>
      </Flex>
    </Box>
  );
};

export default Header;
