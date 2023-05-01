import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import { Box } from "@chakra-ui/react";
import "@fontsource/rubik";

const Main = () => {
  const bgColor: string = "#F9F1F1";
  const textColor: string = "#2C191F";
  const fontSize: string = "1rem";
  const primaryFontWeight: number = 500;
  const primaryLineheight: number = 1.5;
  return (
    <Box>
      <Box
        bgColor={bgColor}
        textColor={textColor}
        fontSize={fontSize}
        fontWeight={primaryFontWeight}
        lineHeight={primaryLineheight}>
        <Header />
        <Body />
        <Footer />
      </Box>
    </Box>
  );
};

export default Main;
