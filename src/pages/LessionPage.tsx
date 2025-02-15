import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Badge,
  Skeleton,
  Icon,
  Separator,
  Card,
  CardBody,
} from '@chakra-ui/react';
import {
  FaRegClock,
  FaRegCalendarAlt,
  FaChalkboardTeacher,
  FaBookReader,
} from 'react-icons/fa';
import VideoPlayer from '@/components/VideoPlayer';
import { lessonsService_dev } from '@/services/lessons';
import { Lesson } from '@/types/lesson.types';
import SideDrawer from '@/components/SideDrawer';

// Color palette
const colors = {
  primary: "#00712D",
  secondary: "#D5ED9F",
  background: "#FFFBE6",
  accent: "#FF9100",
};

const LessonPage = () => {
  const params = useParams();
  const [lessonData, setLessonData] = useState<Lesson>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchLessonData = async () => {
      try {
        setIsLoading(true);
        const data = await lessonsService_dev.getLesson(params.clsid!, params.id!);
        setLessonData(data);
      } catch (error) {
        console.error('Error fetching lesson:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLessonData();
  }, [params.clsid, params.id]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Video URL (you might want to make this dynamic based on lesson data)
  const url = 'https://us-central1-dopamine-lite-b61bf.cloudfunctions.net/getPresignedUrl?manifest_key=index.m3u8&segment_keys=index0.ts,index1.ts&folder=kana&expiration=3600';

  if (isLoading) {
    return (
      <Container maxW="container.xl" py={8}>
        <VStack gap={8} align="stretch">
          <Skeleton height="40px" width="70%" />
          <Skeleton height="24px" width="40%" />
          <Skeleton height="400px" borderRadius="lg" />
          <Skeleton height="100px" />
        </VStack>
      </Container>
    );
  }

  return (
    <Box bg={colors.background} minH="100vh" >
      <Box my={6} mx={8}>
        <SideDrawer classId={lessonData?.classId}  />
      </Box>
      
      <Container maxW="container.xl" >
        
        {/* Header Section */}
        <VStack align="stretch" gap={6} mb={8}>
          <Box>
            <Badge
              colorScheme="green"
              bg={colors.secondary}
              color={colors.primary}
              px={3}
              py={1}
              borderRadius="full"
              mb={4}
            >
              <HStack gap={1}>
                <Icon >
                  <FaChalkboardTeacher />
                </Icon>
                <Text>Lesson {lessonData?.lesson}</Text>
              </HStack>
            </Badge>
            <Heading
              as="h1"
              size="xl"
              color={colors.primary}
              mb={4}
            >
              {lessonData?.title}
            </Heading>
          </Box>

          <HStack
            gap={8}
            flexWrap="wrap"
            color="gray.600"
          >
            <HStack gap={2}>
              <Icon color={colors.accent} >
                <FaRegCalendarAlt />
              </Icon>
              <Text>{formatDate(lessonData?.createdAt || '')}</Text>
            </HStack>
            <HStack gap={2}>
              <Icon  color={colors.accent} >
                <FaChalkboardTeacher />
              </Icon>
              <Text>{lessonData?.handler}</Text>
            </HStack>
          </HStack>
        </VStack>

        {/* Video Player Section */}
        <Card.Root
          bg="white"
          shadow="xl"
          borderRadius="lg"
          overflow="hidden"
          mb={8}
        >
          <Box bg="gray.900" aspectRatio={16/9}>
            <VideoPlayer url={url} watermark="Dopamine lite" />
          </Box>
        </Card.Root>

        {/* Content Section */}
        <Card.Root bg="white" shadow="md" borderRadius="lg">
          <CardBody>
            <VStack align="stretch" gap={8}>
              <Box>
                <HStack mb={4}>
                  <Icon  color={colors.primary} boxSize={5} >
                    <FaBookReader />
                  </Icon> 
                  <Heading size="md" color={colors.primary}>
                    About this lesson
                  </Heading>
                </HStack>
                <Text color="gray.700" fontSize="lg" lineHeight="tall">
                  {lessonData?.description}
                </Text>
              </Box>

              <Separator borderColor="gray.200" />

              <Box>
                <HStack mb={4}>
                  <Icon color={colors.primary} boxSize={5} >
                    <FaRegClock />
                  </Icon>
                  <Heading size="md" color={colors.primary}>
                    Last Updated
                  </Heading>
                </HStack>
                <Text color="gray.700">
                  {formatDate(lessonData?.updatedAt || '')}
                </Text>
              </Box>
            </VStack>
          </CardBody>
        </Card.Root>
      </Container>
    </Box>
  );
};

export default LessonPage;