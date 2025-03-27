import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

type ServiceBackgroundProps = {
  children: ReactNode;
  variant?: "whyChoose" | "howToRent";
};

const ServiceBackground = ({ children, variant }: ServiceBackgroundProps) => {
  const bgStyles = {
    whyChoose: {
      clipPath: "polygon(30% 0%, 100% 0%, 70% 100%, 0% 100%)",
      bgColor: "teal.100",
      opacity: 0.2,
    },
    howToRent: {
      clipPath: "polygon(40% 0%, 100% 10%, 60% 100%, 0% 90%)",
      bgColor: "blue.100",
      opacity: 0.2,
    },
  };

  const selectedStyle = bgStyles[variant || "whyChoose"];

  return (
    <Box position="relative" width="100%" height="100%">
      {/* Background Layer */}
      <Box
        className="absolute w-2/5 h-full top-1 right-12 -z-10"
        bg={selectedStyle.bgColor}
        opacity={selectedStyle.opacity}
        clipPath={selectedStyle.clipPath}
      />
      {/* Content */}
      {children}
    </Box>
  );
};

export default ServiceBackground;
