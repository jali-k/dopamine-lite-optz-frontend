import { Button } from "@/components/ui/button";
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerRoot,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { DopamineLiteColors } from "@/themes/colors";
import {
  Box,
  VStack,
  HStack,
  Text,
  Icon,
  Badge,
  Separator,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  FaBook,
  FaVideo,
  FaNotesMedical,
  FaChevronRight,
  FaBars,
} from "react-icons/fa";
import { ClassDetails } from "@/types/class-details.types";
import { ILecture } from "@/types/lecture.types";
import { INote } from "@/types/note.types";

interface SideDrawerProps {
  classData: ClassDetails;
}

const SideDrawer = ({ classData }: SideDrawerProps) => {
  const navigate = useNavigate();
  // const [classData, setClassData] = useState<ClassDetails>();
  // const [classLessons, setClassLessons] = useState<Lesson[]>([]);
  const [selectedLesson, _setSelectedLesson] = useState<number | null>(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     if (classId) {
  //       try {
  //         const data = await classesService_dev.getClassById(classId);
  //         setClassData(data);
  //         const lessons = await lessonsService_dev.getLessonsByClassId(data.id);
  //         setClassLessons(lessons);
  //       } catch (error) {
  //         console.error('Error fetching data:', error);
  //       }
  //     }
  //   };

  //   fetchData();
  // }, [classId]);

  const handleTitleClick = () => {
    navigate(`/classes/${classData.classDetails.classId}/lessons`);
  };

  const handleEachLessonClick = (lesson: ILecture) => {
    const urlTitle = lesson.title.toLowerCase().replace(/\s+/g, "-");
    navigate(
      `/classes/${lesson.classId}/lessons/${lesson.lectureId}/${urlTitle}`
    );
  };

  // const handleLessonsClick = (classId: string) => {
  //   navigate(`/classes/${classId}/lessons`);
  // };

  // const handleNotesClick = (classId: string) => {
  //   navigate(`/classes/${classId}/notes`);
  // };

  const handleEachNoteClick = (lesson: INote) => {
    navigate(`/classes/${lesson.classId}/notes/${lesson.noteId}`);
  };

  return (
    <Box zIndex={1}>
      <DrawerRoot placement={"start"}>
        <DrawerBackdrop />
        <DrawerTrigger bg={DopamineLiteColors.greenColor} asChild>
          <Button variant="ghost" size="sm">
            <Icon>
              <FaBars />
            </Icon>
            Menu
          </Button>
        </DrawerTrigger>
        <DrawerContent bg={DopamineLiteColors.creamColor}>
          <DrawerHeader bg={DopamineLiteColors.greenColor}>
            <Button
              onClick={() => {
                handleTitleClick();
              }}
              bg={"transparent"}
            >
              <Box py={2}>
                <Badge
                  fontSize="sm"
                  px={3}
                  py={1}
                  bg={DopamineLiteColors.lightGreenColor}
                  color={DopamineLiteColors.greenColor}
                  borderRadius="full"
                >
                  {classData.classDetails.name || "Loading..."}
                </Badge>
              </Box>
            </Button>

            <DrawerCloseTrigger />
          </DrawerHeader>

          <DrawerBody>
            <VStack align="stretch" gap={4}>
              {/* Lessons Section */}
              <Box>
                <Button bg={"transparent"} onClick={handleTitleClick}>
                  <HStack mb={4} color={DopamineLiteColors.greenColor}>
                    <Icon>
                      <FaVideo />
                    </Icon>
                    <Text fontWeight="bold">Lessons</Text>
                  </HStack>
                </Button>

                <VStack align="stretch" gap={2}>
                  {classData.lectures.map((lesson) => (
                    <Button
                      color={"black"}
                      key={lesson.lectureId}
                      variant="ghost"
                      justifyContent="flex-start"
                      h="auto"
                      py={2}
                      px={4}
                      onClick={() => handleEachLessonClick(lesson)}
                      bg={
                        selectedLesson === lesson.classId
                          ? DopamineLiteColors.lightGreenColor
                          : "transparent"
                      }
                      _hover={{
                        bg: DopamineLiteColors.lightGreenColor,
                        color: DopamineLiteColors.greenColor,
                      }}
                    >
                      <Icon boxSize={4}>
                        <FaBook />
                      </Icon>
                      <VStack align="start" gap={0}>
                        <Text color={"black"} fontSize="sm" fontWeight="medium">
                          Lesson {lesson.title}
                        </Text>
                        <Text fontSize="xs" color="gray.600" truncate>
                          {lesson.description}
                        </Text>
                      </VStack>
                      <Icon boxSize={3}>
                        <FaChevronRight />
                      </Icon>
                    </Button>
                  ))}
                </VStack>
              </Box>

              <Separator />

              {/* Notes Section */}
              <Box>
                <Button bg={"transparent"} onClick={handleTitleClick}>
                  <HStack mb={4} color={DopamineLiteColors.greenColor}>
                    <Icon>
                      <FaNotesMedical />
                    </Icon>
                    <Text fontWeight="bold">Notes</Text>
                  </HStack>
                </Button>

                <VStack align="stretch" gap={2}>
                  {classData.notes.map((lesson) => (
                    <Button
                      key={`note-${lesson.noteId}`}
                      variant="ghost"
                      justifyContent="flex-start"
                      h="auto"
                      py={2}
                      px={4}
                      onClick={() => handleEachNoteClick(lesson)}
                      bg={
                        selectedLesson === lesson.classId
                          ? DopamineLiteColors.lightGreenColor
                          : "transparent"
                      }
                      _hover={{
                        bg: DopamineLiteColors.lightGreenColor,
                        color: DopamineLiteColors.greenColor,
                      }}
                    >
                      <Icon color={"black"} boxSize={4}>
                        <FaNotesMedical />
                      </Icon>
                      {/* <Text color={"black"} fontSize="sm">
                        {lesson.title}
                      </Text> */}

                      <VStack align="start" gap={0}>
                        <Text color={"black"} fontSize="sm" fontWeight="medium">
                          Lesson {lesson.title}
                        </Text>
                        <Text fontSize="xs" color="gray.600" truncate>
                          {lesson.description}
                        </Text>
                      </VStack>
                      {/* <Icon boxSize={3}>
                        <FaChevronRight />
                      </Icon> */}
                    </Button>
                  ))}
                </VStack>
              </Box>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </DrawerRoot>
    </Box>
  );
};

export default SideDrawer;
