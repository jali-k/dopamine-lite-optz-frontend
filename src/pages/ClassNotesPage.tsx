import {
  Box,
  Container,
  SimpleGrid,
  VStack,
  Heading,
  Text,
  Card,
  CardBody,
  Badge,
  HStack,
  Icon,
  Skeleton,
  Flex,
  Button,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  FaCalendarAlt,
  FaFilePdf,
  FaDownload,
  FaFileAlt,
} from "react-icons/fa";
import SideDrawer from "@/components/SideDrawer";
import { lessonsService } from "@/services/lessons";
import { ClassDetails } from "@/types/class-details.types";
import { INote } from "@/types/note.types";

// Color palette (matching ClassLessonsPage)
const colors = {
  primary: "#00712D",
  secondary: "#D5ED9F",
  background: "#FFFBE6",
  accent: "#FF9100",
};

export default function NotesPage() {
  const params = useParams();
  const [classData, setClassData] = useState<ClassDetails>();
  const [notes, setNotes] = useState<INote[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        setIsLoading(true);
        console.log(params.clsid);

        const response = await lessonsService
          .getLessonsByClassId(
            params.clsid || "",
            "dasun.theekshana.git@gmail.com"
          )
          .then((data) => {
            console.log(data);
            return data;
          });
        setClassData(response);
        setNotes(response.notes);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNotes();
  }, [params.clsid]);

  const handleDownload = (fileName: string) => {
    // Implement download functionality
    console.log(`Downloading ${fileName}`);
  };

  const formatDate = (dateString: Date) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Flex minH="100vh">
      {/* Main Content */}
      <Box
        zIndex={0}
        flex="1"
        bg={colors.background}
        py={8}
        px={6}
        position="relative"
      >
        {classData && <SideDrawer classData={classData} />}
        <Container maxW="container.xl">
          <VStack gap={8} align="stretch">
            <Box textAlign="center" mb={8}>
              <Heading
                as="h1"
                fontSize={{ base: "3xl", md: "4xl" }}
                color={colors.primary}
                mb={4}
              >
                Class Notes
              </Heading>
              <Text fontSize="lg" color="gray.600">
                Download study materials and resources
              </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
              {isLoading
                ? // Loading skeletons
                  [...Array(6)].map((_, index) => (
                    <Card.Root
                      key={index}
                      borderRadius="lg"
                      overflow="hidden"
                      boxShadow="md"
                    >
                      <CardBody>
                        <VStack align="start" gap={4}>
                          <Skeleton height="20px" width="40%" />
                          <Skeleton height="24px" width="100%" />
                          <Skeleton height="20px" width="60%" />
                        </VStack>
                      </CardBody>
                    </Card.Root>
                  ))
                : notes.map((note) => (
                    <Card.Root
                      key={note.noteId}
                      overflow="hidden"
                      borderRadius="lg"
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
                      <CardBody>
                        <VStack align="start" gap={4}>
                          <Badge
                            colorScheme="green"
                            bg={colors.secondary}
                            color={colors.primary}
                            px={3}
                            py={1}
                            borderRadius="full"
                          >
                            <HStack gap={1}>
                              <Icon boxSize={3}>
                                <FaFilePdf />
                              </Icon>
                              <Text>Lesson {note.belongingLesson}</Text>
                            </HStack>
                          </Badge>

                          <Heading size="md" color={colors.primary}>
                            {note.title}
                          </Heading>

                          <Text color="gray.600" fontSize="sm">
                            {note.description}
                          </Text>

                          <VStack gap={2} align="start" w="full">
                            <HStack fontSize="sm" color="gray.600">
                              <Icon color={colors.accent}>
                                <FaCalendarAlt />
                              </Icon>

                              <Text>Created: {formatDate(note.date)}</Text>
                            </HStack>
                            <HStack fontSize="sm" color="gray.600">
                              <Icon color={colors.accent}>
                                <FaFileAlt />
                              </Icon>
                              <Text>Filename: {note.title}</Text>
                            </HStack>
                          </VStack>

                          <Button
                            colorScheme="green"
                            variant="outline"
                            w="full"
                            onClick={() => handleDownload(note.title)}
                          >
                            <FaDownload />
                            Download PDF
                          </Button>
                        </VStack>
                      </CardBody>
                    </Card.Root>
                  ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>
    </Flex>
  );
}
