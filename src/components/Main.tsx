import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import { Box } from "@chakra-ui/react";
import "@fontsource/rubik";

const Main = () => {
  const bgColor: string = "#FCFCFC";
  const textColor: string = "#091518";
  const fontSize: string = "1.2rem";
  const primaryFontWeight: number = 300;
  const primaryLineheight: number = 1.5;

  return (
    <Box
      className="all"
      bgColor={bgColor}
      textColor={textColor}
      fontSize={fontSize}
      fontWeight={primaryFontWeight}
      lineHeight={primaryLineheight}>
      <Header />
      <Body />
      <Footer />
    </Box>
  );
};

export default Main;
