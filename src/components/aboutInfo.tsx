import { Box, Text, Heading, VStack } from "@chakra-ui/react";

const AboutPage = () => {
  return (
    <Box color="white" minH="100vh" py={10} px={6}>
      <VStack spacing={8} maxW="3xl" align={"start"}>
        <Heading as="h1" size="2xl">
          About Me
        </Heading>
        <Text fontSize="lg" lineHeight="tall">
          I'm Gaute, a 23-year-old master's student in Computer Science at NTNU,
          currently in my third year. I have a deep passion for data and
          programming, which has driven me to pursue various technical projects
          alongside my studies.
        </Text>
        <Text fontSize="lg" lineHeight="tall">
          At the beginning of 2024, I joined Propulse NTNU, a student
          organization focused on designing and testing rockets. I initially
          worked as a software engineer on the avionics team, analyzing and
          visualizing sensor data from rockets. Now, as the Head of DevOps, I
          lead the development of internal tools, manage Propulse’s website, and
          mentor new team members.
        </Text>
        <Text fontSize="lg" lineHeight="tall">
          In the summer of 2024, I worked as a developer at Norsk Helsenett,
          where I contributed to an internal solution for a division within the
          company. My role focused on frontend development, using React with
          Vite as the framework. Due to the success of the project, I was hired
          part-time to continue developing the product alongside my studies.
        </Text>
        <Text fontSize="lg" lineHeight="tall">
          I also spent two years on the Vevcom committee, where I helped manage
          and develop the website for Omega, a student association. Our team
          used Next.js with Prisma to modernize and optimize the website.
        </Text>
        <Text fontSize="lg" lineHeight="tall">
          I’m passionate about learning and sharing knowledge. I also work
          part-time as a coding teacher for kids, where I get to inspire the
          next generation of programmers by making coding fun and accessible.
        </Text>
        <Text fontSize="lg" lineHeight="tall">
          Beyond my tech work, I’ve been working part-time at Dromedar Kaffebar
          AS since 2017, balancing my academic and technical pursuits with
          honing my barista skills.
        </Text>
      </VStack>
    </Box>
  );
};

export default AboutPage;
