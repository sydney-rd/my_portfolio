import { Box, Spacer } from "@chakra-ui/react";
import Link from "next/link";

export default function Navbar() {
  return (
    <Box
      position="fixed"
      top="10"
      right="0"
      h="50vh"
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="flex-end"
      paddingRight="4"
        zIndex="2"
    >
      <Spacer />
      <Box p="4">
        <Box transform="rotate(90deg)" whiteSpace="pre">
          <Link className="navBar" href="/about">ABOUT</Link>
        </Box>
      </Box>
      <Spacer />
      <Box p="1">
        <Box transform="rotate(90deg)" whiteSpace="pre">
          <Link className="navBar" href="/projectPage">PROJECTS</Link>
        </Box>
      </Box>
      <Spacer />
      <Box p="3" pt="4">
        <Box className="navBar" transform="rotate(90deg)" whiteSpace="pre">
          RESUME
        </Box>
      </Box>
      <Spacer />
    </Box>
  );
}
