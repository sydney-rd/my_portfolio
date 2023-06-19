import React, { useEffect, useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import Layout from '../components/layouts/main'
import LoadingScreen from '../components/loadingScreen'
import '../styles.css'

const Website = ({ Component, pageProps }) => {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleComplete = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000); // Adjust the timeout duration as needed (in milliseconds)
    };

    router.events.on('routeChangeComplete', handleComplete)

    return () => {
      router.events.off('routeChangeComplete', handleComplete)
    }
  }, [])



  return (
    <ChakraProvider>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <Layout router={router}>
          <Component {...pageProps} />
        </Layout>
      )}
    </ChakraProvider>
  )
}

export default Website
