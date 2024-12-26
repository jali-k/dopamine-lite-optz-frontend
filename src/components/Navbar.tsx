import { Box, Flex, Button, Stack, Image, Text, Link } from '@chakra-ui/react';
import { useAppDispatch } from '../hooks/redux';
import { clearUser } from '../state/slices/userSlice';
import { signOut } from '@aws-amplify/auth';
import dopamineLogo from '@/assets/dopamine_logo.jpg';

export default function Navbar() {
  const dispatch = useAppDispatch();

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
            <Link href="/lessons" colorScheme="biology">Lessons</Link>
            <Link href="/notes" colorScheme="biology">Notes</Link>
            <Button colorScheme="biology" onClick={handleSignOut}>Sign Out</Button>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
}