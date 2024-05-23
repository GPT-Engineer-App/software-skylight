import { Box, Button, Container, Flex, Heading, HStack, IconButton, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="md">SaaS Business</Heading>
        <HStack spacing={4}>
          <Button variant="link" color="white">Home</Button>
          <Button variant="link" color="white">Features</Button>
          <Button variant="link" color="white">Testimonials</Button>
          <Button variant="link" color="white">Contact</Button>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Container centerContent maxW="container.xl" py={20}>
        <VStack spacing={6} textAlign="center">
          <Heading size="2xl">Welcome to Our SaaS Solution</Heading>
          <Text fontSize="lg">Streamline your workflow with our powerful and easy-to-use tools.</Text>
          <Button colorScheme="blue" size="lg" rightIcon={<FaRocket />}>Get Started</Button>
        </VStack>
      </Container>

      {/* Features Section */}
      <Container maxW="container.xl" py={20}>
        <VStack spacing={10}>
          <Heading size="xl">Features</Heading>
          <HStack spacing={10} wrap="wrap" justify="center">
            <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p={5}>
              <Heading size="md">Feature One</Heading>
              <Text mt={4}>Description of feature one.</Text>
            </Box>
            <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p={5}>
              <Heading size="md">Feature Two</Heading>
              <Text mt={4}>Description of feature two.</Text>
            </Box>
            <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p={5}>
              <Heading size="md">Feature Three</Heading>
              <Text mt={4}>Description of feature three.</Text>
            </Box>
          </HStack>
        </VStack>
      </Container>

      {/* Testimonials Section */}
      <Container maxW="container.xl" py={20} bg="gray.100">
        <VStack spacing={10}>
          <Heading size="xl">What Our Users Say</Heading>
          <HStack spacing={10} wrap="wrap" justify="center">
            <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p={5} bg="white">
              <Text>"This SaaS solution has transformed our business!"</Text>
              <Text mt={4} fontWeight="bold">- User One</Text>
            </Box>
            <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p={5} bg="white">
              <Text>"Incredible features and amazing support."</Text>
              <Text mt={4} fontWeight="bold">- User Two</Text>
            </Box>
            <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p={5} bg="white">
              <Text>"Highly recommend this to anyone looking to improve their workflow."</Text>
              <Text mt={4} fontWeight="bold">- User Three</Text>
            </Box>
          </HStack>
        </VStack>
      </Container>

      {/* Footer */}
      <Box as="footer" bg="blue.800" color="white" py={10}>
        <Container maxW="container.xl">
          <Flex justify="space-between" wrap="wrap">
            <Box>
              <Heading size="md">SaaS Business</Heading>
              <Text mt={4}>© 2023 SaaS Business. All rights reserved.</Text>
            </Box>
            <HStack spacing={4}>
              <Button variant="link" color="white">Privacy Policy</Button>
              <Button variant="link" color="white">Terms of Service</Button>
              <Button variant="link" color="white">Contact Us</Button>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;