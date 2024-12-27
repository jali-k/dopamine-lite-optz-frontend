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
import { useNavigate, useParams } from 'react-router-dom';
import { Class } from '@/types/class.types';
import { useEffect, useState } from 'react';
import { classesService_dev } from '@/services/classes';
import { lessonsService, lessonsService_dev } from '@/services/lessons';
import { Lesson } from '@/types/lesson.types';

interface ClassLessonsParams {
  clsid: string;
  id?: string;
}

export default function LessonsPage() {
    const params = useParams();
    const [classData, setClassData] = useState<Class>();
    const [classLessons, setClassLessons] = useState<Lesson[]>([]);

    useEffect(() => {
      classesService_dev.getClassById(params.clsid!).then((data) => {
           setClassData(data);
           lessonsService_dev.getLessonsByClassId(data.id).then((lessons) => {
               setClassLessons(lessons);
           });
       });
    }, []);


    
//  const lessons: Lesson[] = [
//    {
//     id: 1,
//      title: 'Cell Biology',
//      description: 'Learn about the fundamental unit of life',
//      image: '/cell-biology.jpg',
//      level: 'Beginner'
//    },
//    {
//     id: 2,
//      title: 'Genetics',
//      description: 'Explore DNA, genes and inheritance',
//      image: '/genetics.jpg', 
//      level: 'Intermediate'
//    },
//    // Add more lessons
//  ];

  const navigate = useNavigate();

  const handleOnClick = (lesson: Lesson) => {
    const urlTitle = lesson.title.toLowerCase().replace(/\s+/g, '-');
    navigate(`${lesson.id}/${urlTitle}`);
  };

 return (
   <VStack gap={8}>
     <Heading color="biology.700">Biology Lessons</Heading>
     <Heading color="biology.700">{params.clsid}</Heading>
     <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6} w="full">
       {classLessons.map((lesson, index) => (
         <Card.Root key={index} overflow="hidden" variant="outline" onClick={() => {handleOnClick(lesson)}}>
           <Image
             src={''}
             alt={lesson.title}
             height="200px"
             objectFit="cover"
           />
           <CardBody>
             <VStack align="start" gap={2}>
               <Badge >{lesson.lesson}</Badge>
               <Heading size="md">{lesson.title}</Heading>
               <Text color="gray.600">Held on: {lesson.createdAt}</Text>
             </VStack>
           </CardBody>
         </Card.Root>
       ))}
     </SimpleGrid>
   </VStack>
 );
}