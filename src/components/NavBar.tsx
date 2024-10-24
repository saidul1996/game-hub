import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/images.jpeg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image
        src={logo}
        boxSize="50px"
        margin="7px"
        borderRadius="2xl"
        boxShadow="0px 0px 1px #000;"
      />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
