import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import image1 from "../Images/attractive.jpg";
import image2 from "../Images/smile-1.jpg";
import image3 from "../Images/smile-2.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

interface TestimonialCardProps {
  image: string;
  name: string;
  caption: string;
  content: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  image,
  name,
  caption,
  content,
}) => {
  return (
    <Flex
      h="50%"
      bg="blue.200"
      w="70%"
      gap="2rem"
      alignItems="center"
      justifyContent="center">
      <Flex flexDir="column" textAlign="center">
        <Image
          src={image}
          alt="attractive"
          w="250px"
          //  h="180px"
          borderRadius="40px"
        />
        <Text fontWeight="800" fontSize="1.6rem">
          {name}
        </Text>
        <Text fontSize="1rem" fontWeight="500">
          {caption}
        </Text>
      </Flex>
      <Text w="60%">{content}</Text>
    </Flex>
  );
};

const Testimonials = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-200vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);
  return (
    <Box as="section" my="1rem" overflowX="hidden">
      <Heading textAlign="center">What People Say About Us</Heading>
      <Box ref={triggerRef}>
        <Flex
          ref={sectionRef}
          gap="3rem"
          bg="teal.900"
          h="100vh"
          w="300vw"
          my="1rem"
          borderRadius="20px"
          alignItems="center"
          justifyContent="center"
          px="5rem"
          position="relative">
          <TestimonialCard
            image={image1}
            name=" Josephine Simeon"
            caption=" 300L Course Rep"
            content="  I have used the RMS and it has helped me alot, it makes it easy for
            me to see and understand my results. I have used the RMS and it has
            helped me alot, it makes it easy for me to see and understand my
            results. I have used the RMS and it has helped me alot, it makes it
            my results. results. I have used the RMS and it has helped me alot,
            it makes it my results."
          />
          <TestimonialCard
            image={image2}
            name=" Davis Moyes"
            caption=" 400L Course Rep"
            content="  I have used the RMS and it has helped me alot, it makes it easy for
            me to see and understand my results. I have used the RMS and it has
            helped me alot, it makes it easy for me to see and understand my
            results. I have used the RMS and it has helped me alot, it makes it
            my results. results. I have used the RMS and it has helped me alot,
            it makes it my results."
          />
          <TestimonialCard
            image={image3}
            name=" Favour Chris"
            caption=" 500L Course Rep"
            content="  I have used the RMS and it has helped me alot, it makes it easy for
            me to see and understand my results. I have used the RMS and it has
            helped me alot, it makes it easy for me to see and understand my
            results. I have used the RMS and it has helped me alot, it makes it
            my results. results. I have used the RMS and it has helped me alot,
            it makes it my results."
          />
        </Flex>
      </Box>
    </Box>
  );
};

export default Testimonials;
