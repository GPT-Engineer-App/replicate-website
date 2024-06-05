import { Box, Container, Flex, Heading, Text, Button, Image, VStack, HStack, Link } from "@chakra-ui/react";
import { FaUser, FaSignInAlt } from "react-icons/fa";

const Home = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex justifyContent="space-between" alignItems="center" mb={4}>
        <Heading as="h1" size="2xl">FINANCIAL TIMES</Heading>
        <HStack spacing={4}>
          <Button leftIcon={<FaUser />} colorScheme="teal" variant="outline">Subscribe</Button>
          <Button leftIcon={<FaSignInAlt />} colorScheme="teal">Sign In</Button>
        </HStack>
      </Flex>
      <Flex justifyContent="space-between" alignItems="center" mb={4}>
        <HStack spacing={8}>
          <Link href="#" fontWeight="bold">HOME</Link>
          <Link href="#">WORLD</Link>
          <Link href="#">US</Link>
          <Link href="#">COMPANIES</Link>
          <Link href="#">TECH</Link>
          <Link href="#">MARKETS</Link>
          <Link href="#">CLIMATE</Link>
          <Link href="#">OPINION</Link>
          <Link href="#">LEX</Link>
          <Link href="#">WORK & CAREERS</Link>
          <Link href="#">LIFE & ARTS</Link>
          <Link href="#">HTSI</Link>
        </HStack>
      </Flex>
      <Box bg="gray.100" p={4} mb={4} textAlign="center">
        <Text>Keep reading the FT for free</Text>
        <Button colorScheme="teal" mt={2}>REGISTER FOR FREE</Button>
      </Box>
      <Flex>
        <Box flex="2" p={4}>
          <Heading as="h2" size="lg" mb={2}>Investors pull cash from ESG funds as performance lags</Heading>
          <Text mb={4}>Sustainably focused equity funds suffer net $40bn of outflows in 2024, the first sustained exodus</Text>
          <Text fontSize="sm" color="gray.500">2 HOURS AGO</Text>
        </Box>
        <Box flex="1" p={4}>
          <Image src="/images/car.jpg" alt="Electric car" />
          <Heading as="h3" size="md" mt={2}>The Big Read. China’s plan to sell cheap EVs to the rest of the world</Heading>
        </Box>
      </Flex>
      <Box mt={8}>
        <Heading as="h3" size="md" mb={4}>Editor's picks</Heading>
        <VStack align="start" spacing={4}>
          <HStack>
            <Image boxSize="50px" src="/images/editor1.jpg" alt="Editor 1" />
            <Box>
              <Text fontWeight="bold">What Hunter Biden tells us about America</Text>
              <Text fontSize="sm" color="gray.500">Edward Luce</Text>
            </Box>
          </HStack>
          <HStack>
            <Image boxSize="50px" src="/images/editor2.jpg" alt="Editor 2" />
            <Box>
              <Text fontWeight="bold">Behold the final casualties of Brexit</Text>
              <Text fontSize="sm" color="gray.500">Robert Shrimsley</Text>
            </Box>
          </HStack>
        </VStack>
      </Box>
    </Container>
  );
};

export default Home;