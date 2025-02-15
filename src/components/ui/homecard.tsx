import { Box, Image, Text, VStack } from "@chakra-ui/react";
import { DopamineLiteColors } from "../../themes/colors";

interface HcardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Hcard: React.FC<HcardProps> = ({ title, description, imageUrl }) => {
  const Light = DopamineLiteColors;
  return (
    <Box
      bg={Light.white100}
      borderRadius="1rem"
      boxShadow={Light.boxShadow}
      width={{ base: "90%", sm: "20rem", md: "22rem"}}
      height={{ base: "auto", md: "22rem", lg: "300px" }}
      textAlign="center"
      overflow="hidden"
      position="relative"
      mx="auto"
      p={{ base: "1rem", md: "2rem" }}
    >
      {/* Icon/Image */}
      <Box p={{ base: "0.5rem", md: "0.7rem" }}>
        <Image
          src={imageUrl}
          alt={`${title} Icon`}
          mx="auto"
          width={{ base: "80px", md: "100px" }}
          height={{ base: "80px", md: "100px" }}
        />
      </Box>

      {/* Text Content */}
      <VStack align="center" width="100%">
        <Text
          fontFamily="Bricolage Grotesque"
          fontWeight="600"
          fontSize={{ base: "1.1rem", md: "1.7rem" }}
          color={Light.black100}
          lineHeight="1.2"
          textAlign="center"
        >
          {title}
        </Text>
        <Text
          fontFamily="Bricolage Grotesque"
          fontWeight="500"
          fontSize={{ base: "0.9rem", md: "1.125rem" }}
          lineHeight="1.4"
          color={Light.black75}
          width={{ base: "100%", sm: "90%", md: "260px" }}
          mx="auto"
        >
          {description}
        </Text>
      </VStack>

      {/* Bottom Bar */}
      <Box
        bg={Light.orange}
        height="0.75rem"
        width="100%"
        position="absolute"
        bottom="0"
        left="0"
      />
    </Box>
  );
};

export default Hcard;
