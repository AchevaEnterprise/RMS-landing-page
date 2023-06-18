import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import image1 from "../Images/attractive.jpg";
import image2 from "../Images/smile-1.jpg";
import image3 from "../Images/smile-2.jpg";

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
      h="60%"
      bg="blue.200"
      w="30%"
      gap="2rem"
      alignItems="center"
      justifyContent="center">
      <Flex flexDir="column" textAlign="center">
        <Image
          src={image}
          alt="attractive"
          w="250px"
          // h="200px"
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
  return (
    <Box as="section" my="1rem">
      <Heading textAlign="center">What People Saya About Us</Heading>
      <Flex
        bg="teal.900"
        h="70vh"
        w="200vw"
        my="1rem"
        borderRadius="20px"
        alignItems="center"
        px="5rem">
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
      </Flex>
    </Box>
  );
};

export default Testimonials;
