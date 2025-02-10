import {
 Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Icon,
  Flex,
  HStack,
  Card,
  CardBody,
  Stack,
  // Divider,
  useDisclosure,
  // SlideFade,
  // ScaleFade,
  // Wrap,
  // WrapItem,
  CardRoot,
} from '@chakra-ui/react';
import { FaDna, FaLeaf, FaBrain, FaBook, FaMicroscope, FaUsers, FaQuoteLeft, FaTelegram } from 'react-icons/fa';
import { DopamineLiteColors } from '@/themes/colors';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { Avatar } from "@/components/ui/avatar"
import CountUp from "react-countup";
import { motion } from 'framer-motion';
const MotionBox = motion(Box);




export default function HomePage() {
  const navigator = useNavigate();
  const { ref: tutorRef, inView: tutorInView } = useInView({ triggerOnce: true });
  const { ref: testimonialsRef, inView: testimonialsInView } = useInView({ triggerOnce: true });
  const { ref: telegramRef, inView: telegramInView } = useInView({ triggerOnce: true });

  const features = [
    {
      icon: FaDna,
      title: "Molecular Biology",
      description: "Explore DNA, RNA, and cellular processes"
    },
    {
      icon: FaLeaf,
      title: "Ecology & Environment",
      description: "Study ecosystems and environmental biology"
    },
    {
      icon: FaBrain,
      title: "Human Biology",
      description: "Learn about anatomy and physiology"
    }
  ];

   const testimonials = [
    {
      name: "Sarah Johnson",
      grade: "A Grade (2023)",
      comment: "The teaching methods helped me understand complex concepts easily. I achieved my dream grade!",
      avatar: "/path/to/avatar1.jpg"
    },
    {
      name: "Michael Chen",
      grade: "A Grade (2023)",
      comment: "The practice questions and detailed explanations were invaluable for my exam preparation.",
      avatar: "/path/to/avatar2.jpg"
    },
    {
      name: "Emma Williams",
      grade: "A Grade (2023)",
      comment: "The virtual labs and interactive sessions made biology fun and engaging to learn.",
      avatar: "/path/to/avatar3.jpg"
    }
  ];

    const telegramGroups = [
    {
      name: "2026 Theory Class",
      link: "https://t.me/biology2026theory",
      description: "Join for daily updates and discussions on theory topics"
    },
    {
      name: "2026 Revision Class",
      link: "https://t.me/biology2026revision",
      description: "Get access to revision materials and practice questions"
    },
    {
      name: "Past Papers Discussion",
      link: "https://t.me/biologypastpapers",
      description: "Discuss past paper questions and solutions"
    }
  ];
  const { ref: lessonsRef, inView: lessonsInView } = useInView({ triggerOnce: true });
  const { ref: labsRef, inView: labsInView } = useInView({ triggerOnce: true });
  const { ref: studentsRef, inView: studentsInView } = useInView({ triggerOnce: true });

  return (
    <>
    <Box>
      <Box bg={DopamineLiteColors.creamColor}>
        <Container maxW="container.xl" py={{ base: 12, md: 20 }}>
          <VStack gap={6} textAlign="center">
            <Heading
              as="h1"
              fontSize={{ base: "4xl", md: "6xl" }}
              color={DopamineLiteColors.greenColor}
              lineHeight="1.2"
              fontWeight="bold"
            >
              Discover the Wonder of Biology
            </Heading>
            <Text
              fontSize={{ base: "xl", md: "2xl" }}
              color="gray.600"
              maxW="container.md"
            >
              Interactive lessons and resources to make learning biology engaging and effective
            </Text>
            <Flex gap={4} mt={4}>
              <Button
                size="lg"
                bg={DopamineLiteColors.orangeColor}
                color="white"
                _hover={{ bg: "#e68200" }}
              >
                <HStack gap={2}>
                  <FaBook />
                  <Text>Start Learning</Text>
                </HStack>
              </Button>
              <Button
              onClick={()=>{
                navigator('/classes')
              }}
                size="lg"
                variant="outline"
                borderColor={DopamineLiteColors.greenColor}
                color={DopamineLiteColors.greenColor}
                _hover={{ bg: "#00712D", color: "white" }}
              >
                Browse Courses
              </Button>
            </Flex>
          </VStack>
        </Container>
      </Box>
      <Box>

</Box>
      <Box bg="white">
        <Container maxW="container.xl" py={{ base: 12, md: 20 }}>
          <VStack gap={12}>
            <Box textAlign="center">
              <Heading
                as="h2"
                fontSize={{ base: "3xl", md: "4xl" }}
                color={DopamineLiteColors.greenColor}
                mb={4}
              >
                Comprehensive Learning Experience
              </Heading>
              <Text fontSize="xl" color="gray.600">
                Explore our wide range of biology topics
              </Text>
            </Box>
            <SimpleGrid columns={{ base: 1, md: 3 }} gap={8} w="full">
                {features.map((feature, index) => (
                  <MotionBox
                    key={index}
                    bg={DopamineLiteColors.lightGreenColor}
                    p={8}
                    borderRadius="lg"
                    transition={{ duration: 0.2 }}
                    _hover={{
                      transform: "scale(1.05)",
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",  // Add subtle shadow
                    }}
                    animate={{
                      x: [0, 20, 0],  
                      transition: {
                        repeat: Infinity,
                        duration: 3,
                        ease: "easeInOut",
                        delay: index * 0.5  
                      }
                    }}
                    willChange="transform, box-shadow"  // For performance
                  >
                    <VStack gap={4} align="flex-start">
                      <Icon boxSize={8} color={DopamineLiteColors.greenColor}> 
                        <feature.icon />
                      </Icon>
                      <Heading as="h3" fontSize="xl" color={DopamineLiteColors.greenColor}>
                        {feature.title}
                      </Heading>
                      <Text color="gray.600">{feature.description}</Text>
                    </VStack>
                  </MotionBox>
                ))}
              </SimpleGrid>
          </VStack>
        </Container>
      </Box>
      <Box bg={DopamineLiteColors.greenColor} ref={lessonsRef}>
        <Container maxW="container.xl" py={{ base: 12, md: 20 }}>
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
            <VStack textAlign="center">
              <Icon boxSize={8} color="white" mb={4}>
                <FaBook />
              </Icon>
              {/* CountUp component for the number */}
              <CountUp start={lessonsInView ? 0 : undefined} end={100} duration={2} redraw={true}>
                {({ countUpRef }) => (
                  <Text fontSize="4xl" fontWeight="bold" color="white" ref={countUpRef as React.RefObject<HTMLParagraphElement>} />
                )}
              </CountUp>
              <Text fontSize="lg" color={DopamineLiteColors.lightGreenColor}>
                Interactive Lessons
              </Text>
            </VStack>
            <VStack textAlign="center">
              <Icon boxSize={8} color="white" mb={4}>
                <FaMicroscope />
              </Icon>
              {/* CountUp component for the number */}
              <CountUp start={labsInView ? 0 : undefined} end={50} duration={2} redraw={true}>
                {({ countUpRef }) => (
                  <Text fontSize="4xl" fontWeight="bold" color="white" ref={countUpRef as React.RefObject<HTMLParagraphElement>} />
                )}
              </CountUp>
              <Text fontSize="lg" color={DopamineLiteColors.lightGreenColor}>
                Virtual Labs
              </Text>
            </VStack>
            <VStack textAlign="center">
              <Icon boxSize={8} color="white" mb={4}>
                <FaUsers />
              </Icon>
              {/* CountUp component for the number */}
              <CountUp start={studentsInView ? 0 : undefined} end={10000} duration={2} redraw={true}>
                {({ countUpRef }) => (
                  <Text fontSize="4xl" fontWeight="bold" color="white" ref={countUpRef as React.RefObject<HTMLParagraphElement>} />
                )}
              </CountUp>
              <Text fontSize="lg" color={DopamineLiteColors.lightGreenColor}>
                Active Students
              </Text>
            </VStack>
          </SimpleGrid>
        </Container>
      </Box>
      {/* Tutor Profile Section */}
      <Box bg={DopamineLiteColors.creamColor} ref={tutorRef}>
        <Container maxW="container.xl" py={{ base: 12, md: 20 }}>
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={8} alignItems="center">
              <Box>
                <Avatar
                  size="2xl"
                  src="/path/to/tutor-image.jpg"
                  mb={6}
                />
                <Heading
                  as="h2"
                  fontSize={{ base: "3xl", md: "4xl" }}
                  color={DopamineLiteColors.greenColor}
                  mb={4}
                >
                  Meet Your Biology Expert
                </Heading>
                <Text fontSize="xl" color="gray.600" mb={4}>
                  Mr. Sashanka Dhanujaya, MBBS(UG)
                </Text>
                <Text color="gray.600">
                  With over 5 years of teaching experience, Mr.Sashanka has helped thousands of students 
                  achieve their academic goals. His innovative teaching methods and deep understanding 
                  of biology make complex concepts easy to grasp.
                </Text>
              </Box>
              <Box>
                <SimpleGrid columns={2} gap={4}>
                  <CardRoot>
                    <CardBody>
                      <Text fontSize="4xl" fontWeight="bold" color={DopamineLiteColors.greenColor}>15+</Text>
                      <Text>Years Teaching</Text>
                    </CardBody>
                  </CardRoot>
                  <CardRoot>
                    <CardBody>
                      <Text fontSize="4xl" fontWeight="bold" color={DopamineLiteColors.greenColor}>5000+</Text>
                      <Text>Students Taught</Text>
                    </CardBody>
                  </CardRoot>
                  <CardRoot>
                    <CardBody>
                      <Text fontSize="4xl" fontWeight="bold" color={DopamineLiteColors.greenColor}>98%</Text>
                      <Text>Success Rate</Text>
                    </CardBody>
                  </CardRoot>
                  <CardRoot>
                    <CardBody>
                      <Text fontSize="4xl" fontWeight="bold" color={DopamineLiteColors.greenColor}>200+</Text>
                      <Text>A Grades</Text>
                    </CardBody>
                  </CardRoot>
                </SimpleGrid>
              </Box>
            </SimpleGrid>
        </Container>
      </Box>

       {/* Student Testimonials Section */}
      <Box bg="white" ref={testimonialsRef}>
        <Container maxW="container.xl" py={{ base: 12, md: 20 }}>
          <VStack gap={8}>
            <Heading
              as="h2"
              fontSize={{ base: "3xl", md: "4xl" }}
              color={DopamineLiteColors.greenColor}
              textAlign="center"
            >
              What Our Students Say
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} gap={8} w="full">
              {testimonials.map((testimonial, index) => (
                  <CardRoot key={index} h="full">
                    <CardBody>
                      <VStack align="start" gap={4}>
                        <Icon boxSize={6} color={DopamineLiteColors.greenColor} >
                          <FaQuoteLeft />
                        </Icon>
                        <Text fontSize="md" color="gray.600">
                          {testimonial.comment}
                        </Text>
                        <HStack>
                          <Avatar size="md" src={testimonial.avatar} />
                          <Box>
                            <Text fontWeight="bold">{testimonial.name}</Text>
                            <Text fontSize="sm" color="gray.500">{testimonial.grade}</Text>
                          </Box>
                        </HStack>
                      </VStack>
                    </CardBody>
                  </CardRoot>
            
              ))}
            </SimpleGrid>
            <Button
              onClick={() => navigator('/testimonials')}
              size="lg"
              variant="outline"
              borderColor={DopamineLiteColors.greenColor}
              color={DopamineLiteColors.greenColor}
              _hover={{ bg: DopamineLiteColors.greenColor, color: "white" }}
            >
              View All Testimonials
            </Button>
          </VStack>
        </Container>
      </Box>
      {/* Telegram Groups Section */}
      <Box bg={DopamineLiteColors.lightGreenColor} ref={telegramRef}>
        <Container maxW="container.xl" py={{ base: 12, md: 20 }}>
            <VStack gap={8}>
              <Heading
                as="h2"
                fontSize={{ base: "3xl", md: "4xl" }}
                color={DopamineLiteColors.greenColor}
                textAlign="center"
              >
                Join Our Learning Community
              </Heading>
              <Text fontSize="xl" color="gray.600" textAlign="center">
                Connect with fellow students and get instant updates through our Telegram groups
              </Text>
              <SimpleGrid columns={{ base: 1, md: 3 }} gap={8} w="full">
                {telegramGroups.map((group, index) => (
                  <CardRoot
                    key={index}
                    bg="white"
                    _hover={{
                      transform: "translateY(-8px)",
                      transition: "transform 0.2s"
                    }}
                  >
                    <CardBody>
                      <VStack gap={4}>
                        <Icon boxSize={8} color={DopamineLiteColors.greenColor} >
                          <FaTelegram />
                        </Icon>
                        <Heading size="md" color={DopamineLiteColors.greenColor}>
                          {group.name}
                        </Heading>
                        <Text color="gray.600" textAlign="center">
                          {group.description}
                        </Text>
                        <Button
                          as="a"
                          // href={group.link}
                          // target="_blank"
                          bg={DopamineLiteColors.greenColor}
                          color="white"
                          _hover={{ bg: "#00712D" }}
                        >
                          <FaTelegram />
                          Join Group
                        </Button>
                      </VStack>
                    </CardBody>
                  </CardRoot>
                ))}
              </SimpleGrid>
            </VStack>
        
        </Container>
      </Box>
    </Box>
    </>
  );
}
