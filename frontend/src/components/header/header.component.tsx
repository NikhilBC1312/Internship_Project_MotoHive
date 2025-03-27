import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  HStack,
  Flex,
  Menu,
  Link as A,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
  Text,
  Center,
  MenuDivider,
  Box,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  useDisclosure,
  VStack,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { TbLogout } from "react-icons/tb";
import LogoutButton from "../logoutButton.component";
import { useAuth } from "../../hooks/useAuth";
import logoImage from "../../assets/images/logov2.png";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useLocation } from "react-router-dom";

/**
 * Header: A functional component representing a header in React with Chakra UI.
 */
const Header: React.FC = () => {
  const { user } = useAuth();
  const location = useLocation();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const headerItems = [
    { label: "Choose Us", path: "#chooseUs" },
    { label: "How To Rent", path: "#howToRent" }, // ✅ Fixed scrolling issue
    { label: "Service", path: "#service" },
    { label: "We Offer", path: "#weOffer" },
    { label: "Clients", path: "#clients" },
  ];

  return (
    <header className="flex justify-between items-center text-gray-700 py-2 px-4 sm:px-12 shadow-lg">
      {/* Logo */}
      <Link to="/">
        <img src={logoImage} className="sm:w-36 w-24 max-w-none" />
      </Link>

      {/* Desktop Navigation */}
      <HStack as="nav" spacing="8" display={{ base: "none", md: "flex" }}>
        <Link to="/">
          <Button variant="nav">Home</Button>
        </Link>
        {headerItems.map((item, i) => (
          <a key={i} href={item.path} onClick={onClose}>
            {/* ✅ Direct href ensures smooth scrolling */}
            <Button variant="nav">{item.label}</Button>
          </a>
        ))}
      </HStack>

      {/* Authentication & User Menu */}
      <div>
        {!user?.id ? (
          <>
            <Link to="/login">
              <Button
                colorScheme="teal"
                variant={location.pathname === "/login" || location.pathname === "/" ? "solid" : "outline"}
                size={{ base: "sm", md: "md" }}
              >
                Sign in
              </Button>
            </Link>
            <Link to="/signup" className="ml-3">
              <Button
                colorScheme="teal"
                variant={location.pathname === "/signup" ? "solid" : "outline"}
                size={{ base: "sm", md: "md" }}
              >
                Sign up
              </Button>
            </Link>
          </>
        ) : (
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton as={Button} rounded={"full"} variant={"link"} cursor={"pointer"} minW={0}>
                <Avatar size={"lg"} src={user?.image} />
              </MenuButton>
              <MenuList zIndex={99}>
                <Center>
                  <Avatar size={"2xl"} src={user?.image} />
                </Center>
                <Center>
                  <Text color="teal.400" fontWeight={500} fontSize={18} className="my-1 capitalize">
                    {user?.name}
                  </Text>
                </Center>
                <br />
                <MenuDivider />
                <MenuItem justifyContent={"center"} px="14px">
                  <Link to="/profile" className="w-full rounded-md hover:bg-teal-50 text-center py-2">
                    <Text fontWeight={500} fontSize={16}>Profile</Text>
                  </Link>
                </MenuItem>
                <MenuItem justifyContent={"center"} px="14px">
                  <Link to="/setting-profile/information" className="w-full rounded-md hover:bg-teal-50 text-center py-2">
                    <Text fontWeight={500} fontSize={16}>Settings</Text>
                  </Link>
                </MenuItem>
                <MenuItem color="red.400" borderRadius="8px" px="14px">
                  <LogoutButton>
                    <TbLogout className="mr-2 text-red-500" />
                    <Text color="red.400">Logout</Text>
                  </LogoutButton>
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        )}
      </div>

      {/* Mobile Navigation Button */}
      <IconButton
        size={"sm"}
        aria-label="Toggle navigation"
        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
        onClick={onOpen}
        display={{ base: "block", md: "none" }}
      />

      {/* Mobile Navigation Drawer */}
      <Drawer placement={"top"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <VStack as="nav" spacing="8">
              <Link to="/">
                <Button variant="nav">Home</Button>
              </Link>
              {headerItems.map((item, i) => (
                <a key={i} href={item.path} onClick={onClose}>
                  <Button variant="nav">{item.label}</Button>
                </a>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </header>
  );
};

export default Header;
