import React from "react";
import { Image, Box, Flex, Text, Heading } from "@chakra-ui/react";
import { DopamineLiteColors } from "../../themes/colors";

interface TestimonialCardProps {
  name: string;
  grade: string;
  date: string;
  avatarUrl: string;
  title: string;
  testimonial: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  grade,
  date,
  avatarUrl,
  title,
  testimonial,
}) => {
  const Light = DopamineLiteColors;

  return (
    <Box width="100%" maxW="24rem" mx="auto">
      <Box
        zIndex={5}
        position="relative"
        bg={Light.lightGreen}
        p="1.5rem"
        width="100%"
        height="22.8125rem"
        maxW="21rem"
        mx="auto"
        borderTopLeftRadius="2rem"
        borderBottomRightRadius="2rem"
      >
        <Flex alignItems="center" mb="1rem">
          <Image
            src={avatarUrl}
            alt={name}
            boxSize="3.75rem"
            borderRadius="full"
            border={Light.border}
            objectFit="cover"
          />
          <Box ml="1rem">
            <Heading size="md" color={Light.white100}>
              {name}
            </Heading>
            <Text fontSize="0.875rem" color={Light.white800}>
              {grade}
            </Text>
          </Box>
        </Flex>

        <Heading size="sm" color={Light.white100} fontWeight="semibold">
          {title}
        </Heading>
        <Text fontSize="0.875rem" color={Light.white800} lineHeight="1.6">
          {testimonial}
        </Text>
        <Text textAlign="right" fontSize="0.875rem" color={Light.white800}>
          {date}
        </Text>
      </Box>

      <Box
        width="100%"
        height="17.75rem"
        maxW="21.9rem"
        bg={Light.orange}
        position="relative"
        mx="auto"
        marginTop="-17.3125rem"
        borderTopLeftRadius="2rem"
        borderBottomRightRadius="2rem"
      />
    </Box>
  );
};

export default TestimonialCard;
