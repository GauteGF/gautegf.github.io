import {
  Box,
  Grid,
  Image,
  Text,
  Tag,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  SimpleGrid,
  HStack,
} from "@chakra-ui/react";
import { useState } from "react";

const projects = [
  {
    title: "Portfolio Guide",
    imageSrc: "/portfolio_guide/portfolio_guide.png",
    description:
      "This is a project I started during the summer of 2024. As I knew I would be lead for DevOps in the coming project, I decided to create a guide for the team to prepare them for the projects to come. The focus of the guide is starting to learn the basics of Git and GitHub, as well as how to deploy a React app to GitHub Pages. It also instructs you to create an app with Next.js and teaches you about the file structure and how to get started with programming.",
    images: [
      "/portfolio_guide/portfolio_guide.png",
      "/portfolio_guide/portfolio_guide2.png",
      "/portfolio_guide/portfolio_guide3.png",
    ],
    tags: ["React", "Chakra UI", "Typescript"],
    projectLink: "https://gautegf.github.io/github_pages_guide",
    repositoryLink: "https://github.com/GauteGF/gautegf.github.io",
  },
];

const ProjectsGrid = () => {
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={6} p={6} color="white">
      {projects.map((project, index) => (
        <ProjectBox key={index} project={project} />
      ))}
    </Grid>
  );
};

const ProjectBox = ({
  project,
}: {
  project: {
    title: string;
    imageSrc: string;
    description: string;
    images: string[];
    tags: string[];
    projectLink: string;
    repositoryLink: string;
  };
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [imageSrc, setImageSrc] = useState(project.imageSrc);

  return (
    <>
      <Box
        bg="#1F1F1F"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="lg"
        h="350px"
        _hover={{
          transform: "scale(1.05)",
          transition: "0.3s",
          cursor: "pointer",
        }}
        onMouseLeave={() => setImageSrc(project.imageSrc)}
        onClick={onOpen}
      >
        <Image
          src={imageSrc}
          alt={project.title}
          objectFit="cover"
          h="250px"
          w="100%"
        />
        <VStack align="start" p={4}>
          <Text fontSize="xl" fontWeight="bold">
            {project.title}
          </Text>
          <Box>
            {project.tags.map((tag, i) => (
              <Tag key={i} colorScheme="teal" mr={2} mb={2}>
                {tag}
              </Tag>
            ))}
          </Box>
        </VStack>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} isCentered size="2xl">
        <ModalOverlay backdropFilter="blur(10px)" bg="rgba(0, 0, 0, 0.6)" />
        <ModalContent
          bg="#1F1F1F"
          color="white"
          maxW="70vw"
          maxH="80vh"
          display="flex"
          flexDirection="column"
        >
          <ModalHeader>{project.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody flex="1" overflowY="auto">
            <Text mb={4}>{project.description}</Text>
            <SimpleGrid columns={1} spacing={8}>
              {project.images.map((imgSrc, i) => (
                <Image
                  key={i}
                  src={imgSrc}
                  alt={`Project image ${i + 1}`}
                  borderRadius="md"
                  border={`1px solid ${isOpen ? "teal" : "transparent"}`}
                />
              ))}
            </SimpleGrid>
          </ModalBody>
          <HStack mt={4} spacing={4} mb={4} p={4}>
            <Button
              as="a"
              href={project.projectLink}
              target="_blank"
              colorScheme="teal"
              bg="teal.500"
              color="white"
              _hover={{ bg: "teal.600" }}
              w="full"
            >
              View Project
            </Button>
            <Button
              as="a"
              href={project.repositoryLink}
              target="_blank"
              colorScheme="teal"
              variant="outline"
              borderColor="teal.500"
              color="teal.500"
              _hover={{ bg: "teal.500", color: "white" }}
              w="full"
            >
              Repository
            </Button>
          </HStack>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProjectsGrid;
