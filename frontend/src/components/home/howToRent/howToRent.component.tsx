import { Center, Flex, Heading, Box, Text } from "@chakra-ui/react";
import React from "react";
import { Reveal } from "../../motion/reveal.component";
import { FaMagnifyingGlassLocation, FaMapLocationDot, FaRoute, FaWrench } from "react-icons/fa6";
import { MdOutlineElectricBike, MdHandshake } from "react-icons/md";
import { GiCycle } from "react-icons/gi";
import CardSteps from "./cardSteps.component";

const HowToUseMotoHive: React.FC = () => {
  const dataSteps = [
    {
      icon: FaMagnifyingGlassLocation,
      title: "Select Location",
      text: "Choose your preferred location for bike rental or service.",
      after: true,
      delay: 0.5,
      id: 1,
    },
    {
      icon: MdOutlineElectricBike,
      title: "Choose Your Bike",
      text: "Select a rental bike or register your own for servicing.",
      after: true,
      delay: 1.0,
      id: 2,
    },
    {
      icon: FaWrench,
      title: "Get Expert Service",
      text: "Book maintenance or repairs with our certified mechanics.",
      after: true,
      delay: 1.5,
      id: 3,
    },
    {
      icon: FaRoute,
      title: "Enjoy Your Ride",
      text: "Explore with confidence—whether on a rental or your serviced bike.",
      after: true,
      delay: 2.0,
      id: 4,
    },
    {
      icon: FaMapLocationDot,
      title: "Return or Pick Up",
      text: "Return the rental bike or pick up your serviced bike from our hub.",
      after: false,
      delay: 2.5,
      id: 5,
    },
  ];

  return (
    <Flex
      id="howToRent"
      justifyContent="space-around"
      alignItems="center"
      flexDirection="column"
      gap={6}
      py="30px"
      minHeight="80vh"
      className="relative"
    >
      <Center flexDirection="column" gap={4}>
        <Box
          className="absolute w-full h-full top-0 left-0 bg-teal-100 opacity-25 -z-10"
          clipPath="circle(30.2% at 10% 50%)"
        />
        <Box
          className="absolute w-full h-full top-0 left-0 bg-teal-100 opacity-25 -z-10"
          clipPath="circle(30.2% at 50% 10%)"
        />
        <Box
          className="absolute w-full h-full top-0 left-0 bg-teal-100 opacity-25 -z-10"
          clipPath="circle(20.2% at 90% 5%)"
        />
        <Reveal>
          <Heading as="h3" size={{ base: "sm", md: "2xl" }} className="capitalize text-center">
            How to Rent & Service
          </Heading>
        </Reveal>
        <Reveal>
          <Heading as="h1" size={{ base: "xl", md: "2xl" }} className="py-4 text-center" color="orange.500">
            Simple & Easy Steps
          </Heading>
        </Reveal>
        <Reveal>
          <Text className="font-medium text-gray-500 text-center" fontSize={{ base: "xs", md: "md" }}>
            Choose Location, Select a Bike or Service, and Enjoy a Hassle-Free Ride
          </Text>
        </Reveal>
        <Reveal>
          <Text className="text-md font-medium text-gray-500 text-center" fontSize={{ base: "xs", md: "md" }}>
            Return rentals to our stations or pick up your serviced bike, ready to ride.
          </Text>
        </Reveal>
      </Center>
      <Flex flexDirection={{ base: "column", md: "row" }} gap={4} justifyContent="space-between">
        {dataSteps.map(({ icon, title, text, id, after, delay }) => (
          <CardSteps key={id} Icon={icon} title={title} text={text} after={after} delay={delay} />
        ))}
      </Flex>
    </Flex>
  );
};

export default HowToUseMotoHive;
