import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  List,
  ListItem,
  Badge,
} from '@chakra-ui/react';
import { 
  MdAccessTime as TimeIcon,
  MdStar as StarIcon,
  MdCheckCircle as CheckCircleIcon 
} from 'react-icons/md';
import VideoPlayer from '@/components/VideoPlayer';

const LessonPage = () => {
  const params = useParams();
  
  const lessonData = {
    title: params.title || "Introduction to React",
    description: "Learn the fundamentals of React, including components, props, and state management. This lesson covers essential concepts for building modern web applications.",
    duration: "45 minutes",
    level: "Intermediate",
    objectives: [
      "Understand React component architecture",
      "Learn about state and props",
      "Master JSX syntax",
      "Implement basic hooks"
    ]
  };

  const url = 'https://us-central1-dopamine-lite-b61bf.cloudfunctions.net/getPresignedUrl?manifest_key=index.m3u8&segment_keys=index0.ts,index1.ts&folder=kana&expiration=3600';

  return (
    <Container maxW="100vw" >
      {/* Header */}
      <VStack align="stretch" gap={4} mb={6}>
        <Heading as="h1" size="xl">
          {lessonData.title}
        </Heading>
        <HStack gap={4} color="gray.600">
          <HStack>
            <TimeIcon />
            <Text>{lessonData.duration}</Text>
          </HStack>
          <HStack>
            <StarIcon />
            <Badge colorScheme="blue">
              {lessonData.level}
            </Badge>
          </HStack>
        </HStack>
      </VStack>

      {/* Video Player */}
      <Box justifyItems={'center'} justifyContent={'center'} alignItems={'center'} bg="gray.900" rounded="lg" mb={8}>
        <VideoPlayer url={url} watermark="Dopamine lite" />
      </Box>

      {/* Description */}
      <VStack align="stretch" gap={8}>
        <Box>
          <Heading size="md" mb={3}>About this lesson</Heading>
          <Text color="gray.700">
            {lessonData.description}
          </Text>
        </Box>

        {/* Learning Objectives */}
        <Box>
          <Heading size="md" mb={3}>What you'll learn</Heading>
          <List.Root gap={2}>
            {lessonData.objectives.map((objective, index) => (
              <ListItem key={index} display="flex" alignItems="center">
               
                <Text>{objective}</Text>
              </ListItem>
            ))}
          </List.Root>
        </Box>
      </VStack>
    </Container>
  );
};

export default LessonPage;