import { Box, Grid, Image, Text, Tag, VStack } from "@chakra-ui/react";
import Link from "next/link";

const projects = [
  {
    title: "Portfolio Guide",
    imageSrc: "/add_new_SSHKEY2.png",
    tags: ["React", "Chakra UI", "Typescript"],
    link: "../github_pages_guide",
  },
  {
    title: "Project Two",
    imageSrc: "/add_new_SSHKEY2.png",
    tags: ["Python", "Machine Learning", "Data Science"],
    link: "projects/project_two",
  },
];

const ProjectsGrid = () => {
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={6} p={6} color="white">
      {projects.map((project, index) => (
        <Link key={index} href={project.link} passHref>
          <Box
            bg="gray.700"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="lg"
            _hover={{
              transform: "scale(1.05)",
              transition: "0.3s",
              cursor: "pointer",
            }}
          >
            <Image
              src={project.imageSrc}
              alt={project.title}
              objectFit="cover"
              h="200px"
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
        </Link>
      ))}
    </Grid>
  );
};

export default ProjectsGrid;