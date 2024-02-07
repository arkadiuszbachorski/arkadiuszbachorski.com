import { AnimatePresence, motion } from "framer-motion";
import { CSSCustomProperty } from "utils/misc";
import { useOpenState } from "utils/useOpenState";
import { ReactNode } from "react";

interface MobileMenuProps {
  menu: ReturnType<typeof useOpenState>;
  children?: ReactNode;
}

export const MobileMenu = ({ menu, children }: MobileMenuProps) => (
  <AnimatePresence>
    {menu.isOpen && (
      <motion.nav
        className="flex lg:hidden pb-12 pt-5 bg-dark2 w-full fixed left-0 top-0 z-20"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(45, 242, 255, var(--bgOpacity)), transparent), #021023",
        }}
        initial={{
          height: 0,
          ["--bgOpacity" as CSSCustomProperty]: 0,
        }}
        animate={{
          height: "100dvh",
          ["--bgOpacity" as CSSCustomProperty]: 0.15,
        }}
        transition={{
          ["--bgOpacity"]: {
            duration: 2,
            delay: 0.9,
          },
        }}
        exit={{
          height: 0,
          opacity: 0,
          ["--bgOpacity" as CSSCustomProperty]: 0,
          transition: {
            delay: 0.6,
            opacity: {
              delay: 0.7,
              duration: 0.2,
            },
            ["--bgOpacity"]: {
              duration: 0.3,
              delay: 0,
            },
            height: {
              duration: 0.3,
              delay: 0.6,
            },
          },
        }}
      >
        <div className="container flex flex-col justify-between items-center">
          {children}
        </div>
      </motion.nav>
    )}
  </AnimatePresence>
);
