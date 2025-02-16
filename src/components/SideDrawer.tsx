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
import { Box, VStack, HStack, Text, Icon, Badge, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  FaVideo,
  FaNotesMedical,
  FaChevronRight,
  FaBars,
} from "react-icons/fa";
import { DopamineLiteColors } from "@/themes/colors";
import { ClassDetails } from "@/types/class-details.types";
import { ILecture } from "@/types/lecture.types";
import { INote } from "@/types/note.types";

interface SideDrawerProps {
  classData: ClassDetails;
}

const SideDrawer = ({ classData }: SideDrawerProps) => {
  const navigate = useNavigate();
  // const [classData, setClassData] = useState<Class>();
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

  const handleTitleClick = (classId: string) => {
    navigate(`/classes/${classId}/lessons`);
  };

  const handleEachLectureClick = (lesson: ILecture) => {
    const urlTitle = lesson.title.toLowerCase().replace(/\s+/g, "-");
    navigate(
      `/classes/${lesson.classId}/lessons/${lesson.lectureId}/${urlTitle}`
    );
  };

  // const handleLessonsClick = () => {
  //   navigate(`/classes/${classId}/lessons`);
  // }

  // const handleNotesClick = () => {
  //   navigate(`/classes/${classId}/notes`);
  // }

  const handleEachNoteClick = (lesson: INote) => {
    navigate(`/classes/${lesson.classId}/notes/${lesson.noteId}`);
  };

  const Light = DopamineLiteColors;
  return (
    <Box zIndex={1}>
      <DrawerRoot placement={"start"}>
        <DrawerBackdrop />
        <DrawerTrigger bg="transparent" asChild>
          <Button color={Light.black100} variant="ghost" height="2rem">
            <Icon>
              <FaBars />
            </Icon>
          </Button>
        </DrawerTrigger>
        <DrawerContent
          bg={Light.white100}
          width={{ base: "18rem", md: "20rem", lg: "26rem" }}
          maxWidth="30rem"
        >
          <DrawerHeader
            bg={Light.darkGreen}
            paddingTop={"1.4rem"}
            paddingBottom={"1.4rem"}
          >
            <Flex
              flexDir={"row"}
              justifyContent="flex-start"
              alignItems={"center"}
            >
              <Button
                onClick={() => {
                  handleTitleClick(classData?.classDetails.classId || "");
                }}
                bg={"transparent"}
              >
                <Box py={2}>
                  <Badge
                    padding="0.2rem 0.7rem"
                    fontSize="1.25rem" // 20px = 1.25rem
                    lineHeight="1.5rem" // 24px = 1.5rem
                    fontWeight="500"
                    fontFamily="'Bricolage Grotesque', sans-serif"
                    alignItems="center"
                    bg={Light.white100}
                    color={Light.darkGreen}
                    borderRadius="full"
                  >
                    {classData?.classDetails.name || "Loading..."}
                  </Badge>
                </Box>
              </Button>
              <DrawerCloseTrigger />
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            <VStack align="stretch" gap={4} padding={0}>
              {/* Lessons Section */}
              <Box marginTop="0.7rem">
                <Button
                  bg={Light.lightGreenlite}
                  onClick={console.log} // TODO: Handle this
                  width="100%"
                  height="3.5rem"
                  justifyContent="flex-start"
                  textAlign="left"
                  padding="1rem"
                  borderRadius="1rem"
                >
                  <HStack color={Light.darkGreen} gap="0.8rem">
                    {" "}
                    {/* Ensure consistent spacing */}
                    <Icon as={FaVideo} w="1.5rem" h="1.5rem" />
                    <Text
                      fontWeight="bold"
                      fontSize="1.25rem"
                      marginBottom="0.3rem"
                    >
                      Lessons
                    </Text>
                  </HStack>
                </Button>

                <VStack align="stretch" gap="1rem" marginTop="1rem">
                  {classData.lectures.map((lecture) => (
                    <Button
                      color={Light.black100}
                      key={lecture.lectureId}
                      variant="ghost"
                      overflow="hidden"
                      justifyContent="flex-start"
                      width={{ base: "16rem", md: "16rem", lg: "22rem" }}
                      height="3.5rem"
                      borderRadius="0.9rem"
                      borderWidth="1px"
                      borderColor={Light.black20} // 1px border with 10% black opacity
                      onClick={() => handleEachLectureClick(lecture)}
                      bg={
                        selectedLesson === lecture.classId
                          ? DopamineLiteColors.lightGreenColor
                          : "transparent"
                      }
                      _hover={{
                        bg: DopamineLiteColors.lightGreenColor,
                        color: DopamineLiteColors.greenColor,
                      }}
                    >
                      <VStack align="start" gap={0}>
                        <Text
                          color={Light.black70}
                          fontSize="1.05rem"
                          fontWeight="400px"
                        >
                          Lesson {lecture.title}
                        </Text>
                        <Text fontSize="0.8rem" color={Light.black60}>
                          {lecture.title}
                        </Text>
                      </VStack>
                      <Icon boxSize={3} marginLeft={"auto"} marginRight="1rem">
                        <FaChevronRight />
                      </Icon>
                    </Button>
                  ))}
                </VStack>
              </Box>

              {/* Notes Section */}
              <Box>
                <Button
                  bg={Light.lightGreenlite}
                  onClick={console.log} // TODO: Handle this
                  width="100%"
                  height="3.5rem"
                  justifyContent="flex-start"
                  textAlign="left"
                  padding="1rem"
                  borderRadius="1rem"
                  marginTop="2rem"
                >
                  <HStack color={Light.darkGreen} gap="0.8rem">
                    <Icon as={FaNotesMedical} w="1.5rem" h="1.5rem" />
                    <Text
                      fontWeight="bold"
                      fontSize="1.25rem"
                      marginBottom="0.3rem"
                    >
                      Notes
                    </Text>
                  </HStack>
                </Button>

                <VStack align="stretch" gap="1rem" marginTop="1rem">
                  {classData.notes.map((notes) => (
                    <Button
                      key={`note-${notes.noteId}`}
                      variant="ghost"
                      justifyContent="flex-start"
                      width={{ base: "16rem", md: "16rem", lg: "22rem" }}
                      height="3.5rem"
                      borderRadius="0.9rem"
                      borderWidth="1px"
                      overflow="hidden"
                      borderColor={Light.black20}
                      onClick={() => handleEachNoteClick(notes)}
                      _hover={{
                        bg: Light.lightGreenHover,
                        color: Light.darkGreen,
                      }}
                    >
                      <VStack align="start" gap={0}>
                        <Text
                          textAlign="left"
                          color={Light.black70}
                          fontSize={{
                            base: "0.9rem",
                            md: "1rem",
                            lg: "1.05rem",
                          }} // Responsive font size
                          fontWeight="500"
                          width={{ base: "12rem", md: "16rem", lg: "16rem" }}
                        >
                          Notes for Lesson {notes.belongingLesson}
                        </Text>
                        {/* TODO: Check if this is the correct way to display
                        notes */}
                      </VStack>
                      <Icon
                        boxSize={3}
                        marginLeft={"auto"}
                        marginRight="1rem"
                        color={Light.black100}
                      >
                        <FaChevronRight />
                      </Icon>
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
