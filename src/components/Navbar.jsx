import { Box, Flex, Link, Spacer, Text, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="gray.100" px={4} py={2} boxShadow="md">
      <Flex align="center">
        <Text fontSize="2xl" fontWeight="bold">
          FINANCIAL TIMES
        </Text>
        <Spacer />
        <Flex>
          <Link as={RouterLink} to="/" mx={2}>
            Home
          </Link>
          <Link as={RouterLink} to="/world" mx={2}>
            World
          </Link>
          <Link as={RouterLink} to="/us" mx={2}>
            US
          </Link>
          <Link as={RouterLink} to="/companies" mx={2}>
            Companies
          </Link>
          <Link as={RouterLink} to="/tech" mx={2}>
            Tech
          </Link>
          <Link as={RouterLink} to="/markets" mx={2}>
            Markets
          </Link>
          <Link as={RouterLink} to="/climate" mx={2}>
            Climate
          </Link>
          <Link as={RouterLink} to="/opinion" mx={2}>
            Opinion
          </Link>
          <Link as={RouterLink} to="/lex" mx={2}>
            Lex
          </Link>
          <Link as={RouterLink} to="/work-careers" mx={2}>
            Work & Careers
          </Link>
          <Link as={RouterLink} to="/life-arts" mx={2}>
            Life & Arts
          </Link>
          <Link as={RouterLink} to="/htsi" mx={2}>
            HTSI
          </Link>
        </Flex>
        <Spacer />
        <Button as={RouterLink} to="/subscribe" mx={2}>
          Subscribe
        </Button>
        <Button as={RouterLink} to="/signin" mx={2}>
          Sign In
        </Button>
      </Flex>
    </Box>
  );
};

export default Navbar;