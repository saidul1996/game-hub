import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/images.jpeg";

const NavBar = () => {
  return (
    <HStack>
      <Image
        src={logo}
        boxSize="50px"
        margin="7px"
        borderRadius="2xl"
        boxShadow="0px 0px 1px #000;"
      />
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
