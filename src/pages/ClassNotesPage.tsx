import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  Skeleton,
  Flex,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SideDrawer from '@/components/SideDrawer';
import { DopamineLiteColors } from '@/themes/colors';
import NotesCard from '@/components/ui/NotesCard';


interface Note {
  id: string;
  title: string;
  fileName: string;
  size: string;
  uploadDate: string;
  description?: string;
}

export default function NotesPage() {
  const Light = DopamineLiteColors;
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
/*
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };
*/
  return (
    <Flex minH="100vh">
      {/* Main Content */}
      <Box zIndex={0} flex="1" bg={Light.backgroundWhite} py={8} px={6} position="relative">
        <SideDrawer classId={params.clsid} />
        <Container maxW="container.xl">
          <VStack gap={8} align="stretch">
            <Box textAlign="center" mb={8}>
              <Heading
                as="h1"
                fontSize="40px"
                color={Light.black100}
                mb={4}
              >
                Class Notes
              </Heading>
              <Text fontSize="16px" color={Light.black100}>
                Download study materials and resources
              </Text>
            </Box>
            <Flex 
              flexDir={{ base: "column", md: "column", lg: "row" }}
              gap={{ base: "1rem", md: "4rem" }}
              space-arownd={{ base: "1rem", md: "4rem" }}
             >
              {isLoading ? (
                // Loading skeletons
                [...Array(6)].map((_, index) => (
                  <Box key={index} w="full">
                    <Skeleton height="20px" width="100%" />
                    <Skeleton height="100px" width="100%" mt={4} />
                  </Box>
                ))
              ) : (
                notes.map((note) => (
                  <NotesCard
                    key={note.id}
                    title={note.title}
                    description={note.description || ''}
                    fileName={note.fileName}
                    size={note.size}
                    uploadDate={note.uploadDate}
                    fileUrl={`/path/to/${note.fileName}`} // Adjust this path as needed
                  />
                ))
              )}
            </Flex>
          </VStack>
        </Container>
      </Box>
    </Flex>
  );
}
