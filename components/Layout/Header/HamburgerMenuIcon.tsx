import { motion } from "framer-motion";

interface HamburgerMenuIconProps {
  isOpen: boolean;
}

export const HamburgerMenuIcon = ({ isOpen }: HamburgerMenuIconProps) => (
  <motion.svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <motion.line
      x1="0"
      x2="24"
      y1="8"
      y2="8"
      stroke="white"
      animate={{
        rotate: isOpen ? "45deg" : 0,
        translateY: isOpen ? 4 : 0,
      }}
    />
    <motion.line
      x1="0"
      x2="24"
      y1="16"
      y2="16"
      stroke="white"
      animate={{
        rotate: isOpen ? "-45deg" : 0,
        translateY: isOpen ? -4 : 0,
      }}
    />
  </motion.svg>
);
