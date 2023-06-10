  import React from 'react'
  import { Box, VStack, Link } from  "@chakra-ui/react"
  
  export default function about() {
   
    return (
      <Box display="flex">
        <Box width="20%" padding="4" >
          {/* Your links for the left side of the page */}
          <VStack spacing="2" alignItems="flex-start">
            <Link href="https://www.linkedin.com/">LinkedIn</Link>
            <Link href="https://github.com/">GitHub</Link>
            <Link href="mailto:sydneydavid56@gmail.com">Email</Link>
          </VStack>
        </Box>
        <Box flex="2">
          Events &rarr; Fullstack Developer
        </Box>
      </Box>
    );
  }
  


// // test for three.js

// import { Box } from '@chakra-ui/react';
// import WebScene from '../three-scenes/WebScene';

// export default function About() {
//   return (
//     <Box direction="column" align="center" justify="center" h="100vh" w="100vw" overflow="hidden">
//       <WebScene />
//     </Box>
//   );
// }
