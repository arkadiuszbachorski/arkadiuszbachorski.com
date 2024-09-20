import { SectionTitle } from "components/SectionTitle";
import Image from "next/image";
import mockupRI from "public/img/mockups/robustintelligence.webp";
import mockupFormless from "public/img/mockups/formless.webp";
import mockupMtab from "public/img/mockups/mtab.webp";
import mockupSmoothie from "public/img/mockups/smoothie.webp";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { TextSideway } from "components/TextSideway";
import { Card } from "./Card";
import { Caption } from "./Caption";
import { Container } from "./Container";

const spring = {
  stiffness: 500,
  damping: 25,
};

export const WhatIveWorkedOn = () => {
  const [isProjectHovered, setIsProjectHovered] = useState(false);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springX = useSpring(cursorX, spring);
  const springY = useSpring(cursorY, spring);

  useEffect(() => {
    const moveCursor = (event: MouseEvent) => {
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
    // mousemove event listener can be mounted once only
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="bg-dark2 py-section xl:pb-20 overflow-x-hidden">
      <motion.div
        className="flex-center fixed -top-7 -left-7 size-14 bg-[white] rounded-full z-[10] pointer-events-none mix-blend-exclusion"
        style={{
          translateX: springX,
          translateY: springY,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isProjectHovered ? 1 : 0 }}
      >
        <div className="text-[black] font-mono">VIEW</div>
      </motion.div>
      <div className="container relative">
        <TextSideway
          className="top-[930px] 2xl:top-[1050px] opacity-50 left-1/2 h-[420px] lg:!hidden xl:!flex"
          textClassName="mt-20"
          lightBackground
        >
          SELECTED_WORK()
        </TextSideway>
        <SectionTitle top="What I've" bottom="worked on" />
        <div className="grid grid-cols-1 gap-24 xl:grid-cols-12 xl:auto-rows-[160px] 2xl:auto-rows-[180px] xl:gap-y-2">
          <Container className="xl:col-span-7 xl:row-start-1" index={0}>
            <Card
              className="aspect-[1/0.7] xl:aspect-[1/0.8]"
              href="https://www.robustintelligence.com"
              onSetIsProjectHovered={setIsProjectHovered}
            >
              <motion.div
                animate={{
                  scale: 1.3,
                }}
                variants={{
                  hover: {
                    scale: 1.4,
                    x: -36,
                  },
                }}
              >
                <Image src={mockupRI} alt="Robust Intelligence" />
              </motion.div>
            </Card>
            <Caption
              title="Robust Intelligence"
              description="RIME helps to detect AI model vulnerabilities and automatically prevent bad outcomes"
            />
          </Container>
          <Container className="xl:col-span-5 xl:row-start-2" index={1}>
            <Card
              className="aspect-[1/1] xl:aspect-[1/1.1]"
              href="https://mtab.com/marketplace/"
              onSetIsProjectHovered={setIsProjectHovered}
            >
              <motion.div
                className="-translate-y-5"
                animate={{
                  scale: 1,
                  x: -48,
                  y: 24,
                }}
                variants={{
                  hover: {
                    scale: 1.1,
                    x: -30,
                  },
                }}
              >
                <Image src={mockupMtab} alt="mTab Marketplace" />
              </motion.div>
            </Card>
            <Caption
              title="mTab Marketplace"
              description="Buy and analyze third-party research from top providers, instantly"
            />
          </Container>
          <Container className="xl:col-span-5 xl:row-start-6" index={2}>
            <Card
              href="https://formless.xyz/"
              onSetIsProjectHovered={setIsProjectHovered}
              className="aspect-[1/0.9] xl:aspect-[1/0.9]"
            >
              <motion.div
                initial={{
                  scale: 0.6,
                  y: 40,
                }}
                variants={{
                  hover: {
                    y: 60,
                    scale: 0.65,
                  },
                }}
              >
                <Image src={mockupFormless} alt="Formless" />
              </motion.div>
            </Card>
            <Caption
              title="Formless"
              description="Landing page for decentralized network and digital space"
            />
          </Container>
          <Container
            className="xl:col-span-7 xl:row-start-7 xl:!row-span-4"
            index={3}
          >
            <Card
              href="https://www.smoothie.so"
              onSetIsProjectHovered={setIsProjectHovered}
              className="aspect-[1/0.6]"
            >
              <motion.div
                className="-translate-y-5"
                initial={{
                  scale: 0.8,
                  y: 25,
                }}
                variants={{
                  hover: {
                    scale: 0.9,
                    y: 40,
                  },
                }}
              >
                <Image src={mockupSmoothie} alt="Smoothie" />
              </motion.div>
            </Card>
            <Caption
              title="Smoothie"
              description="Product review platform that uses blockchain to verify real people are writing reviews"
            />
          </Container>
        </div>
      </div>
    </section>
  );
};
