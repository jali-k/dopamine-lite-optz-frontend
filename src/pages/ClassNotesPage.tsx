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
  Button
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaCalendarAlt, FaFilePdf, FaDownload, FaFileAlt } from 'react-icons/fa';
import SideDrawer from '../components/SideDrawer';



// Color palette (matching ClassLessonsPage)
const colors = {
  primary: "#00712D",
  secondary: "#D5ED9F",
  background: "#FFFBE6",
  accent: "#FF9100",
};

interface Note {
  id: string;
  title: string;
  fileName: string;
  size: string;
  uploadDate: string;
  description?: string;
}

export default function NotesPage() {
  const params = useParams();
  const [notes, setNotes] = useState<Note[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulated data fetch - replace with actual API call
    const fetchNotes = async () => {
      try {
        setIsLoading(true);
        // Simulated notes data - replace with API call
        const mockNotes = [
          {
            id: '1',
            title: 'Cell Structure Notes',
            fileName: 'cell_structure.pdf',
            size: '2.4 MB',
            uploadDate: '2024-03-15',
            description: 'Comprehensive notes covering cell structure and organelles'
          },
          {
            id: '2',
            title: 'DNA Replication Guide',
            fileName: 'dna_replication.pdf',
            size: '1.8 MB',
            uploadDate: '2024-03-16',
            description: 'Detailed guide on DNA replication process and key enzymes'
          },
          {
            id: '3',
            title: 'Photosynthesis Overview',
            fileName: 'photosynthesis.pdf',
            size: '3.1 MB',
            uploadDate: '2024-03-17',
            description: 'Complete overview of photosynthesis light and dark reactions'
          }
        ];
        setNotes(mockNotes);
      } catch (error) {
        console.error('Error fetching notes:', error);
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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Flex minH="100vh">
      {/* Main Content */}
      <Box zIndex={0} flex="1" bg={colors.background} py={8} px={6} position="relative">
        <SideDrawer classId={params.clsid} />
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
              {isLoading ? (
                // Loading skeletons
                [...Array(6)].map((_, index) => (
                  <Card.Root key={index} borderRadius="lg" overflow="hidden" boxShadow="md">
                  <CardBody>
                    <VStack align="start" gap={4}>
                      <Skeleton height="20px" width="40%" />
                      <Skeleton height="24px" width="100%" />
                      <Skeleton height="20px" width="60%" />
                    </VStack>
                  </CardBody>
                </Card.Root>
                ))
              ) : (
                notes.map((note) => (
                  <Card.Root
                    key={note.id}
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
                            <Icon  boxSize={3} >
                              <FaFilePdf />
                              </Icon>
                            <Text>{note.size}</Text>
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
                            <Icon color={colors.accent} > 
                            
                              <FaCalendarAlt />
                              </Icon >
                            
                            <Text>Uploaded: {formatDate(note.uploadDate)}</Text>
                          </HStack>
                          <HStack fontSize="sm" color="gray.600">
                            <Icon color={colors.accent} >
                              <FaFileAlt />
                              </Icon>
                            <Text>Filename: {note.fileName}</Text>
                          </HStack>
                        </VStack>
                        <Button
                          colorScheme="green"
                          variant="outline"
                          w="full"
                          onClick={() => handleDownload(note.fileName)}
                        >
                          <FaDownload />
                          Download PDF
                        </Button>
                      </VStack>
                    </CardBody>
                  </Card.Root>
                ))
              )}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>
    </Flex>
  );
}
