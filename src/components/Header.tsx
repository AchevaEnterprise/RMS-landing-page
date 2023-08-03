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
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import HeaderSVG from "../Images/education.svg";

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

  const LoginButton = () => (
    <Link
      {...topRightButoonStyles}
      href="https://final-year-project-rms.vercel.app/">
      Login
    </Link>
  );

  const SignUpButton = () => (
    <Link
      variant="outline"
      {...topRightButoonStyles}
      href="https://final-year-project-rms.vercel.app/">
      Sign Up
    </Link>
  );

  return (
    <Box
      h={{ base: "70vh", lg: "80vh" }}
      bgImage="linear-gradient(90.67deg, #3E6F7C 0%, #2B6777 104.03%)"
      color="#FCFCFC"
      bgSize="cover"
      bgRepeat="no-repeat"
      bgPos="center">
      <Flex
        justifyContent="space-between"
        alignItems="center"
        px="1rem"
        py=".5rem">
        <Box>
          <Text
            as="h1"
            fontStyle="revert-layer"
            fontWeight="700"
            letterSpacing={4}
            fontSize={{ base: "1.3rem", lg: "2.2rem" }}
            fontFamily="inherit"
            w="auto">
            RMS
          </Text>
        </Box>
        <Box as="nav">
          <LinkBox
            display={{ base: "none", lg: "flex" }}
            gap="3rem"
            {...topRightButoonStyles}>
            <Link>Home</Link>
            <Link>About</Link>
            <Link>Blog</Link>
            <Link>FAQ's</Link>
          </LinkBox>
        </Box>
        <Box display={{ base: "none", lg: "flex" }}>
          <ButtonGroup {...flex} gap="1rem">
            <LoginButton />
            <SignUpButton />
          </ButtonGroup>
        </Box>

        <Box display={{ base: "flex", lg: "none" }}>
          <Menu>
            <MenuButton
              colorScheme="green.900"
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
            />
            <MenuList bgColor="teal.700">
              <MenuItem bgColor="teal.900 ">
                <Link>Home</Link>
              </MenuItem>
              <MenuItem bgColor="teal.900">
                <Link>About</Link>
              </MenuItem>
              <MenuItem bgColor="teal.900">
                <Link>Blog</Link>
              </MenuItem>
              <MenuItem bgColor="teal.900">
                <Link>FAQ's</Link>
              </MenuItem>
              <MenuItem bgColor="teal.900">
                <LoginButton />
              </MenuItem>
              <MenuItem bgColor="teal.900">
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
        alignItems={{
          base: "left",
          lg: "left",
        }}
        width={{
          base: "100%",
          lg: "50%",
        }}
        height="100%"
        gap={{
          base: "2rem",
          lg: "4rem",
        }}>
        <Flex flexDir="column" gap="1.7rem">
          <Heading
            as="h1"
            fontWeight={{
              base: 500,
              lg: 700,
            }}
            fontSize={{
              base: "1.6rem",
              md: "2rem",
              lg: "3rem",
            }}>
            Keep tabs on all your results from the comfort of your home
          </Heading>
          <Heading
            as="h3"
            fontSize={{
              base: ".9rem",
              md: "1.2rem",
            }}
            fontWeight={{
              base: 300,
              md: 500,
            }}>
            Enables all parties to manage results with what is fast proving an
            almost seamless approach
          </Heading>
        </Flex>
        <Flex
          wrap="wrap"
          gap="1rem"
          justifyContent={{
            base: "center",
            lg: "left",
          }}
          align="flex-end"
          textAlign="left"
          transition="transform 0.2s ease-in-out"
          w="100%">
          <Link href="https://the-grader.netlify.app/" isExternal>
            <Button
              borderRadius="16px"
              bgColor="#EDF2F1"
              color="#36819A"
              variant="ghost"
              colorScheme="#DC7F9B"
              p={{
                base: "8px 18px",
                lg: "12px 28px",
              }}
              _active={{ transform: "scale(1.1)" }}
              _hover={{
                // textColor: "#EDF2F1",
                bgColor: "#c9c9c7",
              }}>
              View MVP
            </Button>
          </Link>
          <Link href="https://final-year-project-rms.vercel.app/ isExternal">
            <Button
              borderRadius="16px"
              bgColor="#36819A"
              color="#EDF2F1"
              variant="ghost"
              colorScheme="#DC7F9B"
              p={{
                base: "8px 18px",
                lg: "12px 28px",
              }}
              _active={{ transform: "scale(1.1)" }}>
              Create Account
            </Button>
          </Link>
        </Flex>
        <Box
          pos="absolute"
          right="5%"
          w="500px"
          display={{
            base: "none",
            lg: "block",
          }}>
          <Image src={HeaderSVG} />
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
