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
} from "@chakra-ui/react";
//import bgImage from "../Images/Mesh.png";
import { HamburgerIcon } from "@chakra-ui/icons";

const Header = () => {
  const textColor: string = "#2C191F";

  const primaryFontWeight: number = 600;
  const primaryLineheight: number = 2.06;
  const secondaryHeaderColor: string = "#37262ABF";

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

  const LoginButton = () => <Link {...topRightButoonStyles}>Login</Link>;

  const SignUpButton = () => (
    <Link variant="outline" {...topRightButoonStyles}>
      Sign Up
    </Link>
  );

  return (
    <Box
      h={{ base: "85vh", lg: "75vh" }}
      //backgroundImage={bgImage}
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        px="1rem"
        zIndex={10}>
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
          <ButtonGroup color={textColor} {...flex} gap="1rem">
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
        {...flex}
        wrap="wrap"
        gap="1rem"
        textColor="#FDECF3"
        textAlign="center"
        transition="transform 0.2s ease-in-out">
        <Button
          bgColor="#FDECF3"
          color="#DC7F9B"
          variant="ghost"
          colorScheme="#DC7F9B"
          p="12px 28px"
          _active={{ transform: "scale(1.1)" }}>
          View MVP
        </Button>
        <Button
          bgColor="#DC7F9B"
          variant="ghost"
          colorScheme="#DC7F9B"
          p="12px 28px"
          _active={{ transform: "scale(1.1)" }}>
          Create Account
        </Button>
      </Flex>
    </Box>
  );
};

export default Header;
