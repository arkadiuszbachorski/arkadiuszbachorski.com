import { TextSideway } from "components/TextSideway";
import { ButtonDot } from "components/ButtonDot";
import { motion } from "framer-motion";
import { animations } from "utils/animations";
import { MainHeadingPart } from "./MainHeadingPart";
import { MeImage } from "./MeImage";
import { onMailClick } from "utils/useMail";

export const Landing = () => (
  <section className="overflow-hidden">
    <div className="flex items-start justify-center flex-col gap-10 lg:gap-16 container relative h-[calc(100vh-100px)]">
      <MeImage />
      <motion.h2
        {...animations.landingSecondLayer}
        className="text-heading4 md:text-heading3 font-medium text-turquoise mt-20 lg:mt-0 drop-shadow-[1px_1px_0px_#000914] flex"
      >
        Arkadiusz Bachorski
      </motion.h2>
      <motion.h1 className="text-heading3 md:text-heading2 lg:text-heading1 flex flex-col font-bold uppercase drop-shadow-[1px_1px_0px_#000914]">
        <MainHeadingPart index={0}>Fullstack</MainHeadingPart>
        <MainHeadingPart index={1} className="ml-24 md:ml-36 xl:ml-[19rem]">
          Engineer
        </MainHeadingPart>
      </motion.h1>
      <motion.div {...animations.landingSecondLayer}>
        <ButtonDot
          size="large"
          onClick={onMailClick}
          className="ml-24 md:ml-36 xl:ml-[19rem]"
        >
          Contact me
        </ButtonDot>
      </motion.div>
      <TextSideway
        className="top-0 left-4 h-full md:top-[16%] md:h-[calc(100%-144px)] z-[-1]"
        showOnMobile
      >
        INTRO_DUCTION
      </TextSideway>
      <TextSideway
        className="lg:justify-end opacity-50 top-0 left-32 z-[-1] lg:left-[10rem] xl:right-[1000px] h-full"
        textClassName="mt-2 lg:mt-0 lg:mb-24"
        showOnMobile
      >
        BUILDING_SASS()
      </TextSideway>
    </div>
  </section>
);
