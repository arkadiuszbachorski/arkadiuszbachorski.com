import { motion } from "framer-motion";
import Image from "next/image";
import me from "public/img/me.webp";

export const MeImage = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.8, duration: 1 }}
    viewport={{ once: true }}
    className="absolute z-[-1] w-[60vw] -right-8 top-[6vh] lg:right-0 lg:top-[unset] lg:bottom-0 lg:w-[auto] lg:h-[90%]"
  >
    <Image src={me} alt="It's me!" className="lg:h-full lg:w-auto" />
    <div className="absolute size-full h-28 bottom-0 left-0 bg-[linear-gradient(180deg,transparent_0%,#000914_100%)] lg:hidden" />
  </motion.div>
);
