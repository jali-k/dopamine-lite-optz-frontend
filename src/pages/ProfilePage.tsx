import { Box, Text, VStack, HStack } from "@chakra-ui/react";
import { DopamineLiteColors } from "@/themes/colors";
import { getCurrentUser } from '@aws-amplify/auth';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { setUser, clearUser } from '../state/slices/userSlice';
import { DLFonts } from "@/themes/fonts";

const Profile = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  useEffect(() => {
    const updateUserData = async () => {
      try {
        const { username } = await getCurrentUser();
        dispatch(setUser({
          username,
        }));
      } catch (err) {
        console.error('Error fetching user data:', err);
        dispatch(clearUser());
      }
    };
    updateUserData();
  }, [dispatch]);

  const Light = DopamineLiteColors;

  // Get the first letter of the username
  const firstLetter = user.username?.charAt(0).toUpperCase() || "U";

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      bg="gray.50"
      minH="100vh"
      gap={{ base: "2rem" }}
      padding={0}
      fontFamily={DLFonts.body}
    >
      <Text color={Light.black100} fontSize={"4rem"} marginTop={"2rem"}>
        Profile
      </Text>

      {/* Circle with First Letter */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        w="100px"
        h="100px"
        bg="orange.500"
        color="white"
        fontSize="3xl"
        fontWeight="bold"
        borderRadius="50%"
        border="4px solid teal"
      >
        {firstLetter}
      </Box>

      {/* Profile Details */}
      <VStack mt={6} w="100%" maxW="400px">
        <HStack w="100%">
          <Text fontSize="md" fontWeight="bold" w="20%" color={Light.black75}>
            Name
          </Text>
          <Box
            border={Light.border}
            width={"465px"}
            padding={"0.5rem"}
            boxShadow={Light.boxShadow}
            borderRadius={"0.5rem"}
>
            <Text color={Light.black70}>{user.username || "Unknown"}</Text>
          </Box>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Profile;
