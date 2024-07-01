import { Box, Flex} from '@chakra-ui/react'
import { VStack, Avatar, Text, Button, Icon } from "@chakra-ui/react";
import { FaHome, FaProjectDiagram, FaUser, FaEnvelope, FaVideo } from 'react-icons/fa';
import { IconType } from 'react-icons/lib';

interface SidebarItemProps {
  id: number;
  label: string;
  icon: IconType;
  href: string;
}

const sidebarItems: SidebarItemProps[] = [
  { id: 1, label: 'Home', icon: FaHome, href: '#home' },
  { id: 2, label: 'Projects', icon: FaProjectDiagram, href: '#projects' },
  { id: 3, label: 'Videos', icon: FaVideo, href: '#videos' },
  { id: 4, label: 'About', icon: FaUser, href: '#about' },
  { id: 5, label: 'Contact', icon: FaEnvelope, href: '#contact' },
];

const SidebarItem: React.FC<SidebarItemProps> = ({ label, icon, href }) => (
  <Button
    as="a"
    href={href}
    leftIcon={<Icon as={icon} />}
    variant="ghost"
    justifyContent="center"
    width="100%"
    colorScheme="whiteAlpha"
    _hover={{ color: 'white' }}
  >
    {label}
  </Button>
);

const Sidebar = () => {
  return (
    <Flex
      as="nav"
      direction="column"
      align="center"
      justify="center"
      bg="black"
      color="white"
      p={4}
      minH="100vh"
      boxShadow="xl"
    >
      {/* Profile Section */}
      <Avatar size="xl" name="Default Image" src="https://via.placeholder.com/150" mb={4} />
      <Box textAlign="center" mb={6}>
        <Text fontSize="xl" fontWeight="bold">
          Gaute Flægstad
        </Text>
        <Text fontSize="sm">
          Student
        </Text>
        <Text fontSize="sm">
          Datateknologi - NTNU
        </Text>
      </Box>

      {/* Navigation Buttons */}
      <VStack spacing={3} align="stretch" width="100%">
        {sidebarItems.map(item => (
          <SidebarItem key={item.id} {...item} />
        ))}
      </VStack>
    </Flex>
  );
};

export default Sidebar