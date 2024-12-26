import { Box, Flex } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  return (
    <Flex flexDirection="column" minH="100vh">
      <Navbar />
      <Box flex="1" bg="grey" w="100%" px={4} py={8}>
        <Outlet />
      </Box>
      <Footer />
    </Flex>
  );
}