import { Box, Flex, Button, Stack, Image, Text, Link } from '@chakra-ui/react';
import { useAppDispatch } from '../hooks/redux';
import { clearUser } from '../state/slices/userSlice';
import { signOut } from '@aws-amplify/auth';
import dopamineLogo from '@/assets/dopamine_logo.jpg';
import { useLocation } from 'react-router-dom';

export default function Navbar() {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const currentPath = location.pathname;

  const handleSignOut = async () => {
    try {
      await signOut();
      dispatch(clearUser());
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <Box bg="white" boxShadow="sm" position="sticky" top="0" zIndex="sticky" w="100%">
      <Flex h={16} alignItems="center" justifyContent="space-between" px={4}>
        <Link href="/">
          <Flex alignItems="center">
            <Image h="40px" src={dopamineLogo} alt="Logo" />
            <Text ml={3} fontSize="xl" fontWeight="bold" color="biology.600">
              Dopamine Lite
            </Text>
          </Flex>
        </Link>

        <Flex alignItems="center">
          <Stack direction="row" gap={7}>
            <Link href="/classes"  color={currentPath.startsWith('/classes') ? "green" : "gray.600"}>Classes</Link>
            <Link href="/notes" color={currentPath.startsWith('/notes') ? "green" : "gray.600"}>Notes</Link>
            <Button colorScheme="biology" onClick={handleSignOut}>Sign Out</Button>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
}