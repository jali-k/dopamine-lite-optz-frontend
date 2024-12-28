import { Heading, Text, Container, VStack } from '@chakra-ui/react';

export default function HomePage() {
  return (
<>

    <Container maxW="container.xl" py={20} bg={'#cdf7d6'}>
      <VStack gap={6}>
        <Heading
          fontSize={{ base: '3xl', md: '5xl' }}
          color="#2d3748"
          textAlign="center"
        >
          Hurry up! Start your Learning
        </Heading>
        <Text
          fontSize={{ base: 'lg', md: 'xl' }}
          color="gray.600"
          textAlign="center"
        >
          Explore our comprehensive biology lessons and interactive materials
        </Text>
      </VStack>
    </Container></>
  );
}