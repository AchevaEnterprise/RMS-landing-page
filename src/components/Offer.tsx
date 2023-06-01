import { useEffect } from "react";
import AOS from "aos";
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

const Offer = () => {
  useEffect(() => {
    AOS.init();
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
      <Flex alignItems="center" justifyContent="space-between">
        <Flex data-aos="fade-up">
          <Image src={alura} alt="alurasearch" />
        </Flex>
        <Flex flexDir="column" width="50%">
          <Text as="h2">Account Options</Text>
          <Text as="p">
            Pay departmental dues with absolute ease and keep track of the
            financial records online and offline.
          </Text>
        </Flex>
      </Flex>
      <Box></Box>
      <Image src={vector1} alt="direction 1" m="0 auto" />
      <Flex alignItems="center" justifyContent="space-between">
        <Flex flexDir="column" width="50%">
          <Text as="h2">Payment Options</Text>
          <Text as="p">
            Start your journey with RMS, open an account in your required
            section and enjoy the journey.
          </Text>
        </Flex>
        <Flex>
          <Image src={creditCard} alt="credit-card" />
        </Flex>
      </Flex>
      <Image src={vector2} alt="direction 2" m="0 auto" />
      <Flex alignItems="center" justifyContent="space-between">
        <Flex>
          <Image src={happy} alt="transcript-happy" />
        </Flex>
        <Flex flexDir="column" width="50%">
          <Text as="h2">Transcript</Text>
          <Text as="p">
            Easily access your transcript and print out in pdf format.
          </Text>
        </Flex>
      </Flex>
      <Image src={vector3} alt="direction 3" m="0 auto" />
      <Flex alignItems="center" justifyContent="space-between">
        <Flex flexDir="column" width="50%">
          <Text as="h2">Error Reduction</Text>
          <Text as="p">
            Our system reduces errors to its barest minimum as grades are
            computed on the platform.
          </Text>
        </Flex>
        <Flex>
          <Image src={aluraRemote} alt="alurasearch" />
        </Flex>
      </Flex>
      <Image src={vector4} alt="direction 4" m="0 auto" />
      <Flex alignItems="center" justifyContent="space-between">
        <Flex>
          <Image src={phone} alt="alurasearch" />
        </Flex>
        <Flex flexDir="column" width="50%">
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
