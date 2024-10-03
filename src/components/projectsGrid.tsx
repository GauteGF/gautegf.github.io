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
    projectLinkClickable: true,
    repositoryLink: "https://github.com/GauteGF/gautegf.github.io",
    repositoryLinkClickable: true,
  },
  {
    title: "Dashboard App",
    imageSrc: "/dashboard_app/NHN_logo.png",
    description:
      "I worked on this project during my summer internship at Norsk Helsenett in 2024. \nIn this project, we developed an internal product for one of the divisions at Norsk Helsenett. The project involved creating a simple user interface to keep track of resource consumption of various servers for the company’s services, as well as developing a tool for testing forecasts and future changes. I worked in the frontend team that built the user interface and implemented the display of data that we fetched from APIs. We developed the product using Vite, with React, Redux, and Chakra UI as the technologies, and Entra ID for authentication.\n\nUnfortunately, I am not able to share the code or the project itself, as it is an internal product.",
    images: [],
    tags: ["Vite", "Redux", "Entra ID", "Docker", "React", "Chakra UI"],
    projectLink: "",
    projectLinkClickable: false,
    repositoryLink: "",
    repositoryLinkClickable: false,
  },
  {
    title: "Rocket Data Analysis",
    imageSrc: "/rocket_data_analysis/rocket_data_analysis.png",
    description:
      "This was one of my projects during my time as a ssoftware engineer/data analyst for Propulse in the spring of 2024.\nIn Propulse we pinpoint the location of our rockets during flight with GPS, which gives us the coordinates at all times. We also have a radio at ground station that tracks the rocket without communicating with it. The data we receive from the radio is in the form of number of steps the antenna has angeled itself in both vertical and horisontal direction. In other words, it repositions itself to track the rocket and records how much the antenna has moved.\n\nThe goal of this project was to analyze the data from the radio and GPS to see if we could find any correlation between the two. Of course, the radio doesn't record how far away the rocket is, but we wanted to know if it was tracking correctly. I wanted to see if we could predict the location of the rocket based on the data from the radio. I used Python with Pandas and Matplotlib to analyze the data and create visualizations.\n\nThere is no repository for this project, but all the code is displayed and described in the project page. Also it is written in norwegian.",
    images: [
      "/rocket_data_analysis/rocket_data_analysis1.png",
      "/rocket_data_analysis/rocket_data_analysis2.png",
    ],
    tags: ["Python", "Matplotlib", "Pandas"],
    projectLink: "https://folk.ntnu.no/gautegf/Bifrost_launch.html",
    projectLinkClickable: true,
    repositoryLink: "",
    repositoryLinkClickable: false,
  },
  {
    title: "Movie App",
    imageSrc: "/movie_app/movie_app.png",
    description:
      "As part of a Scrum-based development team, I contributed to the creation of a movie information website. The platform allows users to browse, rate, and comment on movies, as well as filter and sort through them. Users can also mark movies as 'liked' or 'watched', with all actions linked to their individual profiles via login authentication.\nI worked on various aspects of the project, including:\n - Fetching movie data from external APIs.\n - Styling diverse components across different pages.\n - Implementing backend logic for saving user interactions, such as liked/watched movies, favorite actors, and preferred categories.\nThis project involved collaboration through standups, sprints, reviews, and demos, following best practices in agile methodologies.\n\nThis project was only ever hosted locally, so there is no live version available.",
    images: [
      "/movie_app/movie_app.png",
      "/movie_app/movie_app1.png",
      "/movie_app/movie_app2.png",
      "/movie_app/movie_app3.png",
    ],
    tags: ["Next.js", "Tailwind CSS", "Django", "SQLight3"],
    projectLink: "",
    projectLinkClickable: false,
    repositoryLink: "https://github.com/GauteGF/movie-app",
    repositoryLinkClickable: true,
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
    projectLinkClickable: boolean;
    repositoryLink: string;
    repositoryLinkClickable: boolean;
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
            <Text mb={4} whiteSpace="pre-wrap">
              {project.description}
            </Text>
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
            {project.projectLinkClickable ? (
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
            ) : (
              <Button
                colorScheme="teal"
                bg="teal.500"
                color="white"
                _hover={{ bg: "teal.600" }}
                w="full"
                isDisabled
              >
                View Project
              </Button>
            )}
            {project.repositoryLinkClickable ? (
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
            ) : (
              <Button
                colorScheme="teal"
                variant="outline"
                borderColor="teal.500"
                color="teal.500"
                _hover={{ bg: "teal.500", color: "white" }}
                w="full"
                isDisabled
              >
                Repository
              </Button>
            )}
          </HStack>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProjectsGrid;
