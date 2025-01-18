import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  HStack,
  VStack,
} from "@chakra-ui/react";
import PlantImage from "../styles/Plant.png";

const HomePage = () => {
  return (
    <Box bg="#F0F0F0" minHeight="4484px" minWidth="1440px" position="relative" paddingTop="2.5rem">
      {/* Hero Section */}
      <Flex
        w="89.61rem"
        h="52.57rem"
        position="relative" 
        bg="#F9F7F7"
        borderRadius="2.48rem"  
        zIndex={1}
        marginLeft="2.5rem"
      >
        <VStack
          padding={0}
          align="start"
          flex="1"
          width="33.59rem"
          height="19.77rem"
          marginLeft="4.82rem"
          position="relative"
          zIndex={2}
        >
          <Heading
            margin="0"
            size="2xl"
            fontFamily="Bricolage Grotesque"
            textAlign="left"
            zIndex={10}
          >
            <Text
              fontWeight="600"
              fontSize="89.06px"
              lineHeight="106.88px"
              color="#000000"
            >
              Discover the Wonder of
            </Text>
            <Text
              color="#387259"
              fontFamily="Bricolage Grotesque"
              fontWeight="600"
              fontSize="106px"
              lineHeight="6.25rem"
            >
              Biology
            </Text>
          </Heading>

          <Text fontSize="lg" color="gray.600">
            Interactive lessons and resources to make learning biology engaging and effective.
          </Text>
          <HStack>
            <Button colorScheme="yellow" size="lg">
              Start Learning
            </Button>
            <Button size="lg">Browse Courses</Button>
          </HStack>
        </VStack>

        <Image
          src={PlantImage}
          alt="Plant illustration"
          boxSize="44.4375rem"
        />
      </Flex>
    </Box>
  );
};

export default HomePage;
