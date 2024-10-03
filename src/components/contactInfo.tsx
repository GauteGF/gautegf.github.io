import { Box, Heading, Text, VStack, Divider, Link } from "@chakra-ui/react";

const ContactInfo = () => {
  return (
    <Box as="section" minH="100vh" p={{ base: 4, md: 8 }} color="gray.100">
      <VStack spacing={8} align="start" maxW="800px">
        {/* Heading */}
        <Heading as="h1" size="2xl">
          Get in Touch
        </Heading>

        <Text fontSize="lg" color="gray.400">
          If you have any questions or would like to work with me, feel free to
          send me a message.
        </Text>

        <Divider borderColor="gray.400" />

        {/* Phone Numbers */}
        <VStack align="start" spacing={2}>
          <Text fontSize="lg" fontWeight="bold">
            Phone Number
          </Text>
          <Text>Private: +47 940 31 863</Text>
        </VStack>

        <Divider borderColor="gray.400" />

        {/* Email Addresses */}
        <VStack align="start" spacing={2}>
          <Text fontSize="lg" fontWeight="bold">
            Mail
          </Text>
          <Text>Private: gaute.flagstad@gmail.com</Text>
          <Text>Propulse: gaute.flaegstad@propulsentnu.no</Text>
          <Text>Student: gautegf@stud.ntnu.no</Text>
          <Text>Work: gaute.flaegstad@nhn.no</Text>
          <Text fontSize="sm" color="gray.400">
            Preferably use my private or Propulse mail.
          </Text>
        </VStack>

        <Divider borderColor="gray.400" />

        {/* LinkedIn */}
        <VStack align="start" spacing={2}>
          <Text fontSize="lg" fontWeight="bold">
            LinkedIn
          </Text>
          <Link
            href="https://www.linkedin.com/in/gaute-fl%C3%A6gstad/"
            color="teal.300"
            isExternal
          >
            LinkedIn profile
          </Link>
        </VStack>
      </VStack>
    </Box>
  );
};

export default ContactInfo;
