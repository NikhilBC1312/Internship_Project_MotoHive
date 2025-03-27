import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { IoTimeOutline } from "react-icons/io5";
import { CiWallet } from "react-icons/ci";
import { MdDirectionsBike } from "react-icons/md";
import { FaWrench, FaHandsHelping } from "react-icons/fa";
import { Reveal } from "../../motion/reveal.component";
import { IconType } from "react-icons";

import BikeImage from "../../../assets/images/bikes/bikeChoose.jpg";

type CardChooseProps = {
  id: number;
  title: string;
  description: string;
  Icon: IconType;
};

const CardChoose = ({ id, title, description, Icon }: CardChooseProps) => {
  return (
    <Box
      key={id}
      className="group flex items-center justify-center bg-white rounded-lg px-8 py-4 gap-4 transition-all duration-300 ease-in-out cursor-pointer"
      width={{ base: "80%", md: "400px" }}
      height={{ base: "auto", md: "150px" }}
      shadow="0px 0px 25px -5px rgba(0, 0, 0, 0.1), 0px 7px 10px -5px rgba(0, 0, 0, 0.04)"
      _hover={{
        color: "white",
        bg: "teal.400",
        shadow: "2xl",
        transform: "scale(1.05)",
        transition: "all 0.3s ease-in-out",
      }}
    >
      <Box
        className="flex items-center justify-center rounded-full bg-teal-200 p-3"
        _groupHover={{ bg: "teal.300", transition: "all 0.3s ease-in-out" }}
      >
        <Icon className="text-teal-500 sm:text-3xl text-xl group-hover:text-white" />
      </Box>
      <Box
        className="flex flex-col items-start justify-center gap-2"
        _groupHover={{ color: "white", transition: "all 0.3s ease-in-out" }}
      >
        <Reveal>
          <Heading as="h2" size={{ base: "14px", md: "18px" }} className="capitalize">
            {title}
          </Heading>
        </Reveal>
        <Reveal>
          <Text
            className="text-gray-500 sm:text-sm text-xs font-normal"
            _groupHover={{ color: "white", transition: "all 0.3s ease-in-out" }}
          >
            {description}
          </Text>
        </Reveal>
      </Box>
    </Box>
  );
};

const WhyChoose = () => {
  const data = [
    {
      id: 1,
      title: "Hassle-Free Rentals",
      description:
        "Whether you need a quick rental or expert servicing, MotoHive ensures a seamless experience—effortless booking, smooth rides, and top-tier maintenance, all in one platform",
      icon: MdDirectionsBike,
    },
    {
      id: 2,
      title: "Expert Bike Servicing",
      description:
        "From minor tune-ups to major repairs, our certified professionals ensure your ride stays in peak condition.",
      icon: FaWrench,
    },
    
    {
      id: 3,
      title: "Affordable & Flexible Plans",
      description:
        "Enjoy budget-friendly pricing for both rentals and servicing. Pay only for what you need, when you need it.",
      icon: CiWallet,
    },
    {
      id: 4,
      title: "24/7 Roadside Assistance",
      description:
        "Stranded? No worries! Our emergency support team is always ready to get you back on the road.",
      icon: FaHandsHelping,
    },
  ];

  return (
    <Box id="chooseUs" className="relative flex flex-col justify-center items-center gap-12 my-5 py-5">
      <Box
        className="absolute w-2/5 h-full top-1 right-12 bg-teal-100 -z-10 opacity-25"
        clipPath="polygon(30% 0%, 100% 0%, 70% 100%, 0% 100%)"
      />
      <Reveal>
        <Heading as="h2" size={{ base: "sm", md: "xl" }} className="mb-3 capitalize" mt={100}>
          Why Choose MotoHive? 🚴‍♂️🔧✨
        </Heading>
      </Reveal>
      <Reveal>
         <Text className="text-gray-500 sm:text-base text-sm font-medium mb-5" maxWidth="600px">
           🚲 <strong>Seamless Bike Rentals & Expert Servicing</strong> – Get your perfect ride or maintain your own with ease.
         </Text>
         <Text className="text-gray-500 sm:text-base text-sm font-medium mb-5" maxWidth="600px">
           ⚙️ <strong>Effortless Experience</strong> – Quick rentals and reliable maintenance via our user-friendly platform.
         </Text>
         <Text className="text-gray-500 sm:text-base text-sm font-medium mb-5" maxWidth="600px">
            🌍 <strong>Eco-Friendly & Sustainable</strong> – Rent a bike or keep yours in top shape while reducing your carbon footprint.
          </Text>
          <Text className="text-gray-500 sm:text-base text-sm font-medium mb-5" maxWidth="600px">
             🤝 <strong>Community-Driven</strong> – Join a passionate network of riders who value adventure and top-tier service.
          </Text>
          <Text className="text-gray-500 sm:text-base text-sm font-medium mb-5" maxWidth="600px">
             🔧 <strong>Trusted Maintenance</strong> – From routine servicing to emergency repairs, we’ve got you covered.
          </Text>
          <Text className="text-gray-500 sm:text-base text-sm font-medium mb-5" maxWidth="600px">
             <strong>Choose MotoHive – Where Every Ride is Smooth & Worry-Free! 🚴‍♂️🔧</strong>
          </Text>
       </Reveal>

      <Box className="w-full flex md:flex-row flex-col justify-evenly gap-5">
        <Box className="flex-1 text-center">
          <Image src={BikeImage} mx="auto" width={{ base: "80%", md: "100%" }} mt={10} />
        </Box>
        <Box className="flex flex-1 flex-col gap-4 md:justify-start items-center">
          {data.map((item) => (
            <CardChoose key={item.id} id={item.id} title={item.title} description={item.description} Icon={item.icon} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default WhyChoose;
