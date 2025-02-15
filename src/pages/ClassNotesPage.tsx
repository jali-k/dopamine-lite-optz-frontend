import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  Skeleton,
  Flex,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SideDrawer from "@/components/SideDrawer";
import { DopamineLiteColors } from "@/themes/colors";
import NotesCard from "@/components/ui/NotesCard";
import { ClassDetails } from "@/types/class-details.types";
import { INote } from "@/types/note.types";
import { lessonsService } from "@/services/lessons";

export default function NotesPage() {
  const Light = DopamineLiteColors;
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

  // const handleDownload = (fileName: string) => {
  //   // Implement download functionality
  //   console.log(`Downloading ${fileName}`);
  // };

  // const formatDate = (dateString: Date) => {
  //   return new Date(dateString).toLocaleDateString("en-US", {
  //     year: "numeric",
  //     month: "long",
  //     day: "numeric",
  //   });
  // };
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
      <Box
        zIndex={0}
        flex="1"
        bg={Light.backgroundWhite}
        py={8}
        px={6}
        position="relative"
      >
        {classData && <SideDrawer classData={classData} />}
        <Container maxW="container.xl">
          <VStack gap={8} align="stretch">
            <Box textAlign="center" mb={8}>
              <Heading as="h1" fontSize="40px" color={Light.black100} mb={4}>
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
              {isLoading
                ? // Loading skeletons
                  [...Array(6)].map((_, index) => (
                    <Box key={index} w="full">
                      <Skeleton height="20px" width="100%" />
                      <Skeleton height="100px" width="100%" mt={4} />
                    </Box>
                  ))
                : notes.map((note) => (
                    <NotesCard
                      key={note.noteId}
                      title={note.title}
                      description={note.description || ""}
                      fileName={note.file}
                      size={note.file}
                      uploadDate={note.date.toISOString()} // TODO: Check
                      fileUrl={`/path/to/${note.file}`} // Adjust this path as needed
                    />
                  ))}
            </Flex>
          </VStack>
        </Container>
      </Box>
    </Flex>
  );
}
