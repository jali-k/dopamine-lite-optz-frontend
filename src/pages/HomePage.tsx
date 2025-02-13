import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
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
import PlantImage from "../styles/Plant.png";
import BookImage from "../styles/book.png";
import MicroImage from "../styles/micro.png";
import TeamImage from "../styles/team.png";
import MolecularImage from "../styles/Molecular.png";
import HeartImage from "../styles/heart.png";
import RecycleImage from "../styles/recycle.png";
import TeacherImage from "../styles/teacher.png";
import TelegramGroupCard from "@/components/ui/TelegramGroupCard";
import Background from "../styles/StatisticsComponent_background.png";
import graduation from "../styles/StatisticsComponent_grajuation.png";
import teaching from "../styles/StatisticsComponent_teaching.png";
import star from "../styles/StatisticsComponent_five_star.png";
import grade from "../styles/StatisticsComponent_grades.png";
import { DopamineLiteColors } from "../themes/colors"
import { useInView } from 'react-intersection-observer';
const MotionBox = motion(Box);

const HomePage = () => {
  const navigator = useNavigate();
  const Light = DopamineLiteColors;

  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true, threshold: 0.5 });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true, threshold: 1 });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true, threshold: 0.7});
  const { ref: ref4, inView: inView4 } = useInView({ triggerOnce: true, threshold: 0.5 });
  const { ref: ref5, inView: inView5 } = useInView({ triggerOnce: true, threshold: 0.5 });
  const { ref: ref6, inView: inView6 } = useInView({ triggerOnce: true, threshold: 0.5 });

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
        height={{ base: "auto", md: "44.4375rem" }}
        boxSizing="border-box"
        overflow="hidden"
      >
        <MotionBox
          initial={{ x: '-50%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2.3, ease: 'easeOut', type: 'spring', stiffness: 100, damping: 12, overshootClamping: false }}
          as={VStack}
          flex="1"
          marginLeft={{ base: "0", md: "-2rem" }} // Adjusted margin for better alignment
        >
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
        </MotionBox>

        <MotionBox
          initial={{ x: '50%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2.3, ease: 'easeOut', type: 'spring', stiffness: 100, damping: 12, overshootClamping: false }}
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
        </MotionBox>
      </Flex>


      {/* Section 2 */}
      <MotionBox
        ref={ref1} 
        initial={{ opacity: 0.7, y: '50%' }}  
        animate={{ opacity: inView1 ? 1 : 0, y: inView1 ? 0 : '50%' }} 
        transition={{ duration: 2.3, ease: 'easeOut', type: 'spring', stiffness: 100, damping: 15 }}
      >
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
      </MotionBox>
      


      {/*section 2 */}
      <Box
        ref={ref2} 
        position="relative"
        width="100%"
        textAlign="center"
        marginTop={{ base: "-3rem", md: "-5rem" }} // Adjusted for smaller screen sizes
        marginBottom={0}
      >
        <MotionBox
          initial={{ opacity: 0.7, y: '-100%' }}  
          animate={{ opacity: inView2 ? 1 : 0, y: inView2 ? 0 : '-100%' }} 
          transition={{ duration: 2.3, ease: 'easeOut', type: 'spring', stiffness: 100, damping: 15 }}
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
        </MotionBox>
        <MotionBox
          initial={{ opacity: 0.7, y: '100%' }}  
          animate={{ opacity: inView2 ? 1 : 0, y: inView2 ? 0 : '100%' }} 
          transition={{ duration: 2.3, ease: 'easeOut', type: 'spring', stiffness: 100, damping: 15 }}
          >
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
        </MotionBox>
      </Box>



      {/* section 3*/}
      <Flex
        ref={ref3}
        padding="2.5rem"
        borderTopRightRadius="40px"
        borderBottomLeftRadius="40px"
        marginTop={{ base: "2rem", md: "4rem" }}
        position="relative"
        w="90%"
        mx="auto"
        bg="#ffffff" // Light.white100 fallback
        marginBottom="10rem"
        direction={{ base: "column", md: "row" }}
      >
        <MotionBox
          initial={{ x: '-50%', opacity: 0 }}
          animate={{ x: inView3 ? '0%' : '-50%', opacity: inView3 ? 1 : 0 }}
          transition={{ duration: 1.5, ease: 'easeOut', type: 'spring', stiffness: 100, damping: 12 }}
          width={{ base: "100%", md: "50%" }}
          padding="0.5rem"
          textAlign="center"
          marginTop={{ base: "2rem", md: "5rem" }}
        >
          <Text
            fontFamily="Bricolage Grotesque"
            fontSize={{ base: "1.75rem", md: "40px" }}
            fontWeight="bold"
            textAlign="center"
            color="#000000" // Light.black100 fallback
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
        </MotionBox>

        <MotionBox
          initial={{ x: '50%', opacity: 0 }}
          animate={{ x: inView3 ? '0%' : '50%', opacity: inView3 ? 1 : 0 }}
          transition={{ duration: 1.5, ease: 'easeOut', type: 'spring', stiffness: 100, damping: 12 }}
          width={{ base: "100%", md: "50%" }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Image
            src={TeacherImage}
            width={{ base: "100%", md: "435px" }}
            height="auto"
            alt="Biology Expert"
          />
        </MotionBox>
      </Flex>

      {/* section 3*/}
      <Box
        ref={ref4}
        marginBottom="20px"
        marginTop="-3rem" 
      >
            <Box
              bg={`linear-gradient(rgba(50, 85, 65, 0.64), rgba(50, 85, 65, 0.64)), url(${Background})`}
              bgSize="cover"
              backgroundPosition="center -100px"
              py={5}  // Adjust padding to a positive value for better layout
              px={4}
            >
              <Flex 
                justify="center" 
                align="center" 
                gap={8} 
                wrap="wrap"
                mx="auto"
                maxW="1200px"
              >
                {/* Statistic 1 */}
                <MotionBox
                  initial={{ x: '-50%', opacity: 0 }}
                  animate={{ x: inView4 ? '0%' : '-50%', opacity: inView4 ? 1 : 0 }}
                  transition={{ duration: 1.5, ease: 'easeOut', type: 'spring', stiffness: 100, damping: 12 }}
                >
                  <HStack>
                  <VStack
                      bg="rgba(255, 255, 255, 0.15)"
                      borderRadius="80px"
                      p={10} // Increased padding
                      textAlign="center"
                      backdropFilter="blur(10px)"
                      my={10}
                      mx={8}
                      width="160px" // Increased width
                      border="1px solid white"
                      >
                      <Image
                          src={graduation}
                          alt="Teaching Icon"
                          boxSize="70px" // Increased box size
                          mb={2} // Increased margin below the image
                      />
                      <Text
                          fontSize="3xl"
                          fontWeight="bold"
                          color="white"
                          maxW="180px"
                          mx="auto"
                          lineHeight="1.2"
                      >
                          15+
                      </Text>
                      <Text
                          fontSize="20px"
                          color="whiteAlpha.800"
                          maxW="160px"
                          mx="auto"
                          lineHeight="1.2"
                          textAlign="center"
                      >
                          Years <br /> Teaching
                      </Text>
                  </VStack>

                  {/* Statistic 2 */}
                  <VStack
                      bg="rgba(255, 255, 255, 0.15)"
                      borderRadius="80px"
                      p={10} // Increased padding
                      textAlign="center"
                      backdropFilter="blur(10px)"
                      my={10}
                      mx={8}
                      width="160px" // Increased width
                      border="1px solid white"
                      >
                      <Image
                          src={teaching}
                          alt="Teaching Icon"
                          boxSize="70px" // Increased box size
                          mb={2} // Increased margin below the image
                      />
                      <Text
                          fontSize="3xl"
                          fontWeight="bold"
                          color="white"
                          maxW="180px"
                          mx="auto"
                          lineHeight="1.2"
                      >
                          5,000+
                      </Text>
                      <Text
                          fontSize="20px"
                          color="whiteAlpha.800"
                          maxW="180px"
                          mx="auto"
                          lineHeight="1.2"
                          textAlign="center"
                      >
                          Students <br />Taught
                      </Text>
                  </VStack>
                  </HStack>
                </MotionBox>


                {/* Statistic 3 */}
                <MotionBox
                  initial={{ x: '50%', opacity: 0 }}
                  animate={{ x: inView4 ? '0%' : '50%', opacity: inView4 ? 1 : 0 }}
                  transition={{ duration: 1.5, ease: 'easeOut', type: 'spring', stiffness: 100, damping: 12 }}
                >
                  <HStack>
                  <VStack
                      bg="rgba(255, 255, 255, 0.15)"
                      borderRadius="80px"
                      p={10} // Increased padding
                      textAlign="center"
                      backdropFilter="blur(10px)"
                      my={10}
                      mx={8}
                      width="160px" // Increased width
                      border="1px solid white"
                      >
                      <Image
                          src={star}
                          alt="Teaching Icon"
                          boxSize="70px" // Increased box size
                          mb={2} // Increased margin below the image
                      />
                      <Text
                          fontSize="3xl"
                          fontWeight="bold"
                          color="white"
                          maxW="180px"
                          mx="auto"
                          lineHeight="1.2"
                      >
                          98%
                      </Text>
                      <Text
                          fontSize="20px"
                          color="whiteAlpha.800"
                          maxW="180px"
                          mx="auto"
                          lineHeight="1.2"
                          textAlign="center"
                      >
                          Success <br />Rate
                      </Text>
                  </VStack>

                  {/* Statistic 4 */}
                  <VStack
                      bg="rgba(255, 255, 255, 0.15)"
                      borderRadius="80px"
                      p={10} // Increased padding
                      textAlign="center"
                      backdropFilter="blur(10px)"
                      my={10}
                      mx={8}
                      width="160px" // Increased width
                      border="1px solid white"
                      >
                      <Image
                          src={grade}
                          alt="Teaching Icon"
                          boxSize="70px" // Increased box size
                          mb={2} // Increased margin below the image
                      />
                      <Text
                          fontSize="3xl"
                          fontWeight="bold"
                          color="white"
                          maxW="180px"
                          mx="auto"
                          lineHeight="1.2"
                      >
                          200+
                      </Text>
                      <Text
                          fontSize="20px"
                          color="whiteAlpha.800"
                          maxW="180px"
                          mx="auto"
                          lineHeight="1.2"
                          textAlign="center"
                      >
                          A <br />Grade
                      </Text>
                  </VStack>
                  </HStack>
                </MotionBox>
              </Flex>
            </Box>
      </Box>


      {/* section 4*/}
      <MotionBox
        ref={ref5}
        initial={{ x: '50%', opacity: 0 }}
        animate={{ x: inView5 ? '0%' : '50%', opacity: inView5 ? 1 : 0 }}
        transition={{ duration: 2.5, ease: 'easeOut', type: 'spring', stiffness: 100, damping: 12 }}
        >
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
      </MotionBox>

      <Box ref={ref6}>
      <MotionBox
        position="relative"
        width="100%"
        textAlign="center"
        marginTop="5rem"
        marginBottom={0}
        initial={{ opacity: 0.7, y: '-100%' }}  
        animate={{ opacity: inView6 ? 1 : 0, y: inView6 ? 0 : '-100%' }} 
        transition={{ duration: 2.3, ease: 'easeOut', type: 'spring', stiffness: 100, damping: 15 }}
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
      </MotionBox>
      <MotionBox
        initial={{ opacity: 0.7, y: '100%' }}  
        animate={{ opacity: inView6 ? 1 : 0, y: inView6 ? 0 : '100%' }} 
        transition={{ duration: 2.3, ease: 'easeOut', type: 'spring', stiffness: 100, damping: 15 }}
      >
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
      </MotionBox>
      </Box>
    </Box>
  );
};

export default HomePage;
