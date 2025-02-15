import { 
  Box, 
  Flex, 
  Button, 
  Stack, 
  Image, 
  Text, 
  Link,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,

  DrawerContent,
  useDisclosure,
  VStack,
  DrawerBackdrop,
  Menu,
  MenuRoot,
  MenuTrigger,
  MenuContent
} from '@chakra-ui/react';
import { FiMenu, FiX } from 'react-icons/fi';
import { useAppDispatch } from '../hooks/redux';
import { clearUser } from '../state/slices/userSlice';
import { signOut } from '@aws-amplify/auth';
import dopamineLogo from '@/assets/dopamine_logo.jpg';
import { useNavigate } from 'react-router-dom';
import { DopamineLiteColors } from '@/themes/colors';
import { forwardRef, ForwardedRef } from 'react';

const NavbarLink = forwardRef(({ onClick, children, ...props }: any, ref: ForwardedRef<HTMLAnchorElement>) => (
  <Link ref={ref} onClick={onClick} {...props}>
    {children}
  </Link>
));

NavbarLink.displayName = 'NavbarLink';

export default function Navbar() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { open, onOpen, onClose } = useDisclosure();

  const handleSignOut = async () => {
    try {
      await signOut();
      dispatch(clearUser());
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const onHomeClick = () => {
    navigate('/');
    onClose();
  };

  const onClassesClick = () => {
    navigate('/classes');
    onClose();
  };

  const NavButtons = () => (
    <>
      <Button 
        variant={'outline'} 
        borderColor={'#00712D'} 
        color={'white'} 
        _hover={{bg: 'white', color: 'green'}} 
        onClick={onClassesClick}
      >
        Classes
      </Button>
      <Button 
        variant={'outline'} 
        onClick={()=>{}} 
        borderColor={'#00712D'} 
        _hover={{bg: 'white', color: 'green'}} 
        color={'white'}
      >
        Profile
      </Button>
      <Button 
        colorScheme="biology" 
        onClick={handleSignOut}
      >
        Sign Out
      </Button>
    </>
  );

  return (
    <Box bg={DopamineLiteColors.greenColor} position="sticky" top="0" zIndex={2} w="100%">
      <Flex h={16} alignItems="center" justifyContent="space-between" px={4}>
        <NavbarLink onClick={onHomeClick}>
          <Flex alignItems="center">
            <Image h="40px" src={dopamineLogo} alt="Logo" />
            <Text ml={3} fontSize="xl" fontWeight="bold" color="biology.600">
              Dopamine Lite
            </Text>
          </Flex>
        </NavbarLink>

        {/* Desktop Navigation */}
        <Flex alignItems="center" display={{ base: 'none', md: 'flex' }}>
          <Stack direction="row" gap={7}>
            <NavButtons />
          </Stack>
        </Flex>

        {/* Mobile Navigation */}

        <Box display={{ base: 'flex', md: 'none' }}>
          <MenuRoot>
            <MenuTrigger>
              <Button>
                {open ? <FiMenu /> : <FiX />}
              </Button>
              {/* <IconButton
                aria-label="Open menu"
                display={{ base: 'flex', md: 'none' }}
                variant="outline"
                colorScheme="whiteAlpha"
              >
{open ? <FiMenu /> : <FiX />}
              </IconButton> */}
            </MenuTrigger>
            <MenuContent>
              <VStack gap={4} align="stretch" mt={4}>
                <NavButtons />
              </VStack>
            </MenuContent>
          </MenuRoot>
        </Box>
        {/* <IconButton
          aria-label="Open menu"
          display={{ base: 'flex', md: 'none' }}
          onClick={onOpen}
          variant="outline"
          colorScheme="whiteAlpha"
        >
          {open ? <FiX /> : <FiMenu />}
          </IconButton>

        <Drawer.Root open={open} placement="end">
          <DrawerBackdrop />
          <DrawerContent>
            <DrawerHeader bg={DopamineLiteColors.greenColor} color="white">
              Menu
            </DrawerHeader>
            <DrawerBody bg={DopamineLiteColors.greenColor}>
              <VStack gap={4} align="stretch" mt={4}>
                <NavButtons />
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer.Root> */}
      </Flex>
    </Box>
  );
}