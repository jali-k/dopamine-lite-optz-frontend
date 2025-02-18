import { 
  Box, 
  Flex, 
  Button, 
  Stack, 
  Text, 
  Link,
  useDisclosure,
  VStack,
  MenuRoot,
  MenuTrigger,
  MenuContent
} from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import { useAppDispatch } from '../hooks/redux';
import { clearUser } from '../state/slices/userSlice';
import { signOut } from '@aws-amplify/auth';
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
  const Light = DopamineLiteColors;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { open, onClose } = useDisclosure();

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


  const onPrfileClick = () => {
    navigate('/profile');
    onClose();
  }


  const fontFamily = "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif";
  const NavButtons = () => (
    <>
      <Button 
        variant="ghost"
        color={Light.black100}
        bg={Light.backgroundWhite}
        fontWeight="400" // Font weight
        fontSize="20px" // Font size
        lineHeight="24px" // Line height
        fontFamily={fontFamily} // Use consistent font family
        onClick={onClassesClick}
      >
        Classes
      </Button>
      <Button 
        variant="ghost"
        onClick={onPrfileClick} 
        color={Light.black100}
        bg={Light.backgroundWhite}
        fontWeight="400"
        fontSize="20px"
        lineHeight="24px"
        fontFamily={fontFamily} // Use consistent font family
      >
        Profile
      </Button>
      <Button 
        colorScheme="biology" 
        onClick={handleSignOut}
        color={Light.black100}
        bg={Light.white800}
        boxShadow={Light.boxShadow}
        borderRadius="8px"
        fontWeight="400"
        fontSize="20px"
        lineHeight="24px"
        fontFamily={fontFamily} // Use consistent font family
        px={6}
        py={4}
        _hover={{ bg: Light.gray300 }} 
        
      >
          Sign Out
      </Button>
    </>
  );

  return (
    <Box 
      bg={Light.backgroundWhite} // Light gray background color
      position="sticky" 
      top="0" 
      w="100%" 
      border="none" // Explicitly remove any border
      boxShadow="none" // Remove box shadow if it's there
      zIndex="50"
      padding={"0.3rem"}
  >
      <Flex h={16} alignItems="center" justifyContent="space-between" px={4}>
      <Flex flex="1" >
        <NavbarLink onClick={onHomeClick}>
          <Flex alignItems="center">
            <Text
            fontSize={{base : "18px", lg : "28px"}}
            fontWeight="bold"
            color={Light.black100}
            fontFamily={fontFamily} // Use consistent font family
            ml = {10}
            zIndex="50"
          >
              Dopamine Lite
            </Text>
          </Flex>
        </NavbarLink>
        </Flex>

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
                {open ? <FiMenu /> : <FiMenu />}
              </Button>
            </MenuTrigger>
            <MenuContent bg="transparent" boxShadow="none">
              <VStack 
                bg={Light.backgroundWhite} 
                position="absolute" 
                top="0"
                left="auto"
              >
                <NavButtons />
              </VStack>
            </MenuContent>
          </MenuRoot>
        </Box>
      </Flex>
    </Box>
  );
}