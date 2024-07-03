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
  { id: 1, label: 'Home', icon: FaHome, href: '../' },
  { id: 2, label: 'Projects', icon: FaProjectDiagram, href: 'projects' },
  { id: 3, label: 'Videos', icon: FaVideo, href: '#videos' },
  { id: 4, label: 'About', icon: FaUser, href: 'about' },
  { id: 5, label: 'Contact', icon: FaEnvelope, href: 'contact' },
];

const SidebarItem: React.FC<SidebarItemProps> = ({ label, icon, href }) => (
  <Button
    as="a"
    href={href}
    leftIcon={<Icon as={icon} />}
    variant="ghost"
    justifyContent="center"
    width="100%"
    m={1.5}
    colorScheme="#8b8b8b"
    _hover={{ color: 'white' }}
  >
    <Box textAlign={"left"} width={"30%"} >{label}</Box>
  </Button>
);

const Sidebar = () => {
  return (
    <Flex
      as="nav"
      direction="column"
      align="center"
      bg="#222831"
      color="white"
      p={4}
      minH="100vh"
      boxShadow="xl"
    >
      {/* Profile Section */}
      <Box textAlign="center" mb={"8vh"} mt={"8vh"}>
      <Avatar size="xl" name="Default Image" src="https://via.placeholder.com/150" mb={4}/>
        <Text fontSize="xl" fontWeight="bold">
          Gaute Flægstad
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