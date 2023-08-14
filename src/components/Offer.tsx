import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
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
    <Box textColor="#091518" my="2rem">
      <Heading
        as="h1"
        textAlign="center"
        color="inherit"
        fontWeight={600}
        fontSize={{
          base: "1.5rem",
          lg: "2rem",
        }}>
        What we offer
      </Heading>

      <Flex
        gap="1rem"
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
        gap="1rem"
        alignItems={{
          base: "center",
          lg: "space-between",
        }}
        justifyContent="space-between"
        flexDir={{
          base: "column",
          lg: "row-reverse",
        }}>
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

        <Flex
          flexDir="column"
          width={{
            base: "70%",
            lg: "50%",
          }}
          data-aos="fade-left">
          <Text as="h2" color="#36819A">
            Payment Options:
          </Text>
          <Text as="p">
            Start your journey with RMS, open an account in your required
            section and enjoy the journey.
          </Text>
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
        gap="1rem"
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
          src={happy}
          alt="a happy person"
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
            Transcript:
          </Text>
          <Text as="p">
            Easily access your transcript and print out as pdf.
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
        gap="1rem"
        alignItems={{
          base: "center",
          lg: "space-between",
        }}
        justifyContent="space-between"
        flexDir={{
          base: "column",
          lg: "row-reverse",
        }}>
        <Image
          src={aluraRemote}
          alt="Renote-researcher"
          data-aos="fade-left"
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
            Error Reduction:
          </Text>
          <Text as="p">
            Our system reduces errors to its barest minimum as grades are
            computed on the platform.
          </Text>
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
        gap="1rem"
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
          src={phone}
          alt="phone Icon"
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
            Chatting features:
          </Text>
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
