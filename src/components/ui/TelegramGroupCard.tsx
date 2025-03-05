import { Box, Text, Button, Icon, VStack, Flex } from "@chakra-ui/react";
import { FaTelegramPlane } from "react-icons/fa";
import { DopamineLiteColors } from "../../themes/colors";
import { DLFonts } from "@/themes/fonts";

const TelegramGroupCard = () => {
  const Light = DopamineLiteColors;
  const fontFamily = "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif";
  return (
    <Box
      maxW="22.25rem" 
      h="21rem"
      borderRadius="2.5rem" 
      overflow="hidden"
      boxShadow={Light.boxShadow} 
      p="0.25rem"
      textAlign="center"
      bg={Light.white100}
      fontFamily={DLFonts.body}
      justifyContent="space-between" 
    >
      <VStack 
        pt={14}
        pb={14}
      >
        <Flex alignItems="center" width="100%" justifyContent="center" gap={4}>
          <Box
            bg={Light.blue400}
            w="4.375rem" 
            h="4.375rem" 
            borderRadius="full"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            mr="0.25rem"  
          >
            <Icon as={FaTelegramPlane} color={Light.white100} w="2rem" h="2rem" />
          </Box>
          <VStack alignItems="flex-start"> {/* Align text to the left */}
            <Text fontSize="1.25rem" fontWeight="bold" color={Light.black100}> 
              2026 Theory Class
            </Text>
            <Text fontSize="0.75rem" color={Light.gray600} mt={-3}> {/* Negative margin */} 
              Telegram Group
            </Text>
            <Text fontSize="1rem" color={Light.gray600} mt={-1}> {/* Negative margin */} 
              2345 members
            </Text>
          </VStack>
        </Flex>
        <Text fontSize="0.875rem" color={Light.gray300} textAlign="center" mt="-0.25rem" fontWeight="bold"> 
          ________________________________________________
        </Text>
        <Text fontSize="1rem" color={Light.black100} textAlign="center" mt="0.0625rem" width={"90%"}>
          Join for daily updates and discussions on theory topics
        </Text>
        <Button color={Light.white100} size="md" fontSize="1.125rem" width="100%" bg={Light.darkGreen} height="2.625rem" maxWidth="9.125rem" borderRadius="2.5rem" mt="0.1875rem" marginTop={"1.2rem"}> 
          Join Group
        </Button>
      </VStack>
    </Box>
  );
};

export default TelegramGroupCard;
