import { TextSideway } from "components/TextSideway";
import { SectionTitle } from "components/SectionTitle";
import { motion } from "framer-motion";
import { isEmpty } from "lodash";
import { Tag } from "components/Tag";
import Image from "next/image";
import ghImg from "components/Socials/github.svg";
import abImg from "public/img/code/ab.webp";
import fabbricaImg from "public/img/code/fabbrica.webp";
import { CSSCustomProperty } from "utils/misc";

const repositories = [
  {
    name: "arkadiuszbachorski.com",
    link: "https://github.com/arkadiuszbachorski/arkadiuszbachorskiv2",
    description: "View this page source code!",
    technologies: ["Next", "TypeScript", "Tailwind"],
    img: abImg,
  },
  {
    name: "Fabbrica",
    link: "https://github.com/arkadiuszbachorski/fabbrica",
    description: "Open source library to speed up the data mocking process",
    technologies: ["TypeScript", "NPM"],
    img: fabbricaImg,
  },
];

export const ShowMeTheCode = () => (
  <section className="bg-dark2 pt-section overflow-x-hidden">
    <div className="container relative pb-section">
      <TextSideway
        className="top-0 -left-10 h-full"
        textClassName="mt-40"
        lightBackground
      >
        OPEN_SOURCE()
      </TextSideway>
      <SectionTitle top="Talk is cheap" bottom="show me the code" />
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {repositories.map(({ description, name, technologies, link, img }) => (
          <motion.a
            href={link}
            target="_blank"
            key={name}
            className="flex flex-col pt-8 pb-2 md:pt-14 px-6 md:px-14 gap-8 rounded-3xl border-glow bg-glow [--radius:1.5rem]"
            initial={{
              ["--opacity" as CSSCustomProperty]: 0,
            }}
            variants={{
              hover: {
                ["--opacity" as CSSCustomProperty]: 0.2,
              },
            }}
            viewport={{ once: true, amount: 0.8 }}
            whileHover="hover"
            whileInView={{
              ["--opacity" as CSSCustomProperty]: 0.1,
              transition: { duration: 0.8 },
            }}
          >
            <h3 className="text-heading5 transition-colors text-turquoise group-hover:text-blue">
              {name}
            </h3>
            <p>{description}</p>
            {!isEmpty(technologies) && (
              <div className="flex flex-wrap gap-3">
                {technologies.map((technology) => (
                  <Tag key={technology}>{technology}</Tag>
                ))}
              </div>
            )}
            <div className="relative">
              <motion.div
                className="absolute left-1/2 top-1/2 z-[1] -translate-x-1/2 -translate-y-1/2"
                initial={{
                  opacity: 0,
                }}
                variants={{
                  hover: {
                    opacity: 0.15,
                  },
                }}
              >
                <Image src={ghImg} alt="GitHub" className="size-24" />
              </motion.div>
              <Image
                className="mt-2 2xl:mt-8 opacity-60"
                src={img}
                alt={`${name} code`}
                style={{
                  maskImage: "linear-gradient(black, transparent)",
                  maskMode: "alpha",
                }}
              />
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);
