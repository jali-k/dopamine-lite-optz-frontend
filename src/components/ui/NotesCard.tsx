import React from "react";
import { Box, Text, Button, Icon, Flex } from "@chakra-ui/react";
import { FaDownload, FaRegFileAlt, FaCalendarAlt, FaFile } from "react-icons/fa";
import { DopamineLiteColors } from "@/themes/colors";
import { Divider } from "@aws-amplify/ui-react";
import { DLFonts } from "@/themes/fonts";

// Updated NotesCard to accept props
interface NotesCardProps {
  title: string;
  description: string;
  fileName: string;
  size: string;
  uploadDate: string;
  fileUrl: string;
}

const NotesCard: React.FC<NotesCardProps> = ({
  title,
  description,
  fileName,
  size,
  uploadDate,
  fileUrl,
}) => {
  // Function to trigger file download
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = fileUrl; // Use the passed file URL
    link.download = fileName; // Download the specific file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const Light = DopamineLiteColors;

  return (
    <Box
      w={{ base: "12rem", sm: "22.875rem" }} // Full width on mobile, fixed width on larger screens
      h="auto"
      p={4}
      borderRadius="0.9375rem"
      boxShadow={Light.boxShadow}
      border="0.125rem solid transparent"
      _hover={{ borderColor: Light.blue400 }}
      bg={Light.washedGreen}
      color={Light.white800}
      fontFamily={DLFonts.body}
    >
      {/* Title */}
      <Text fontSize={{ base: "1.25rem", sm: "1.375rem" }} mt={2} fontWeight="bold">
        {title}
      </Text>
      <Text fontSize={{ base: "0.75rem", sm: "0.8125rem" }} mt={1} fontWeight="300" color={Light.gray300}>
        {description}
      </Text>

      <Divider color={Light.white800} marginTop={"1rem"}/>

      {/* File Details */}
      <Flex
        direction={{ base: "column", sm: "row" }} // Stack details on small screens, row on larger
        align={{ base: "flex-start", sm: "center" }}
        gap={4}
        fontSize="sm"
        mt={5}
      >
        <Flex align="center" gap={1}>
          <Icon as={FaCalendarAlt} />
          <Text fontSize="0.75rem" color={Light.gray300}>
            {uploadDate}
          </Text>
        </Flex>
        <Flex align="center" gap={1}>
          <Icon as={FaRegFileAlt} />
          <Text fontSize="0.75rem" color={Light.gray300}>
            {fileName}
          </Text>
        </Flex>
        <Flex align="center" gap={1}>
          <Icon as={FaFile} />
          <Text fontSize="0.75rem" color={Light.gray300}>
            {size}
          </Text>
        </Flex>
      </Flex>

      {/* Download Button */}
      <Button
        mt={6}
        width={{ base: "10rem", sm: "18.9375rem" }} // Full width on mobile, fixed width on larger screens
        height="3.0625rem"
        color={Light.white100}
        fontSize={{ base: "1rem", sm: "1.25rem" }}
        variant="outline"
        borderRadius="0.5rem"
        borderWidth="0.125rem"
        borderColor={Light.white100}
        _hover={{ bg: "whiteAlpha.300" }}
        onClick={handleDownload}
      >
        <Icon as={FaDownload} />
        Download PDF
      </Button>
    </Box>
  );
};

export default NotesCard;
