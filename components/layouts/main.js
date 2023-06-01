import Head from 'next/head'
import Navbar from '../navbar'
// includes things on each pg 

import { Container, Flex } from '@chakra-ui/react'
const Main = ({ children, router }) => {
    return (
        <Flex as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title> Sydney - website </title>
            </Head>
            <Container maxW="container.lg" pt={14}>
                {children}
            </Container>
        <Navbar />
        </Flex>
    )
}

export default Main