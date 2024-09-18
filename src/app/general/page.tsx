"use client";
import {
  Box,
  SimpleGrid,
  Link,
  Flex,
  Heading,
  keyframes,
  Text,
  Icon,
  Divider,
} from "@chakra-ui/react";
import { FaReact } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import {
  TbBrandTypescript,
  TbBrandVite,
  TbFileTypeSql,
  TbBrandPrisma,
  TbBrandMongodb,
  TbBrandLinkedin,
} from "react-icons/tb";
import { SiChakraui } from "react-icons/si";

const technologies = [
  { name: "React", icon: FaReact },
  { name: "TS", icon: TbBrandTypescript },
  { name: "Next.js", icon: RiNextjsLine },
  { name: "Chakra", icon: SiChakraui },
  { name: "Vite", icon: TbBrandVite },
  { name: "SQL", icon: TbFileTypeSql },
  { name: "Prisma", icon: TbBrandPrisma },
  { name: "MongoDB", icon: TbBrandMongodb },
];
const pulse = keyframes`
  0%, 100% {
    width: 350px;
    height: 350px;
  }
  50% {
    width: 450px;
    height: 450px;
  }
`;

const Home = () => {
  return (
    <Box
      background="linear-gradient(135deg, #1F1F1F 0%, #3D3D3D 100%)"
      overflow={"hidden"}
      position={"relative"}
      height={"100vh"}
    >
      <Box
        position="absolute"
        top="50%"
        left="50%"
        bg="#A000FF"
        filter="blur(100px)"
        transform="translate(-50%, -50%)"
        zIndex="0"
        animation={`${pulse} 7s infinite`}
      />
      <Heading
        as="h1"
        size="2xl"
        textAlign="left"
        m={8}
        mt={10}
        zIndex={1}
        position="relative"
        color={"white"}
      >
        Gaute's portfolio
      </Heading>
      <Flex
        justifyContent="center"
        alignItems="center"
        maxHeight="100vh"
        p={8}
        pt={4}
        zIndex={1}
        position="relative"
      >
        <SimpleGrid columns={4} spacing={4} width="100%">
          <Box
            gridColumn="span 1"
            gridRow="span 1"
            bg="#1A1A1A"
            borderColor={"#4D4D4D"}
            borderWidth={1}
            borderRadius="md"
            height="18vh"
          >
            <Heading as="h2" size="2xl" color="white" textAlign="center" mt={8}>
              10+
            </Heading>
            <Text color="teal.500" textAlign="center" mt={2}>
              Projects
            </Text>
          </Box>
          <Box
            gridColumn="span 1"
            gridRow="span 1"
            bg="#1A1A1A"
            borderColor={"#4D4D4D"}
            borderWidth={1}
            borderRadius="md"
            height="18vh"
            overflow={"hidden"}
            overflowY={"scroll"}
          >
            <Heading as="h2" size="lg" color="white" textAlign="center" mt={10}>
              3rd year
            </Heading>
            <Heading as="h2" size="sm" color="white" textAlign="center" mt={2}>
              Computer Science
            </Heading>
          </Box>
          <Box
            gridColumn="span 2"
            p={4}
            pl={"6vw"}
            pr={"6vw"}
            gridRow="span 2"
            bg="#1A1A1A"
            borderColor={"#4D4D4D"}
            borderWidth={1}
            borderRadius="md"
            height="38vh"
            overflow={"hidden"}
            overflowY={"scroll"}
          >
            <Heading as="h2" size="lg" color="white" textAlign="left" mt={4}>
              Current Positions
            </Heading>
            <Divider mt={2} />
            <Heading size="md" color="white" textAlign="left" mt={4}>
              Chief DevOps Engineer
            </Heading>
            <Text color="grey" textAlign="left">
              Propulse NTNU
            </Text>
            <Heading size="md" color="white" textAlign="left" mt={4}>
              Web Developer
            </Heading>
            <Text color="grey" textAlign="left">
              Norsk Helsenett
            </Text>
            <Heading size="md" color="white" textAlign="left" mt={4}>
              Coding Teacher
            </Heading>
            <Text color="grey" textAlign="left">
              Learnist
            </Text>
          </Box>
          <Box
            gridColumn="span 1"
            gridRow="span 1"
            bg="#1A1A1A"
            borderColor={"#4D4D4D"}
            borderWidth={1}
            borderRadius="md"
            height="18vh"
          >
            <Heading as="h2" size="lg" color="white" textAlign="center" mt={4}>
              Newest
              <br />
              Project
            </Heading>
            <Link href="/github_pages_guide" target="_blank">
              <Text
                color="teal.500"
                textAlign="center"
                mt={2}
                textDecoration={"underline"}
              >
                Portfolio Guide
              </Text>
            </Link>
          </Box>
          <Box
            gridColumn="span 1"
            gridRow="span 1"
            bg="#1A1A1A"
            borderColor={"#4D4D4D"}
            borderWidth={1}
            borderRadius="md"
            height="18vh"
            alignContent={"center"}
            textAlign={"center"}
          >
            <Link
              href="https://linkedin.com/in/gaute-flægstad"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon as={TbBrandLinkedin} boxSize={12} color="teal.500" />
              <Text
                color="teal.500"
                textAlign="center"
                mt={2}
                textDecoration={"underline"}
              >
                LinkedIn profile
              </Text>
            </Link>
          </Box>

          <Box
            gridColumn="span 2"
            gridRow="span 2"
            bg="#1A1A1A"
            borderColor={"#4D4D4D"}
            borderWidth={1}
            borderRadius="md"
            height="38vh"
            overflow={"hidden"}
            overflowY={"scroll"}
          >
            <Heading
              as="h2"
              size="lg"
              color="white"
              textAlign="center"
              mt={6}
              mb={6}
            >
              Experienced with
            </Heading>
            <SimpleGrid columns={[2, 3, 4]} spacing={4} p={4} pt={0}>
              {technologies.map((tech, index) => (
                <Box
                  key={index}
                  textAlign="center"
                  borderWidth="1px"
                  borderRadius="md"
                  p={4}
                >
                  <Icon as={tech.icon} boxSize={6} color="teal.500" />
                  <Text mt={2} color={"white"} fontWeight="bold">
                    {tech.name}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Box>
          <Box
            gridColumn="span 2"
            gridRow="span 2"
            bg="#1A1A1A"
            borderColor={"#4D4D4D"}
            borderWidth={1}
            borderRadius="md"
            height="38vh"
            pl={"6vw"}
            pr={"6vw"}
          >
            <Heading as="h2" size="lg" color="white" textAlign="left" mt={6}>
              About me
            </Heading>
            <Text color="grey" textAlign="left" mt={6}>
              I am a 3rd year computer science student at NTNU, with
              specialication in software systems. I am currently lead of the
              DevOps team at the technical student organization Propulse NTNU,
              and I work as a web developer at Norsk Helsenett.
            </Text>
            <Link href="/general/about">
              <Text
                color="teal.500"
                textAlign="left"
                mt={2}
                textDecoration={"underline"}
              >
                Read more
              </Text>
            </Link>
          </Box>
        </SimpleGrid>
      </Flex>
    </Box>
  );
};

export default Home;
