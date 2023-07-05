import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import { Box, Flex, Image, Text } from "@chakra-ui/react";
import alura from "../Images/alura.png";
import aluraRemote from "../Images/aluraRemote.png";
import creditCard from "../Images/creditCard.png";
import happy from "../Images/happy.png";
import phone from "../Images/phone.png";
import vector1 from "../Images/vector1.png";
import vector2 from "../Images/vector2.png";
import vector3 from "../Images/vector3.png";
import vector4 from "../Images/vector4.png";

import { BiSolidChevronsDown } from "react-icons/bi";

const Offer = () => {
  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Box textColor="#492A34" my="2rem">
      <Text
        as="h1"
        textAlign="center"
        color="inherit"
        fontWeight={600}
        fontSize="2rem">
        What we offer
      </Text>
      <Flex
        alignItems={{
          base: "center",
          lg: "space-between",
        }}
        justifyContent="space-between"
        flexDir={{
          base: "column",
          lg: "row",
        }}>
        <Image
          src={alura}
          alt="alurasearch"
          data-aos="fade-right"
          width={{
            base: "300px",
            lg: "450px",
          }}
          h="auto"
        />

        <Flex
          flexDir="column"
          width={{
            base: "70%",
            lg: "50%",
          }}
          data-aos="fade-left">
          <Text as="h2" color="#36819A">
            Account Options:
          </Text>
          <Text as="p">
            Pay departmental dues with absolute ease and keep track of the
            financial records online and offline.
          </Text>
        </Flex>
      </Flex>
      <Box
        display={{
          base: "none",
          lg: "block",
        }}>
        <Image
          src={vector1}
          alt="direction 1"
          data-aos="fade-up-left"
          m="0 auto"
        />
      </Box>
      <Flex
        my="4rem"
        data-aos="fade-down"
        justifyContent="center"
        display={{
          base: "flex",
          lg: "none",
        }}>
        <BiSolidChevronsDown size="5rem" color="#36819A" />
      </Flex>
      <Flex
        alignItems={{
          base: "center",
          lg: "space-between",
        }}
        justifyContent="space-between"
        flexDir={{
          base: "column-reverse",
          lg: "row",
        }}
        data-aos="zoom-in-down"
        width={{
          base: "70%",
          lg: "50%",
        }}>
        <Text as="h2">Payment Options</Text>
        <Text as="p">
          Start your journey with RMS, open an account in your required section
          and enjoy the journey.
        </Text>

        <Flex>
          <Image
            src={creditCard}
            alt="credit-card"
            data-aos="zoom-in-left"
            width={{
              base: "300px",
              lg: "450px",
            }}
            h="auto"
          />
        </Flex>
      </Flex>
      <Box
        display={{
          base: "none",
          lg: "block",
        }}>
        <Image
          src={vector2}
          alt="direction 1"
          data-aos="fade-up-left"
          m="0 auto"
        />
      </Box>
      <Flex
        my="4rem"
        data-aos="fade-down"
        justifyContent="center"
        display={{
          base: "flex",
          lg: "none",
        }}>
        <BiSolidChevronsDown size="5rem" color="#36819A" />
      </Flex>
      <Flex
        alignItems={{
          base: "center",
          lg: "space-between",
        }}
        justifyContent="space-between"
        flexDir={{
          base: "column",
          lg: "row",
        }}>
        <Flex>
          <Image
            src={happy}
            alt="transcript-happy"
            data-aos="fade-right"
            width={{
              base: "300px",
              lg: "450px",
            }}
            h="auto"
          />
        </Flex>
        <Flex flexDir="column" width="50%" data-aos="fade-left">
          <Text as="h2">Transcript</Text>
          <Text as="p">
            Easily access your transcript and print out in pdf format.
          </Text>
        </Flex>
      </Flex>
      <Box
        display={{
          base: "none",
          lg: "block",
        }}>
        <Image
          src={vector3}
          alt="direction 1"
          data-aos="fade-up-left"
          m="0 auto"
        />
      </Box>
      <Flex
        my="4rem"
        data-aos="fade-down"
        justifyContent="center"
        display={{
          base: "flex",
          lg: "none",
        }}>
        <BiSolidChevronsDown size="5rem" color="#36819A" />
      </Flex>
      <Flex
        alignItems={{
          base: "center",
          lg: "space-between",
        }}
        justifyContent="space-between"
        flexDir={{
          base: "column",
          lg: "row",
        }}
        data-aos="fade-right">
        <Flex>
          <Text as="h2">Error Reduction</Text>
          <Text as="p">
            Our system reduces errors to its barest minimum as grades are
            computed on the platform.
          </Text>
        </Flex>
        <Flex>
          <Image
            src={aluraRemote}
            alt="remote-researcher"
            data-aos="fade-left"
            width={{
              base: "300px",
              lg: "450px",
            }}
            h="auto"
          />
        </Flex>
      </Flex>
      <Box
        display={{
          base: "none",
          lg: "block",
        }}>
        <Image
          src={vector4}
          alt="direction 1"
          data-aos="fade-up-left"
          m="0 auto"
        />
      </Box>
      <Flex
        my="4rem"
        data-aos="fade-down"
        justifyContent="center"
        display={{
          base: "flex",
          lg: "none",
        }}>
        <BiSolidChevronsDown size="5rem" color="#36819A" />
      </Flex>
      <Flex
        alignItems={{
          base: "center",
          lg: "space-between",
        }}
        justifyContent="space-between"
        flexDir={{
          base: "column",
          lg: "row",
        }}>
        <Flex>
          <Image
            src={phone}
            alt="phoneIcon"
            data-aos="fade-right"
            width={{
              base: "300px",
              lg: "450px",
            }}
            h="auto"
          />
        </Flex>
        <Flex flexDir="column" width="50%" data-aos="fade-left">
          <Text as="h2">Chatting features</Text>
          <Text as="p">
            With our platform, contact has been made easier as the RMS seeks to
            reduce stress and encourage on-the-go activities.
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Offer;
