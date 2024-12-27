import {
 SimpleGrid,
 VStack,
 Heading,
 Text,
 Card,
 CardBody,
 Image,
 Badge,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { Lesson } from '../types';



export default function LessonsPage() {
 const lessons: Lesson[] = [
   {
    id: 1,
     title: 'Cell Biology',
     description: 'Learn about the fundamental unit of life',
     image: '/cell-biology.jpg',
     level: 'Beginner'
   },
   {
    id: 2,
     title: 'Genetics',
     description: 'Explore DNA, genes and inheritance',
     image: '/genetics.jpg', 
     level: 'Intermediate'
   },
   // Add more lessons
 ];

  const navigate = useNavigate();

  const handleOnClick = (lesson: Lesson) => {
    const urlTitle = lesson.title.toLowerCase().replace(/\s+/g, '-');
    navigate(`/lessons/${lesson.id}/${urlTitle}`);
  };

 return (
   <VStack gap={8}>
     <Heading color="biology.700">Biology Lessons</Heading>
     <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6} w="full">
       {lessons.map((lesson, index) => (
         <Card.Root key={index} overflow="hidden" variant="outline" onClick={() => {handleOnClick(lesson)}}>
           <Image
             src={lesson.image}
             alt={lesson.title}
             height="200px"
             objectFit="cover"
           />
           <CardBody>
             <VStack align="start" gap={2}>
               <Badge >{lesson.level}</Badge>
               <Heading size="md">{lesson.title}</Heading>
               <Text color="gray.600">{lesson.description}</Text>
             </VStack>
           </CardBody>
         </Card.Root>
       ))}
     </SimpleGrid>
   </VStack>
 );
}