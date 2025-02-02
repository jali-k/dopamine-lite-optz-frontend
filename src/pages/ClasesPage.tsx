import {
  Box,
  Container,
  SimpleGrid,
  VStack,
  Heading,
  Text,
  Card,
  CardBody,
  Icon,
  HStack,
  Tag,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { classesService_dev } from "@/services/classes";
import { useEffect, useState } from "react";
import { Class } from "@/types/class.types";
import { FaGraduationCap, FaArrowRight } from "react-icons/fa";

// Color palette
const colors = {
  primary: "#00712D",
  secondary: "#D5ED9F",
  background: "#FFFBE6",
  accent: "#FF9100",
};

const getClases = classesService_dev.getClasses;

const ClassesPage = () => {
  const [classes, setClasses] = useState<Class[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getClases().then((data) => setClasses(data));
  }, []);

  const onClickHandler = (cls: Class) => {
    console.log(`The class ${cls.name} was clicked`);
    navigate(`/classes/${cls.id}/lessons`);
  };

  return (
    <Box bg={colors.background} minH="100vh" py={8}>
      <Container maxW="container.xl">
        <VStack gap={8} align="stretch">
          <Box textAlign="center" mb={8}>
            <Heading
              as="h1"
              fontSize={{ base: "3xl", md: "4xl" }}
              color={colors.primary}
              mb={4}
            >
              Your Learning Journey
            </Heading>
            <Text fontSize="lg" color="gray.600">
              Select a class to begin your learning experience
            </Text>
          </Box>

          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            gap={6}
            w="full"
          >
            {classes.map((cls) => (
              <Card.Root
                key={cls.id}
                onClick={() => onClickHandler(cls)}
                cursor="pointer"
                bg="white"
                borderRadius="lg"
                overflow="hidden"
                boxShadow="md"
                transition="all 0.3s"
                _hover={{
                  transform: "translateY(-4px)",
                  boxShadow: "lg",
                  borderColor: colors.primary,
                }}
                borderWidth="1px"
                borderColor="gray.100"
              >
                <CardBody p={6}>
                  <VStack align="start" gap={4}>
                      <HStack gap={3}>
                        <Icon
                          // as={FaGraduationCap}
                          boxSize={6}
                          color={colors.primary}
                        >
                        <FaGraduationCap />
                        </Icon>
                        <Tag.Root
                          size="sm"
                          variant="subtle"
                          colorScheme="green"
                          bg={colors.secondary}
                          color={colors.primary}
                        >
                          Class ID: {cls.id}
                        </Tag.Root>
                  
                    </HStack>

                    <Heading
                      as="h3"
                      fontSize="xl"
                      color={colors.primary}
                      fontWeight="bold"
                    >
                      {cls.name}
                    </Heading>

                    <HStack
                      justify="space-between"
                      w="full"
                      color={colors.accent}
                      fontSize="sm"
                      fontWeight="medium"
                    >
                      <Text>View Lessons</Text>
                      <Icon  ><FaArrowRight /></Icon>
                    </HStack>
                  </VStack>
                </CardBody>
              </Card.Root>
            ))}
          </SimpleGrid>



        </VStack>
      </Container>
    </Box>
  );
};

export default ClassesPage;