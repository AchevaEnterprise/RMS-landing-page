import { Flex, Heading, Image, Text } from "@chakra-ui/react";
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
      p="1rem"
      flex={1}
      flexDir="column"
      w="100%"
      gap="2rem"
      alignItems="center"
      justifyContent="center">
      <Flex flexDir="column" textAlign="center">
        <Image
          src={image}
          alt="attractive"
          w="200px"
          //  h="180px"
          borderRadius="40px"
        />
        <Text fontWeight="500" fontSize="1.2rem">
          {name}
        </Text>
        <Text fontSize=".8rem" fontWeight="300">
          {caption}
        </Text>
      </Flex>
      <Text w="60%" fontSize="1.2rem" fontWeight="400">
        {content}
      </Text>
    </Flex>
  );
};

const Testimonials_Mobile = () => {
  return (
    <Flex flexDir="column" gap="1.5rem" my="3rem">
      <Heading
        textAlign="center"
        fontWeight={600}
        fontSize={{
          base: "1.5rem",
          lg: "2rem",
        }}>
        What People Say About Us
      </Heading>

      <TestimonialCard
        image={image1}
        name=" Josephine Simeon"
        caption=" 300L Course Rep"
        content="  I have used the RMS and it has helped me alot, it makes it easy for
            me to see and understand my results. I have used the RMS and it has
            helped me alot, it makes it easy for me to see and understand my
          "
      />
      <TestimonialCard
        image={image2}
        name=" Davis Moyes"
        caption=" 400L Course Rep"
        content="  I have used the RMS and it has helped me alot, it makes it easy for
            me to see and understand my results. I have used the RMS and it has
            helped me alot, it makes it easy for me to see and understand my
            "
      />
      <TestimonialCard
        image={image3}
        name=" Favour Chris"
        caption=" 500L Course Rep"
        content="  I have used the RMS and it has helped me alot, it makes it easy for
            me to see and understand my results. I have used the RMS and it has
            helped me alot, it makes it easy for me to see and understand my
           "
      />
    </Flex>
  );
};

export default Testimonials_Mobile;
