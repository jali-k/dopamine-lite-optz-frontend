import {
 Box,
 SimpleGrid,
 VStack,
 Heading,
 Text,
 Card,
 CardBody,
 Image,
 Badge,
} from '@chakra-ui/react';

export default function LessonsPage() {
 const lessons = [
   {
     title: 'Cell Biology',
     description: 'Learn about the fundamental unit of life',
     image: '/cell-biology.jpg',
     level: 'Beginner'
   },
   {
     title: 'Genetics',
     description: 'Explore DNA, genes and inheritance',
     image: '/genetics.jpg', 
     level: 'Intermediate'
   },
   // Add more lessons
 ];

 return (
   <VStack gap={8}>
     <Heading color="biology.700">Biology Lessons</Heading>
     <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6} w="full">
       {lessons.map((lesson, index) => (
         <Card.Root key={index} overflow="hidden" variant="outline">
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