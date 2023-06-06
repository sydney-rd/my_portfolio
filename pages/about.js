import React from 'react';
import { Box, Link, VStack } from '@chakra-ui/react';

export default function About() {
  return (
    <Box display="flex">
      <Box width="20%" padding="4" backgroundColor="gray.200">
        {/* Your links for the left side of the page */}
        <VStack spacing="2" alignItems="flex-start">
          <Link href="https://www.linkedin.com/">LinkedIn</Link>
          <Link href="https://github.com/">GitHub</Link>
          <Link href="mailto:your-email@example.com">Email</Link>
          <Link href="tel:+1234567890">Phone Number</Link>
        </VStack>
      </Box>
      <Box flex="2">
        {/* Your content for the right side of the page */}
        <div>
          Events &rarr; Fullstack Developer
        </div>
      </Box>
    </Box>
  );
}
