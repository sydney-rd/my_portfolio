import React from 'react'
import { Box, Spacer } from '@chakra-ui/react'
import Link from 'next/link'

export default function Navbar({ tintColor }) {
  const navBarStyle = {
    color: tintColor,
    fontFamily: 'Ailerons',
    fontSize: '2rem',
    whiteSpace: 'pre',
    WebkitTextStroke: `1px ${tintColor}`,
    transition: 'color 0.3s',
    fontSize: '.7rem',
    fontWeight: 'bold',
    fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
    filter: 'brightness(150%)'
  }

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
          <Link className="navBar" href="/about" style={navBarStyle}>
            ABOUT
          </Link>
        </Box>
      </Box>
      <Spacer />
      <Box p="1">
        <Box transform="rotate(90deg)" whiteSpace="pre">
          <Link className="navBar" href="/projectPage" style={navBarStyle}>
            PROJECTS
          </Link>
        </Box>
      </Box>
      <Spacer />
      <Box p="3" pt="6">
        <Box
          className="navBar"
          transform="rotate(90deg)"
          whiteSpace="pre"
          style={navBarStyle}
        >
          RESUME
        </Box>
      </Box>
      <Spacer />
    </Box>
  )
}
