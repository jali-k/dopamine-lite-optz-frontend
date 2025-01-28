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
  SimpleGrid,
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

const HomePage = () => {
  const navigator = useNavigate();

  return (
    <Box bg="#F0F0F0" minHeight="100vh" paddingTop={{ base: "1rem", md: "2.5rem" }}>
      {/* Hero Section */}
      <Flex
        w="93%"
        mx="auto"
        direction={{ base: "column", md: "row" }}
        bg="#F9F7F7"
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
              fontSize={{ base: "60px", md: "85px" }} // Adjusted font size for mobile
              color="#000000"
              lineHeight="90px"
            >
              Discover the Wonder of
            </Text>
            <Text
              fontFamily="Bricolage Grotesque"
              color="#387259"
              fontWeight="600"
              fontSize={{ base: "80px", md: "115px" }} // Adjusted font size for mobile
              lineHeight="120px"
            >
              Biology
            </Text>
          </Heading>

          <Text
            fontSize={{ base: "sm", md: "lg" }} // Adjusted font size for mobile
            color="#000000BF"
            lineHeight="1.5"
            maxW="30rem"
            marginTop="3.5rem"
            marginLeft="20px"
          >
            Interactive lessons and resources to make learning biology engaging and effective.
          </Text>
          <HStack 
            marginTop="3rem"
            marginLeft="20px"
            gap={8}
          >
            <Button
              width={{ base: "10rem", md: "12.46rem" }}
              height="3rem"
              borderRadius="0.817rem"
              background="#FFA500"
              boxShadow="0rem 0.25rem 0.35rem 0rem #0000001C"
              _hover={{
                transform: "scale(1.05)",
                transition: "transform 0.2s ease-in-out",
              }}
            >
              <Text fontWeight="bold" fontSize="lg" color="#FFFFFF">
                Start Learning
              </Text>
            </Button>
            <Button
              onClick={() => navigator("/classes")}
              width={{ base: "10rem", md: "12.46rem" }}
              height="3rem"
              borderRadius="0.817rem"
              background="#FFFFFF"
              boxShadow="0rem 0.25rem 0.35rem 0rem #0000001C"
              border="1px solid #00000033"
              _hover={{
                transform: "scale(1.05)",
                transition: "transform 0.2s ease-in-out",
              }}
            >
              <Text fontWeight="bold" fontSize="lg" color="#000000">
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
      <SimpleGrid
        bg="transparent"
        position="relative"
        top={{ base: "-3rem", md: "-5rem" }} // Adjusted for smaller screen sizes
        zIndex={10}
        columns={{ base: 1, sm: 2, md: 3 }}
        gap={{ base: "2rem", md: "4rem" }} // Adjusted gap for mobile
        padding={{ base: "1rem", md: "2rem" }} // Adjusted padding for mobile
        width="94%"
        mx="auto"
        mt="2rem"
        borderRadius="1rem"
        marginBlock={0}
      >
        {/* Interactive Lessons */}
        <Box
          bg="#387259"
          borderRadius="10px"
          w="100%" // Makes it responsive
          maxW="22rem" // maxWidth in rem for consistency
          h="8.3125rem" // Height in rem
          textAlign="center"
          boxShadow="0 0.25rem 0.5rem rgba(0, 0, 0, 0.1)"
          padding="1.5rem"
        >
          <Flex>
            <Image src={BookImage} w="4.6875rem" h="4.6875rem" /> {/* Image size in rem */}
            <Box ml="1rem">
              <Text fontSize={{ base: "1.75rem", md: "2rem" }} fontWeight="bold" color="white" textAlign="left">
                100+
              </Text>
              <Text fontSize={{ base: "1.25rem", md: "1.5rem" }} color="white" textAlign="left">
                Interactive Lessons
              </Text>
            </Box>
          </Flex>
        </Box>

        {/* Virtual Labs */}
        <Box
          bg="#387259"
          borderRadius="10px"
          w="100%" // Makes it responsive
          maxW="22rem"
          h="8.3125rem"
          textAlign="center"
          boxShadow="0 0.25rem 0.5rem rgba(0, 0, 0, 0.1)"
          padding="1.5rem"
        >
          <Flex>
            <Image src={MicroImage} w="4.6875rem" h="4.6875rem" />
            <Box ml="1rem">
              <Text fontSize={{ base: "1.75rem", md: "2rem" }} fontWeight="bold" color="white" textAlign="left">
                50+
              </Text>
              <Text fontSize={{ base: "1.25rem", md: "1.5rem" }} color="white" textAlign="left">
                Virtual Labs
              </Text>
            </Box>
          </Flex>
        </Box>

        {/* Active Students */}
        <Box
          bg="#387259"
          borderRadius="10px"
          w="100%" // Makes it responsive
          maxW="22rem"
          h="8.3125rem"
          textAlign="center"
          boxShadow="0 0.25rem 0.5rem rgba(0, 0, 0, 0.1)"
          padding="1.5rem"
        >
          <Flex>
            <Image src={TeamImage} w="4.6875rem" h="4.6875rem" />
            <Box ml="1rem">
              <Text fontSize={{ base: "1.75rem", md: "2rem" }} fontWeight="bold" color="white" textAlign="left">
                10,000+
              </Text>
              <Text fontSize={{ base: "1.25rem", md: "1.5rem" }} color="white" textAlign="left">
                Active Students
              </Text>
            </Box>
          </Flex>
        </Box>
      </SimpleGrid>

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
          color="#000000"
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
          color="#000000"
          width={{ base: "90%", md: "80%", lg: "705px" }}
          mx="auto"
        >
          Explore our wide range of biology topics
        </Text>

        <SimpleGrid
          bg="transparent"
          position="relative"
          zIndex={10}
          columns={{ base: 1, sm: 2, md: 3 }}
          paddingTop={{ base: "1.5rem", md: "2.5rem" }} // Adjusted padding for mobile
          w="90%"
          mx="auto"
          borderRadius="1rem"
          gap={{ base: "2rem", md: "4rem" }} // Adjusted gap for better spacing across devices
          marginBlock={0}
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
        </SimpleGrid>
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
        bg="#FFFFFF"
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
            color="#000000"
          >
            Meet Your Biology Expert
          </Text>
          <Text
            fontFamily="Bricolage Grotesque"
            fontSize={{ base: "1.75rem", md: "24px" }}
            fontWeight="500"
            textAlign="center"
            color="#000000"
          >
            Mr. Sashanka Dhanujaya, MBBS(UG)
          </Text>
          <Text
            marginTop="25px"
            fontFamily="Bricolage Grotesque"
            fontSize={{ base: "1.75rem", md: "20px" }}
            fontWeight="300"
            textAlign="center"
            color="#000000"
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
      <SimpleGrid
        bg="transparent"
        marginTop="8rem"
        marginBottom="10px"
        width="96%"
        columns={{ base: 1, sm: 2, md: 3 }}
        mx="auto"
        gap={{ base: "1rem", md: "2rem" }} // Adds spacing between cards
      >
        <TestimonialCard
          name="Alex Jay"
          grade="A Grade (2024)"
          date="23/12/2024"
          avatarUrl="https://via.placeholder.com/60"
          title="Super Class With Great Experience!"
          testimonial="I absolutely enjoyed my biology class this semester! The material
            covered was both challenging and fascinating. From learning about the
            cell's intricate processes to diving deep into genetics, each topic
            was presented in a way that was easy to understand. The teacher did
            an excellent job of explaining complex concepts, using visual aids
            and real-life examples that made everything more relatable."
        />
        <TestimonialCard
          name="Alex Jay"
          grade="A Grade (2024)"
          date="23/12/2024"
          avatarUrl="https://via.placeholder.com/60"
          title="Super Class With Great Experience!"
          testimonial="I absolutely enjoyed my biology class this semester! The material
            covered was both challenging and fascinating. From learning about the
            cell's intricate processes to diving deep into genetics, each topic
            was presented in a way that was easy to understand. The teacher did
            an excellent job of explaining complex concepts, using visual aids
            and real-life examples that made everything more relatable."
        />
        <TestimonialCard
          name="Alex Jay"
          grade="A Grade (2024)"
          date="23/12/2024"
          avatarUrl="https://via.placeholder.com/60"
          title="Super Class With Great Experience!"
          testimonial="I absolutely enjoyed my biology class this semester! The material
            covered was both challenging and fascinating. From learning about the
            cell's intricate processes to diving deep into genetics, each topic
            was presented in a way that was easy to understand. The teacher did
            an excellent job of explaining complex concepts, using visual aids
            and real-life examples that made everything more relatable."
        />
      </SimpleGrid>

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
          color="#000000"
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
          color="#000000"
          width={{ base: "90%", md: "80%", lg: "705px" }}
          mx="auto"
        >
          Connect with fellow students and get instant updates through our Telegram groups
        </Text>
        </Box>

        <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3 }}
        gap="1.5rem"
        padding="2rem"
        maxW="1200px"
        mx="auto"
        mt="2rem"
        borderRadius="1rem"
        justifyItems="center"
      >
        <TelegramGroupCard />
        <TelegramGroupCard />
        <TelegramGroupCard />
      </SimpleGrid>


      {/* section 5 */}
    </Box>
  );
};

export default HomePage;
