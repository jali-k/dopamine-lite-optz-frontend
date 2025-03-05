import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  CardBody,
  Icon,
  Button,
  HStack,
  Flex,
  CardRoot,
} from "@chakra-ui/react";
import { Divider } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";
import { classesService_dev } from "@/services/classes";
import { useEffect, useState } from "react";
import { Class } from "@/types/class.types";
import { FaCalculator } from "react-icons/fa";
import { DopamineLiteColors } from "@/themes/colors";
import { DLFonts } from "@/themes/fonts";

const getClasses = classesService_dev.getClasses;

const ClassesPage = () => {
  const Light = DopamineLiteColors;
  const [classes, setClasses] = useState<Class[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getClasses().then((data) => setClasses(data));
  }, []);

  const onClickHandler = (cls: Class) => {
    navigate(`/classes/${cls.id}/lessons`);
  };

  return (
    <Box minH="100vh" display="flex" flexDirection="column" fontFamily={DLFonts.body}>
      {/* Main Content */}
      <Box bg={Light.backgroundWhite} flex="1" py={{ base: "1.5rem", md: "2rem" }}>
        <Container maxW="container.lg" px={{ base: "1rem", md: "1.5rem" }}>
          <VStack gap="1.5rem" align="stretch">
            {/* Page Heading */}
            <Box textAlign="center" mb="1.5rem">
              <Heading
                as="h1"
                fontSize={{ base: "2rem", md: "2.5rem" }}
                fontWeight="600"
                mb="0.75rem"
                color={Light.black100}
                lineHeight={{ base: "2.625rem", md: "3rem" }}
              >
                Your Learning Journey
              </Heading>
              <Text
                color={Light.black75}
                fontSize={{ base: "0.875rem", md: "1rem" }}
                lineHeight="1.2rem"
                fontWeight="400"
              >
                Select a class to begin your learning experience
              </Text>
            </Box>

            {/* Responsive Grid Layout for Classes */}
            <Flex
              flexDir={{ base: "column", md: "row" }}
              gap={{ base: "1rem", md: "2.5rem" }}
            >
              {classes.map((cls) => (
                <CardRoot
                  key={cls.id}
                  width="100%"
                  maxW="25.5rem"
                  onClick={() => onClickHandler(cls)}
                  cursor="pointer"
                  bg={Light.white100}
                  borderRadius="1.25rem"
                  borderWidth="0.125rem"
                  borderColor={Light.gray300}
                  _hover={{ transform: "scale(1.02)", boxShadow: "md" }}
                  transition="all 0.2s ease-in-out"
                >
                  <CardBody p={{ base: "1.25rem", md: "1.5rem" }}>
                    <VStack align="stretch" gap="1rem">
                      <HStack align="center" gap={{ base: "1rem", md: "1.25rem" }}>
                        <Icon as={FaCalculator} boxSize={{ base: "1.75rem", md: "2.25rem" }} color={Light.darkGreen} />
                        <VStack align="start" gap="0.25rem">
                          <Text
                            color={Light.black75}
                            fontSize={{ base: "1rem", md: "1.125rem" }}
                            fontWeight="400"
                          >
                            Class ID: {cls.id}
                          </Text>
                          <Text
                            color={Light.black100}
                            fontSize={{ base: "1.25rem", md: "1.5rem" }}
                            fontWeight="500"
                          >
                            {cls.name}
                          </Text>
                        </VStack>
                      </HStack>

                      <Divider borderColor={Light.gray300} marginBottom="0.7rem" />

                      <Box display="flex" justifyContent="center">
                        <Button
                          bg={Light.darkGreen}
                          color={Light.white100}
                          fontWeight="600"
                          fontSize={{ base: "0.875rem", md: "1.0625rem" }}
                          borderRadius="3.125rem"
                          px="1rem"
                          py="0.5rem"
                          _hover={{ bg: Light.darkGreen, opacity: 0.9 }}
                        >
                          View Lesson
                        </Button>
                      </Box>
                    </VStack>
                  </CardBody>
                </CardRoot>
              ))}
            </Flex>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
};

export default ClassesPage;
