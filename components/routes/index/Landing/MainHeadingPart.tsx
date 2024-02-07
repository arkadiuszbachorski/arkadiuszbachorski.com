import { ReactNode } from "react";
import { motion } from "framer-motion";

interface MainHeadingPartProps {
  children?: ReactNode;
  className?: string;
  index: number;
}

export const MainHeadingPart = ({
  children,
  index,
  className,
}: MainHeadingPartProps) => (
  <span className="flex overflow-hidden">
    <motion.span
      initial={{ y: "100%" }}
      whileInView={{ y: 0 }}
      transition={{ delay: 0.3 + index * 0.1 }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.span>
  </span>
);
