import Head from 'next/head'
import Navbar from '../navbar'
// includes things on each pg 

import { Container, Flex, Box } from '@chakra-ui/react'
const Main = ({ children, router }) => {
    return (
        <Flex as="main">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title> Sydney - website </title>
            </Head>
            <Box>
                {children}
            </Box>
        <Navbar />
        </Flex>
    )
}

export default Main