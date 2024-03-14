import { TextSideway } from "components/TextSideway";
import Image from "next/image";
import playIcon from "icons/play.svg";
import { motion } from "framer-motion";
import { animations } from "utils/animations";

export const AboutMe = () => (
  <section className="bg-dark2">
    <div className="container pt-section relative">
      <TextSideway
        className="top-36 left-4 h-[calc(100%-120px)]"
        lightBackground
      >
        ABOUT:ME
      </TextSideway>
      <TextSideway
        className="justify-end opacity-50 top-0 lg:right-[900px] xl:right-[1000px] h-full"
        textClassName="mb-60"
        lightBackground
      >
        DARK: THEME === 'DARK',
      </TextSideway>
      <div className="ml-auto lg:max-w-[690px]">
        <motion.p
          className="text-heading4 mb-16"
          {...animations.fadeIn({ index: 0 })}
        >
          I specialize in building complex web products. On a mission to deliver
          exceptional experiences <br />
          for both users and developers.
        </motion.p>
        <motion.p
          className="text-body1 font-light text-white/80 mb-8"
          {...animations.fadeIn({ index: 1 })}
        >
          Within the team I am the guy who pursuits constant improvement,
          emphasizing code quality and delivering the best user experience
          possible. I optimize processes to accelerate time-to-market.
          <br className="hidden lg:inline" /> I learn and adapt rapidly. Team
          player and one-man-army at once.
        </motion.p>
        <motion.p
          className="text-body1 font-light text-white/80 mb-8"
          {...animations.fadeIn({ index: 2 })}
        >
          As an advocate of efficiency, I am a big fan of keyboard shortcuts.{" "}
          <br className="hidden lg:inline" />I love sleek, elegant dark UIs. My
          great strength lies in the fact that my profession is also my greatest
          passion.
        </motion.p>
        <motion.p
          className="text-body1 font-light text-white/80 mb-12"
          {...animations.fadeIn({ index: 3 })}
        >
          Beyond the code, I'm fueled by adrenaline and adventure.{" "}
          <br className="hidden lg:inline" />
          An enthusiast of motorcycles and cars. I do various sports - squash,
          gym, swimming. I love to travel, it’s great do discover new cultures!
          <br className="hidden lg:inline" /> Moreover, I used to produce{" "}
          <span className="relative">
            music.
            <a
              className="bg-blue hover:bg-blue-dark transition-colors flex justify-center items-center md:absolute mt-2 md:mt-0 top-3 -right-12 size-12 rounded-full focus-ring"
              href="https://soundcloud.com/quezpl/popular-tracks"
              target="__blank"
            >
              <Image src={playIcon} alt="play" />
            </a>
          </span>
        </motion.p>
        <motion.p
          className="text-heading5 mb-5"
          {...animations.fadeIn({ index: 4 })}
        >
          My favorite technologies
        </motion.p>
        <motion.ul
          className="list-disc list-inside grid grid-cols-2 sm:grid-cols-3 gap-y-4 text-body1 font-light"
          {...animations.fadeIn({ index: 4 })}
        >
          <li>TypeScript</li>
          <li>React</li>
          <li>Next.js</li>
          <li>Node</li>
          <li>Laravel</li>
          <li>Django</li>
        </motion.ul>
      </div>
    </div>
  </section>
);
