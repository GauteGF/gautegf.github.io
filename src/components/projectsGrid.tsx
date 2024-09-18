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
  Heading,
  SimpleGrid,
  HStack,
} from "@chakra-ui/react";
import { useState } from "react";

const projects = [
  {
    title: "Portfolio Guide",
    imageSrc: "/portfolio_guide.png",
    gifSrc: "/portfolio_guide_preview.gif",
    description:
      "A detailed guide on how to build a portfolio using React, Chakra UI, and TypeScript.",
    images: [
      "/portfolio_guide.png",
      "/portfolio_guide.png",
      "/portfolio_guide.png",
    ],
    tags: ["React", "Chakra UI", "Typescript"],
    projectLink: "https://gautegf.github.io/github_pages_guide",
  },
  {
    title: "TEST PROJECT",
    imageSrc: "/add_new_SSHKEY2.png",
    gifSrc: "/add_new_SSHKEY2_hover.gif",
    description: "TEST PROJECT",
    images: ["/ml_project_1.png", "/ml_project_2.png", "/ml_project_3.png"],
    tags: ["Python", "Machine Learning", "Data Science"],
    projectLink: "https://github.com/gaute/project-two",
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
    gifSrc: string;
    description: string;
    images: string[];
    tags: string[];
    projectLink: string;
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
        onMouseEnter={() => setImageSrc(project.gifSrc)}
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
            <SimpleGrid columns={2} spacing={4}>
              {project.images.map((imgSrc, i) => (
                <Image
                  key={i}
                  src={imgSrc}
                  alt={`Project image ${i + 1}`}
                  borderRadius="md"
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
              href={project.projectLink}
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
