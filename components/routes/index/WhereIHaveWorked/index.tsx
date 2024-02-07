import { useRef } from "react";
import { TextSideway } from "components/TextSideway";
import { SectionTitle } from "components/SectionTitle";
import classNames from "classnames";
import { companies } from "./index.data";
import { CompanyItem } from "./CompanyItem";
import { ArrowButton } from "./ArrowButton";

export const WhereIHaveWorked = () => {
  const ref = useRef<HTMLDivElement>(null);

  const goPrevious = () => {
    if (!ref.current) return;
    ref.current.scrollTo({
      left: Math.max(0, ref.current.scrollLeft - 550),
      behavior: "smooth",
    });
  };

  const goNext = () => {
    if (!ref.current) return;
    ref.current.scrollTo({
      left: ref.current.scrollLeft + 550,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-dark1 pt-section pb-20 lg:pb-0 relative overflow-x-hidden">
      <div className="container relative lg:pb-[568px]">
        <TextSideway className="top-0 -left-10 h-full">TIMELINE</TextSideway>
        <SectionTitle top="Where" bottom="I have worked" />
        <section
          className={classNames(
            "lg:[--container:1024px] xl:[--container:1280px] 2xl:[--container:1536px]",
            "flex flex-col lg:flex-row lg:max-w-[calc(100%+((100vw-var(--container))/2))] gap-16 lg:gap-28 lg:overflow-x-scroll lg:no-scrollbar lg:absolute"
          )}
          ref={ref}
        >
          {companies.map((company, index) => (
            <CompanyItem key={company.name} index={index} company={company} />
          ))}
        </section>
        <nav className="hidden lg:flex font-mono absolute bottom-12 left-12 flex-row gap-4 opacity-60">
          <ArrowButton
            aria-label="Previous"
            onClick={goPrevious}
            className="rotate-180"
          />
          <ArrowButton aria-label="Next" onClick={goNext} />
        </nav>
      </div>
    </section>
  );
};
