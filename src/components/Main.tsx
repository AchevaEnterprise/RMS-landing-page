import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import { Box } from "@chakra-ui/react";
import "@fontsource/rubik";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";
const Main = () => {
  const bgColor: string = "#F9F1F1";
  const textColor: string = "#2C191F";
  const fontSize: string = "1.2rem";
  const primaryFontWeight: number = 500;
  const primaryLineheight: number = 1.5;

  const scrollRef = useRef(null);
  const options = {
    smooth: true,
  };
  return (
    <LocomotiveScrollProvider options={options} containerRef={scrollRef}>
      <Box
        bgColor={bgColor}
        textColor={textColor}
        fontSize={fontSize}
        fontWeight={primaryFontWeight}
        lineHeight={primaryLineheight}
        data-scroll-container
        ref={scrollRef}>
        <Header />
        <Body />
        <Footer />
      </Box>
    </LocomotiveScrollProvider>
  );
};

export default Main;
