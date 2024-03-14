import { TextSideway } from "components/TextSideway";
import { motion } from "framer-motion";
import { ButtonDot } from "components/ButtonDot";
import { Socials } from "components/Socials";
import { Logo } from "components/Logo";
import { onMailClick, useMail } from "utils/useMail";

export const Footer = () => {
  const mail = useMail();
  return (
    <footer className="container flex flex-col pt-section pb-10 relative">
      <TextSideway className="top-36 left-4 h-[calc(100%-300px)]">
        CONTACT:ME
      </TextSideway>
      <TextSideway
        className="justify-end opacity-50 top-0 right-72 h-[calc(100%-100px)]"
        textClassName="mb-12"
      >
        SOCIAL_S
      </TextSideway>
      <section className="md:ml-auto lg:max-w-[690px] mb-24 sm:mb-36">
        <p className="text-body1 opacity-85 font-light mb-14">
          Would you like to collaborate? Do you have a project in mind? <br />
          Just want to say hello? Hit me up!
        </p>
        <motion.button
          onClick={onMailClick}
          className="block sm:text-center text-[6vw] md:text-[52px] lg:text-heading3 font-medium mb-20 sm:mb-24 text-transparent bg-white bg-clip-text transition-[background-position,opacity] bg-[length:280%] interactive-opacity rounded"
          style={{
            backgroundImage:
              "linear-gradient(to right, #2DF2FF, #4453D6, #2DF2FF)",
          }}
          animate={{
            backgroundPosition: ["0%", "280%"],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            ease: "linear",
            duration: 8,
          }}
        >
          {mail}
        </motion.button>
        <div className="flex justify-between flex-wrap space-y-5 sm:space-y-0 relative">
          <ButtonDot size="large" onClick={onMailClick} className="mr-3">
            Drop me a line
          </ButtonDot>
          <Socials />
        </div>
      </section>
      <section className="flex justify-between items-center flex-grow">
        <Logo />
        <p className="text-body2 opacity-50 font-light">
          Arkadiusz Bachorski © {new Date().getFullYear()}
        </p>
      </section>
    </footer>
  );
};
