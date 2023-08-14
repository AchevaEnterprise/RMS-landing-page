import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
} from "@chakra-ui/react";
const Faqs = () => {
  const accordionObj = {
    flex: 1,
    py: "1rem",
    fontWeight: 600,
    fontSize: "1.2rem",
    textColor: "#091518",
  };
  const accordionPanel = {
    pb: 4,
    fontWeight: 400,
    textColor: "#091518",
  };

  return (
    <Box my="2rem" textColor="#091518">
      <Text
        my="2rem"
        as="h2"
        fontWeight={600}
        fontSize={{
          base: "1.5rem",
          lg: "2rem",
        }}
        py=".4rem"
        textAlign="center">
        Frequently asked questions(FAQs)
      </Text>
      <Accordion allowToggle bgColor="#F2F2F2">
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" {...accordionObj} textAlign="left">
                Is this a trend?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel {...accordionPanel}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" {...accordionObj} textAlign="left">
                Is this a trend?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel {...accordionPanel}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" {...accordionObj} textAlign="left">
                Is this a trend?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel {...accordionPanel}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" {...accordionObj} textAlign="left">
                Is this a trend?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel {...accordionPanel}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" {...accordionObj} textAlign="left">
                Is this a trend?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel {...accordionPanel}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default Faqs;
