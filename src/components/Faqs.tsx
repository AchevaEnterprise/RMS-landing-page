import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
} from "@chakra-ui/react";
const Faqs = () => {
  const accordionObj = {
    flex: 1,
    py: "1rem",
    fontWeight: 500,
    fontSize: "1.2rem",
    textColor: "#091518",
  };
  const accordionPanel = {
    pb: 4,
    fontWeight: 300,
    textColor: "#091518",
  };

  return (
    <Box my="5rem" textColor="#091518">
      <Heading
        my="2rem"
        as="h2"
        fontWeight="600"
        fontSize={{
          base: "1.5rem",
          lg: "2rem",
        }}
        py=".4rem"
        textAlign="center">
        Frequently asked questions(FAQs)
      </Heading>
      <Accordion allowToggle bgColor="#F2F2F2">
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" {...accordionObj} textAlign="left">
                How can I access my results?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel {...accordionPanel}>
            Navigate to the results and select a sememster of your chloice in
            that academic year. Clock to view. It’s mazing, right!
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" {...accordionObj} textAlign="left">
                Can I access historical data on my results for research or
                personal reference?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel {...accordionPanel}>Yes you can!</AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" {...accordionObj} textAlign="left">
                How do I get my tranacripts?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel {...accordionPanel}>
            Login into your account, access your dashboard, go to transcripts
            and select your preferred academic year and click on download
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" {...accordionObj} textAlign="left">
                Can I pay my departmental dues? How?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel {...accordionPanel}>
            Payment of departmental dues is simple. Login into your account,from
            your dashboard access your Payments and follow the instructions.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" {...accordionObj} textAlign="left">
                Are all lecturers registered on this platform?{" "}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel {...accordionPanel}>
            No. Only level course adcisers, course coordinators, the Head of
            Department, and the Dean.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default Faqs;
