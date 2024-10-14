import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/images.jpeg";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image
        src={logo}
        boxSize="50px"
        margin="7px"
        borderRadius="2xl"
        boxShadow="0px 0px 1px #000;"
      />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
