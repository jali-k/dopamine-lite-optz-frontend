// src/pages/LoginPage.tsx
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Authenticator, ThemeProvider } from '@aws-amplify/ui-react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../hooks/redux';
import '@aws-amplify/ui-react/styles.css';
import { theme } from '@/themes/amplifytheme';

export default function LoginPage() {
  const user = useAppSelector((state) => state.user);

  if (user.isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <Box
    background={'#cdf7d6'}
      minH="100vh"
    >

      <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }} position="relative">
        <VStack gap={6} textAlign="center" mb={8}>
          <Heading
            size="2xl"
          color={'#2d3748'}
            fontWeight="extrabold"
          >
            Dopamine Lite
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Your journey to mastering biology starts here
          </Text>
        </VStack>
        
        <Box
          boxShadow={{ base: 'none', sm: 'md' }}
          borderRadius={{ base: 'none', sm: 'xl' }}
          bg="white"
        >
          <ThemeProvider theme={theme} >
            <Authenticator.Provider>
              <Authenticator socialProviders={['google']} />
            </Authenticator.Provider>
          </ThemeProvider>
        </Box>
      </Container>
    </Box>
  );
}