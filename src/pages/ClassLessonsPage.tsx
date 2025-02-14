import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  Card,
  CardBody,
  Image,
  Badge,
  HStack,
  Icon,
  Skeleton,
  Flex,
} from '@chakra-ui/react';
import CoverImage from "../styles/lessoncover.jpeg"
import { useNavigate, useParams } from 'react-router-dom';
import { Class } from '@/types/class.types';
import { Divider } from '@aws-amplify/ui-react';
import { useEffect, useState } from 'react';
import { classesService_dev } from '@/services/classes';
import { lessonsService_dev } from '@/services/lessons';
import { Lesson } from '@/types/lesson.types';
import { FaCalendarAlt, FaUserAlt, FaBook } from 'react-icons/fa';
import SideDrawer from '@/components/SideDrawer';
import { DopamineLiteColors } from '@/themes/colors';



export default function LessonsPage() {
  const params: Record<string, string | undefined> = useParams();
  const [classData, setClassData] = useState<Class>();
  const [classLessons, setClassLessons] = useState<Lesson[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [selectedLesson, setSelectedLesson] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await classesService_dev.getClassById(params.clsid!);
        setClassData(data);
        const lessons = await lessonsService_dev.getLessonsByClassId(data.id);
        setClassLessons(lessons);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [params.clsid]);

  const handleOnClick = (lesson: Lesson) => {
    const urlTitle = lesson.title.toLowerCase().replace(/\s+/g, '-');
    navigate(`${lesson.id}/${urlTitle}`);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const Light = DopamineLiteColors;
  return (
    <Flex minH="100vh">
     

      {/* Main Content */}
      <Box zIndex={0} flex="1" bg={Light.backgroundWhite} py={8} px={6} position={'relative'}>
        <SideDrawer classId={classData?.id} />
        <Container maxW="container.xl">
          <VStack gap={8} align="stretch">
            <Box textAlign="center" mb={4}>
              <Heading
                fontSize={{ base: "2rem", md: "2.5rem" }}
                color={Light.black100}
                mb={4}
              >
                Available Lessons
              </Heading>
              <Text fontSize={{ base: "0.8rem", md: "1.2rem" }} color={Light.black75}>
                Select a lesson to start learning
              </Text>
            </Box>

            <Flex justify="space-around" align="center" width={{ base: "100%", md: "100%" }} wrap="wrap" gap="3rem">
              {isLoading ? (
                // Loading skeletons
                [...Array(6)].map((_, index) => (
                  <Card.Root key={index} borderRadius="lg" overflow="hidden" boxShadow="md">
                    <Skeleton height="200px" />
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
                classLessons.map((lesson) => (
                  <Card.Root
                    key={lesson.id}
                    width={{ base: "18rem", md: "25rem", lg: "29rem" }}
                    height={{ base: "33rem", md: "33rem" }}
                    overflow="hidden"
                    bg={Light.washedGreen}
                    cursor="pointer"
                    onClick={() => handleOnClick(lesson)}
                    borderRadius="1rem"
                    boxShadow="md"
                    transition="all 0.3s"
                    _hover={{
                      transform: "translateY(-4px)",
                      boxShadow: "lg",
                      borderColor: {_hover: Light.lightGreen},
                    }}
                    borderWidth="1px"
                    borderColor="gray.100"
                    padding="1.5rem"
                  >
                    <Text
                      padding="0.3rem"
                      fontSize="1.05rem"
                      color={Light.white100}
                    >
                      {lesson.title}
                    </Text>
                    <Image
                      src={CoverImage}
                      height="200px"
                      objectFit="cover"
                    />
                      <Badge
                        bg={Light.darkGreen}
                        color={Light.white100}
                        width="100%"
                        maxW="12rem"
                        height="1.7rem"
                        borderRadius="full"
                        marginTop="1rem"
                      >
                        <HStack gap="1rem">
                          <Icon  boxSize={3} >
                            <FaBook />
                          </Icon>
                          <Text fontSize="1.05rem" marginBottom="0.2rem">Lesson {lesson.lesson}</Text>
                        </HStack>
                      </Badge>
                    <CardBody>
                      <VStack align="start" gap="0.7rem">
                        <Heading size="md" color={Light.white100}>
                          {lesson.title}
                        </Heading>

                        <Text color={Light.white800} fontSize="sm">
                          {lesson.description}
                        </Text>

                        <Divider marginTop="1rem" width="100%" borderColor={Light.gray300} marginBottom="1rem"/>

                        <VStack gap={2} align="start" w="full">
                          <HStack fontSize="sm" color={Light.white800}>
                            <Icon  color={Light.white100} >
                              <FaCalendarAlt />
                            </Icon>
                            <Text>Created: {formatDate(lesson.createdAt)}</Text>
                          </HStack>
                          <HStack fontSize="sm" color={Light.white800}>
                            <Icon  color={Light.white100} >
                              <FaUserAlt />
                            </Icon>
                            <Text>Handler: {lesson.handler}</Text>
                          </HStack>
                        </VStack>
                      </VStack>
                    </CardBody>
                  </Card.Root>
                ))
              )}
            </Flex>
          </VStack>
        </Container>
      </Box>
    </Flex>
  );
}