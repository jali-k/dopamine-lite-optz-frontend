import { Box, Text } from "@chakra-ui/react";
import { DopamineLiteColors } from "@/themes/colors";

export default function Footer() {
  const Light = DopamineLiteColors;
  return (
    <Box 
      bg={Light.darkGreen} 
      color={Light.white100} 
      width="100%" 
      height={{ base: "5rem", md: "6.5rem" }} 
      display="flex" 
      alignItems="center" 
      justifyContent="center"
    >
      <Text fontSize={{ base: "0.7rem", md: "1.2rem" }}>© 2024 Dopamine Lite - All rights reserved</Text>
    </Box>

  );
}