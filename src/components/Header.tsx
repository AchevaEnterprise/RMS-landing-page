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
  LinkBox,
  Heading,
} from "@chakra-ui/react";
import bgImage from "../Images/HeaderImage.svg";
import { HamburgerIcon } from "@chakra-ui/icons";

const Header = () => {
  const primaryFontWeight: number = 600;
  const primaryLineheight: number = 2.06;

  const topRightButoonStyles = {
    fontWeight: primaryFontWeight,
    lineHeight: primaryLineheight,
  };

  const flex = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const LoginButton = () => <Link {...topRightButoonStyles}>Login</Link>;

  const SignUpButton = () => (
    <Link variant="outline" {...topRightButoonStyles}>
      Sign Up
    </Link>
  );

  return (
    <Box
      h={{ base: "85vh", lg: "75vh" }}
      bgImage={bgImage}
      color="#FCFCFC"
      bgSize="cover"
      bgRepeat="no-repeat"
      bgPos="center">
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
        <Box as="nav">
          <LinkBox
            display={{ base: "none", md: "flex" }}
            gap="3rem"
            {...topRightButoonStyles}>
            <Link>Home</Link>
            <Link>About</Link>
            <Link>Blog</Link>
            <Link>FAQ's</Link>
          </LinkBox>
        </Box>
        <Box display={{ base: "none", md: "block" }}>
          <ButtonGroup {...flex} gap="1rem">
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
            <MenuList>
              <MenuItem>
                <Link>Home</Link>
              </MenuItem>
              <MenuItem>
                <Link>About</Link>
              </MenuItem>
              <MenuItem>
                <Link>Blog</Link>
              </MenuItem>
              <MenuItem>
                <Link>FAQ's</Link>
              </MenuItem>
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
        px="2rem"
        justifyContent="center"
        flexDir="column"
        alignItems="left"
        width="45%"
        height="100%"
        gap="4rem">
        <Flex flexDir="column" gap="1.4rem">
          <Heading as="h1" fontWeight={700} fontSize="3rem">
            Keep tabs on all your results from the comfort of your home
          </Heading>
          <Heading as="h3" fontSize="1.2rem" fontWeight={500}>
            Enables all parties to manage results with what is fast proving an
            almost seamless approach
          </Heading>
        </Flex>

        <Flex
          wrap="wrap"
          gap="1rem"
          textAlign="center"
          transition="transform 0.2s ease-in-out">
          <Button
            borderRadius="16px"
            bgColor="#EDF2F1"
            color="#36819A"
            variant="ghost"
            colorScheme="#DC7F9B"
            p="12px 28px"
            _active={{ transform: "scale(1.1)" }}>
            View MVP
          </Button>
          <Button
            borderRadius="16px"
            bgColor="#36819A"
            color="#EDF2F1"
            variant="ghost"
            colorScheme="#DC7F9B"
            p="12px 28px"
            _active={{ transform: "scale(1.1)" }}>
            Create Account
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
