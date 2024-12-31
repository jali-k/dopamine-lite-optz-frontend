import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Icon,
  Flex,
  HStack,
} from '@chakra-ui/react';
import { FaDna, FaLeaf, FaBrain, FaBook, FaMicroscope, FaUsers } from 'react-icons/fa';
import { DopamineLiteColors } from '@/themes/colors';
import { useNavigate } from 'react-router-dom';



export default function HomePage() {
  const navigator = useNavigate();
  const features = [
    {
      icon: FaDna,
      title: "Molecular Biology",
      description: "Explore DNA, RNA, and cellular processes"
    },
    {
      icon: FaLeaf,
      title: "Ecology & Environment",
      description: "Study ecosystems and environmental biology"
    },
    {
      icon: FaBrain,
      title: "Human Biology",
      description: "Learn about anatomy and physiology"
    }
  ];

  return (
    <>
    <Box>
      <Box bg={DopamineLiteColors.creamColor}>
        <Container maxW="container.xl" py={{ base: 12, md: 20 }}>
          <VStack gap={6} textAlign="center">
            <Heading
              as="h1"
              fontSize={{ base: "4xl", md: "6xl" }}
              color={DopamineLiteColors.greenColor}
              lineHeight="1.2"
              fontWeight="bold"
            >
              Discover the Wonder of Biology
            </Heading>
            <Text
              fontSize={{ base: "xl", md: "2xl" }}
              color="gray.600"
              maxW="container.md"
            >
              Interactive lessons and resources to make learning biology engaging and effective
            </Text>
            <Flex gap={4} mt={4}>
              <Button
                size="lg"
                bg={DopamineLiteColors.orangeColor}
                color="white"
                _hover={{ bg: "#e68200" }}
              >
                <HStack gap={2}>
                  <FaBook />
                  <Text>Start Learning</Text>
                </HStack>
              </Button>
              <Button
              onClick={()=>{
                navigator('/classes')
              }}
                size="lg"
                variant="outline"
                borderColor={DopamineLiteColors.greenColor}
                color={DopamineLiteColors.greenColor}
                _hover={{ bg: "#00712D", color: "white" }}
              >
                Browse Courses
              </Button>
            </Flex>
          </VStack>
        </Container>
      </Box>
      <Box>

</Box>
      <Box bg="white">
        <Container maxW="container.xl" py={{ base: 12, md: 20 }}>
          <VStack gap={12}>
            <Box textAlign="center">
              <Heading
                as="h2"
                fontSize={{ base: "3xl", md: "4xl" }}
                color={DopamineLiteColors.greenColor}
                mb={4}
              >
                Comprehensive Learning Experience
              </Heading>
              <Text fontSize="xl" color="gray.600">
                Explore our wide range of biology topics
              </Text>
            </Box>
            <SimpleGrid columns={{ base: 1, md: 3 }} gap={8} w="full">
              {features.map((feature, index) => (
                <Box
                  key={index}
                  bg={DopamineLiteColors.lightGreenColor}
                  p={8}
                  borderRadius="lg"
                  transition="transform 0.2s"
                  _hover={{ transform: "scale(1.05)" }}
                >
                  <VStack gap={4} align="flex-start">
                    <Icon boxSize={8} color={DopamineLiteColors.greenColor}> 
                      <feature.icon />
                    </Icon>
                    <Heading as="h3" fontSize="xl" color={DopamineLiteColors.greenColor}>
                      {feature.title}
                    </Heading>
                    <Text color="gray.600">{feature.description}</Text>
                  </VStack>
                </Box>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>
      <Box bg={DopamineLiteColors.greenColor}>
        <Container maxW="container.xl" py={{ base: 12, md: 20 }}>
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
            <VStack textAlign="center">
              <Icon  boxSize={8} color="white" mb={4} >
                <FaBook />
              </Icon>
              <Text fontSize="4xl" fontWeight="bold" color="white">100+</Text>
              <Text fontSize="lg" color={DopamineLiteColors.lightGreenColor}>Interactive Lessons</Text>
            </VStack>
            <VStack textAlign="center">
              <Icon boxSize={8} color="white" mb={4} >
                <FaMicroscope />
              </Icon>
              <Text fontSize="4xl" fontWeight="bold" color="white">50+</Text>
              <Text fontSize="lg" color={DopamineLiteColors.lightGreenColor}>Virtual Labs</Text>
            </VStack>
            <VStack textAlign="center">
              <Icon  boxSize={8} color="white" mb={4} >
                <FaUsers />
              </Icon>
              <Text fontSize="4xl" fontWeight="bold" color="white">10k+</Text>
              <Text fontSize="lg" color={DopamineLiteColors.lightGreenColor}>Active Students</Text>
            </VStack>
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
    </>
  );
}