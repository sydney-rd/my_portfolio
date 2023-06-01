import { Box } from "@chakra-ui/react";
import Link from "next/link";

// position fixed
export default function Navbar() {
  return (
    <Box w="60" h="100vh">
      <Box p="4">
        <Link href="/about">ABOUT</Link>
      </Box>
      <Box p="4">
        <Link href="/projectPage">PROJECTS</Link>
      </Box>
      <Box p="4">RESUME</Box>
    </Box>
  );
}
