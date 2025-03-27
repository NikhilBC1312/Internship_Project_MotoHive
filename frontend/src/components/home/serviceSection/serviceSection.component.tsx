import React from "react";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { MdBuild } from "react-icons/md";

const ServiceSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="service" className="py-12 text-center">
      <h2 className="text-3xl font-bold text-gray-800">Our Services</h2>
      <p className="text-gray-600 mt-2">
        Find the best nearby service stations and high-quality bike spare parts.
      </p>

      <Button
        leftIcon={<MdBuild />}
        colorScheme="teal"
        variant="solid"
        size="lg"
        className="mt-4 hover:bg-teal-600 transition duration-300 ease-in-out"
        onClick={() => navigate("/services")}
      >
        Explore Services
      </Button>
    </section>
  );
};

export default ServiceSection;
