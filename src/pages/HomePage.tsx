import { useNavigate } from "react-router-dom";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  HStack,
  VStack,
} from "@chakra-ui/react";
import Hcard from "@/components/ui/homecard";
import TestimonialCard from "@/components/ui/Homecard1";
import HomeStatisticsComponent from "@/components/ui/AchievementHighlights";
import PlantImage from "../styles/Plant.png";
import BookImage from "../styles/book.png";
import MicroImage from "../styles/micro.png";
import TeamImage from "../styles/team.png";
import MolecularImage from "../styles/Molecular.png";
import HeartImage from "../styles/heart.png";
import RecycleImage from "../styles/recycle.png";
import TeacherImage from "../styles/teacher.png";
import TelegramGroupCard from "@/components/ui/TelegramGroupCard";
import { DopamineLiteColors } from "../themes/colors"


const HomePage = () => {
  const navigator = useNavigate();
  const Light = DopamineLiteColors;
  return (
    <Box bg={Light.backgroundWhite} minHeight="100vh" paddingTop={{ base: "0rem", md: "0rem" }}>
      {/* Hero Section */}
      <Flex
        w="93%"
        mx="auto"
        direction={{ base: "column", md: "row" }}
        bg={Light.componentWhite}
        borderRadius="2.48rem"
        zIndex={1}
        height={{ base: "auto", md: "44.4375rem" }} // Consistent height
        boxSizing="border-box"
        overflow="hidden"
      >
        {/* Left Content */}
        <VStack
          align="start"
          flex="1"
          padding={{ base: "1rem", md: "2.5rem" }} // Adjusted padding
          marginBottom={{ base: "2rem", md: "0" }}
        >
          <Heading
            textAlign="left"
            zIndex={2}
            width={{ base: "90%", md: "453px" }}
            height={{ base: "auto", md: "266px" }}
            marginLeft="20px"
          >
            <Text
              fontFamily="Bricolage Grotesque"
              fontWeight="600"
              fontSize={{ base: "60px", md: "65px", lg : "85px" }} // Adjusted font size for mobile
              color={Light.black100}
              lineHeight="90px"
            >
              Discover the Wonder of
            </Text>
            <Text
              fontFamily="Bricolage Grotesque"
              color={Light.darkGreen}
              fontWeight="600"
              fontSize={{ base: "80px", md: "95px", lg : "115px" }} // Adjusted font size for mobile
              lineHeight="120px"
            >
              Biology
            </Text>
          </Heading>

          <Text
            fontSize={{ base: "sm", md: "lg" }} // Adjusted font size for mobile
            color={Light.black75}
            lineHeight="1.5"
            maxW="30rem"
            marginTop="3.5rem"
            marginLeft="20px"
          >
            Interactive lessons and resources to make learning biology engaging and effective.
          </Text>
          <HStack 
            marginTop="3rem"
            marginLeft={{ base: "10px", md: "20px" }} 
            gap={8}
          >
            <Button
              width={{ base: "10rem", md: "12.46rem" }}
              height="3rem"
              borderRadius="0.817rem"
              background={Light.orange}
              boxShadow={Light.boxShadow}
              _hover={{
                transform: "scale(1.05)",
                transition: "transform 0.2s ease-in-out",
              }}
            >
              <Text fontWeight="bold" fontSize="lg" color={Light.white100}>
                Start Learning
              </Text>
            </Button>
            <Button
              onClick={() => navigator("/classes")}
              width={{ base: "10rem", md: "12.46rem" }}
              height="3rem"
              borderRadius="0.817rem"
              background={Light.white100}
              boxShadow={Light.boxShadow}
              border={Light.border}
              _hover={{
                transform: "scale(1.05)",
                transition: "transform 0.2s ease-in-out",
              }}
            >
              <Text fontWeight="bold" fontSize="lg" color={Light.black100}>
                Browse Courses
              </Text>
            </Button>
          </HStack>
        </VStack>

        {/* Right Image */}
        <Box
          flex="1"
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100%"
        >
          <Image
            src={PlantImage}
            alt="Plant illustration"
            objectFit="cover"
            height="100%"
            width="100%"
            borderBottomRightRadius="2.48rem"
            borderTopRightRadius="2.48rem"
          />
        </Box>
      </Flex>

      {/* Section 2 */}
      <Flex
        flexDir={{ base: "column", md: "row" }} // Stack on mobile, row on desktop
        align="center"
        justify="center"
        bg="transparent"
        position="relative"
        top={{ base: "-2rem", md: "-5rem" }} // Adjusted for smaller screen sizes
        zIndex={10}
        gap={{ base: "1rem", md: "2rem", lg: "8rem" }} // Adjusted gap for better spacing
        padding={{ base: "1rem", md: "2rem" }} // Adjusted padding for mobile
        width="94%"
        mx="auto"
        mt="2rem"
        borderRadius="1rem"
      >
        {/* Interactive Lessons */}
        <Box
          bg={Light.darkGreen}
          borderRadius="10px"
          w="100%" // Makes it responsive
          maxW="22rem"
          h="auto"
          textAlign="center"
          boxShadow={Light.boxShadow}
          padding="1.5rem"
        >
          <Flex align="center">
            <Image src={BookImage} w={{ base: "3.5rem", md: "4.6875rem" }} h={{ base: "3.5rem", md: "4.6875rem" }} />
            <Box ml="1rem">
              <Text fontSize={{ base: "1.5rem", md: "2rem" }} fontWeight="bold" color={Light.white100} textAlign="left">
                100+
              </Text>
              <Text fontSize={{ base: "1rem", md: "1.5rem" }} color={Light.white100} textAlign="left">
                Interactive Lessons
              </Text>
            </Box>
          </Flex>
        </Box>

        {/* Virtual Labs */}
        <Box
          bg={Light.darkGreen}
          borderRadius="10px"
          w="100%"
          maxW="22rem"
          h="auto"
          textAlign="center"
          boxShadow={Light.boxShadow}
          padding="1.5rem"
        >
          <Flex align="center">
            <Image src={MicroImage} w={{ base: "3.5rem", md: "4.6875rem" }} h={{ base: "3.5rem", md: "4.6875rem" }} />
            <Box ml="1rem">
              <Text fontSize={{ base: "1.5rem", md: "2rem" }} fontWeight="bold" color={Light.white100} textAlign="left">
                50+
              </Text>
              <Text fontSize={{ base: "1rem", md: "1.5rem" }} color={Light.white100} textAlign="left">
                Virtual Labs
              </Text>
            </Box>
          </Flex>
        </Box>

        {/* Active Students */}
        <Box
          bg={Light.darkGreen}
          borderRadius="10px"
          w="100%"
          maxW="22rem"
          h="auto"
          textAlign="center"
          boxShadow={Light.boxShadow}
          padding="1.5rem"
        >
          <Flex align="center">
            <Image src={TeamImage} w={{ base: "3.5rem", md: "4.6875rem" }} h={{ base: "3.5rem", md: "4.6875rem" }} />
            <Box ml="1rem">
              <Text fontSize={{ base: "1.5rem", md: "2rem" }} fontWeight="bold" color={Light.white100} textAlign="left">
                10,000+
              </Text>
              <Text fontSize={{ base: "1rem", md: "1.5rem" }} color={Light.white100} textAlign="left">
                Active Students
              </Text>
            </Box>
          </Flex>
        </Box>
      </Flex>


      {/*section 2 */}
      <Box
        position="relative"
        width="100%"
        textAlign="center"
        marginTop={{ base: "-3rem", md: "-5rem" }} // Adjusted for smaller screen sizes
        marginBottom={0}
      >
        <Text
          fontFamily="Bricolage Grotesque"
          fontSize={{ base: "1.5rem", md: "2rem", lg: "2.75rem" }} // Consistent font size scaling
          fontWeight="600"
          lineHeight={{ base: "2rem", md: "2.5rem" }} // Adjusted line height for readability
          textAlign="center"
          color={Light.black100}
          width={{ base: "90%", md: "80%", lg: "705px" }}
          mx="auto"
          marginTop={{ base: "1rem", md: "2rem" }}
        >
          Comprehensive Learning Experience
        </Text>

        <Text
          fontFamily="Bricolage Grotesque"
          fontSize={{ base: "0.875rem", md: "1.1rem" }} // Reduced font size for better consistency
          fontWeight="400"
          lineHeight={{ base: "1.2rem", md: "1.6rem" }} // Adjusted line height
          textAlign="center"
          color={Light.black100}
          width={{ base: "90%", md: "80%", lg: "705px" }}
          mx="auto"
        >
          Explore our wide range of biology topics
        </Text>
        <Flex
          flexDir={{ base: "column", md: "row" }}
          bg="transparent"
          position="relative"
          zIndex={10}
          columns={{ base: 1, sm: 2, md: 3 }}
          paddingTop={{ base: "1.5rem", md: "2.5rem" }}
          w="90%"
          mx="auto"
          borderRadius="1rem"
          gap={{ base: "1.5rem", sm: "2rem", md: "3rem" }} // Adjusted for better responsiveness
        >
          <Hcard
            title="Molecular Biology"
            description="Explore DNA, RNA, and cellular processes"
            imageUrl={MolecularImage}
          />
          <Hcard
            title="Ecology & Environment"
            description="Study ecosystems and environmental biology"
            imageUrl={RecycleImage}
          />
          <Hcard
            title="Human Biology"
            description="Learn about anatomy and physiology"
            imageUrl={HeartImage}
          />
        </Flex>

      </Box>



      {/* section 3*/}
      <Flex
        padding="2.5rem"
        borderTopRightRadius="40px"
        borderBottomLeftRadius="40px"
        marginTop={{ base: "2rem", md: "4rem" }} // Adjusted margin-top for mobile
        position="relative" 
        w="90%"
        mx="auto"
        bg={Light.white100}
        marginBottom="10rem"
        direction={{ base: "column", md: "row" }} // Stacks the elements vertically on smaller screens
      >
        <Box
          width={{ base: "100%", md: "50%" }} // Full width on mobile, 50% on desktop
          padding="0.5rem"
          textAlign="center" // Ensures all text is centered for mobile
        >
          <Text
            fontFamily="Bricolage Grotesque"
            fontSize={{ base: "1.75rem", md: "40px" }}
            fontWeight="bold"
            textAlign="center"
            color={Light.black100}
          >
            Meet Your Biology Expert
          </Text>
          <Text
            fontFamily="Bricolage Grotesque"
            fontSize={{ base: "1.75rem", md: "24px" }}
            fontWeight="500"
            textAlign="center"
            color={Light.black100}
          >
            Mr. Sashanka Dhanujaya, MBBS(UG)
          </Text>
          <Text
            marginTop="25px"
            fontFamily="Bricolage Grotesque"
            fontSize={{ base: "1.75rem", md: "20px" }}
            fontWeight="300"
            textAlign="center"
            color={Light.black100}
          >
            With over 5 years of teaching experience, Mr. Sashanka has helped thousands of students achieve their academic goals. His innovative teaching methods and deep understanding of biology make complex concepts easy to grasp.
          </Text>
        </Box>
        <Image
          marginTop={{ base: "2rem", md: "0" }} // Adds margin on top for mobile
          marginLeft={{ base: "0", md: "5rem" }} // Removes left margin on mobile
          src={TeacherImage}
          width={{ base: "100%", md: "435px" }} // 100% width for mobile, fixed width on desktop
          height="auto" // Makes the height responsive
        />
      </Flex>


      {/* section 3*/}
      <Box
        marginBottom="20px"
        marginTop="-3rem" 
      >
        <HomeStatisticsComponent />
      </Box>


      {/* section 4*/}
      <Flex
        flexDir={{ base: "column", md: "row" }}
        flexWrap="wrap"
        justify="center"
        align="center"
        bg="transparent"
        marginTop="4rem"
        marginBottom="2rem"
        width="100%"
        maxW="1200px"
        mx="auto"
        gap={{ base: "1rem", md: "4rem" }} // Better spacing across screens
      >
        {[
          {
            name: "Alex Jay",
            grade: "A Grade (2024)",
            date: "23/12/2024",
            avatarUrl: "https://via.placeholder.com/60",
            title: "Super Class With Great Experience!",
            testimonial:
              "I absolutely enjoyed my biology class this semester! The materialcovered was both challenging and fascinating. From learning about thecell's intricate processes to diving deep into genetics, each topicwas presented in a way that was easy to understand. The teacher did an excellent job of explaining complex concepts, using visual aidsand real-life examples that made everything more relatable.",
          },
          {
            name: "Alex Jay",
            grade: "A Grade (2024)",
            date: "23/12/2024",
            avatarUrl: "https://via.placeholder.com/60",
            title: "Super Class With Great Experience!",
            testimonial:
              "I absolutely enjoyed my biology class this semester! The materialcovered was both challenging and fascinating. From learning about thecell's intricate processes to diving deep into genetics, each topicwas presented in a way that was easy to understand. The teacher did an excellent job of explaining complex concepts, using visual aidsand real-life examples that made everything more relatable.",
          },
          {
            name: "Alex Jay",
            grade: "A Grade (2024)",
            date: "23/12/2024",
            avatarUrl: "https://via.placeholder.com/60",
            title: "Super Class With Great Experience!",
            testimonial:
              "I absolutely enjoyed my biology class this semester! The materialcovered was both challenging and fascinating. From learning about thecell's intricate processes to diving deep into genetics, each topicwas presented in a way that was easy to understand. The teacher did an excellent job of explaining complex concepts, using visual aidsand real-life examples that made everything more relatable.",
          },
        ].map((testimonial, index) => (
          <Box
            key={index}
            flex="1 1 300px" // Allows wrapping
            maxWidth="400px" // Prevents excessive stretching
            width="100%"
          >
            <TestimonialCard {...testimonial} />
          </Box>
        ))}
      </Flex>


      <Box
        position="relative"
        width="100%"
        textAlign="center"
        marginTop="5rem"
        marginBottom={0}
      >
        <Text
          fontFamily="Bricolage Grotesque"
          fontSize={{ base: "1.5rem", md: "2.5rem", lg: "2.75rem" }} 
          fontWeight="600"
          lineHeight={{ base: "2rem", md: "3rem" }} 
          textAlign="center"
          color={Light.black100}
          width={{ base: "90%", md: "80%", lg: "705px" }} 
          mx="auto"
          marginTop={{ base: "1rem", md: "2rem" }} 
        >
          Join Our Learning Community
        </Text>
        <Text
          fontFamily="Bricolage Grotesque"
          fontSize={{ base: "0.875rem", md: "1.3rem" }}
          fontWeight="400"
          lineHeight={{ base: "1.2rem", md: "1.7rem" }}
          textAlign="center"
          color={Light.black100}
          width={{ base: "90%", md: "80%", lg: "705px" }}
          mx="auto"
        >
          Connect with fellow students and get instant updates through our Telegram groups
        </Text>
        </Box>
        <Text color={"green"}>{"aaaasddss"}</Text>

        <Flex
        flexDir={{ base: "column", md: "row" }}
        flexWrap="wrap"
        justify="center"
        align="center"
        bg="transparent"
        marginTop="4rem"
        marginBottom="2rem"
        width="82%"
        maxW="1200px"
        mx="auto"
        gap={{ base: "1rem", md: "4rem" }} // Better spacing across screens
        >
          <Box flex="1 1 18.75rem" maxW="25rem" width="100%" minWidth="17.5rem">
            <TelegramGroupCard />
          </Box>

          <Box flex="1 1 18.75rem" maxW="25rem" width="100%" minWidth="17.5rem">
            <TelegramGroupCard />
          </Box>

          <Box flex="1 1 18.75rem" maxW="25rem" width="100%" minWidth="17.5rem">
            <TelegramGroupCard />
          </Box>
        </Flex>
    </Box>
  );
};

export default HomePage;
