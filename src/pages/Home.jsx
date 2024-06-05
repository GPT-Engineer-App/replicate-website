import { Box, Container, Heading, Text, VStack, Image, Flex, Link } from "@chakra-ui/react";

const Home = () => {
  return (
    <Container maxW="container.xl" py={4}>
      <Box bg="gray.200" p={4} mb={4} textAlign="center">
        <Text fontSize="lg">Keep reading the FT for free</Text>
        <Link href="#" color="teal.500" fontWeight="bold">
          Register now and enjoy any 3 articles for free every month.
        </Link>
      </Box>
      <Flex>
        <Box flex="2" p={4}>
          <Heading as="h2" size="xl" mb={4}>
            Investors pull cash from ESG funds as performance lags
          </Heading>
          <Text fontSize="md" mb={4}>
            Sustainably focused equity funds suffer net $40bn of outflows in 2024, the first sustained exodus.
          </Text>
          <Text fontSize="sm" color="gray.500">
            2 HOURS AGO
          </Text>
        </Box>
        <Box flex="1" p={4}>
          <Image src="/images/car.jpg" alt="Electric Vehicle" />
        </Box>
      </Flex>
      <Flex>
        <Box flex="2" p={4}>
          <Heading as="h2" size="xl" mb={4}>
            The Big Read: China’s plan to sell cheap EVs to the rest of the world
          </Heading>
        </Box>
        <Box flex="1" p={4}>
          <Heading as="h3" size="lg" mb={4}>
            Editor's picks
          </Heading>
          <VStack align="start">
            <Link href="#" color="teal.500">
              What Hunter Biden tells us about America
            </Link>
            <Link href="#" color="teal.500">
              Behold the final casualties of Brexit
            </Link>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Home;