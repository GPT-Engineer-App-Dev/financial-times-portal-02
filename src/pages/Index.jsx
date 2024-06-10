import { Box, Container, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaHome, FaNewspaper, FaInfoCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">
          Financial Times
        </Heading>
        <Flex>
          <Link to="/" style={{ marginRight: "1rem" }}>
            <Flex align="center">
              <FaHome />
              <Text ml={2}>Home</Text>
            </Flex>
          </Link>
          <Link to="/articles" style={{ marginRight: "1rem" }}>
            <Flex align="center">
              <FaNewspaper />
              <Text ml={2}>Articles</Text>
            </Flex>
          </Link>
          <Link to="/about">
            <Flex align="center">
              <FaInfoCircle />
              <Text ml={2}>About</Text>
            </Flex>
          </Link>
        </Flex>
      </Flex>
      <Flex direction={{ base: "column", md: "row" }} mt={4}>
        <Box flex="3" p={4}>
          <Heading as="h2" size="md" mb={4}>
            Main Content Area
          </Heading>
          <VStack spacing={4} align="stretch">
            <Box p={4} bg="gray.100" borderRadius="md">
              <Heading as="h3" size="sm">
                Article 1
              </Heading>
              <Text mt={2}>This is a summary of the first article.</Text>
            </Box>
            <Box p={4} bg="gray.100" borderRadius="md">
              <Heading as="h3" size="sm">
                Article 2
              </Heading>
              <Text mt={2}>This is a summary of the second article.</Text>
            </Box>
          </VStack>
        </Box>
        <Box flex="1" p={4} bg="gray.50" borderRadius="md" ml={{ md: 4 }} mt={{ base: 4, md: 0 }}>
          <Heading as="h2" size="md" mb={4}>
            Sidebar
          </Heading>
          <VStack spacing={4} align="stretch">
            <Box p={4} bg="gray.100" borderRadius="md">
              <Heading as="h3" size="sm">
                Additional Content 1
              </Heading>
              <Text mt={2}>This is some additional content.</Text>
            </Box>
            <Box p={4} bg="gray.100" borderRadius="md">
              <Heading as="h3" size="sm">
                Additional Content 2
              </Heading>
              <Text mt={2}>This is some more additional content.</Text>
            </Box>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;