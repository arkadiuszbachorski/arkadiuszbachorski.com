import { Company } from "./index.data";
import { motion } from "framer-motion";
import { animations } from "utils/animations";
import Link from "next/link";
import Image from "next/image";

interface CompanyItemProps {
  company: Company;
  index: number;
}

export const CompanyItem = ({ company, index }: CompanyItemProps) => (
  <motion.article
    className="flex flex-col lg:min-w-max lg:last:pr-24"
    {...animations.fadeIn({ delay: 0.1 * index, index })}
  >
    <header className="flex items-center gap-7">
      <Link
        href={company.link}
        className="flex-center size-16 bg-[red] rounded-full p-3 shrink-0 interactive-opacity"
        style={{
          backgroundColor: company.logo.color,
        }}
        aria-label={company.name}
      >
        {company.logo.img && (
          <Image
            src={company.logo.img}
            alt={`${company.name} logo`}
            className="h-full"
          />
        )}
      </Link>
      <div>
        <h3 className="text-nowrap text-body1 font-medium md:text-heading4">
          {company.position}
        </h3>
        <Link
          href={company.link}
          className="text-turquoise text-body1 font-medium md:text-heading5 interactive-opacity rounded"
        >
          @{company.name}
        </Link>
      </div>
    </header>
    <ul className="ml-[52px] mt-10 flex flex-col gap-4 pl-3 list-disc text-body1 grow">
      {company.points.map((point, index) => (
        <li key={index} className="pl-6 text-white/85">
          {point}
        </li>
      ))}
    </ul>
    <aside className="font-mono ml-[84px] text-white/60 pt-16 text-body2 mt-auto">
      {company.time}
    </aside>
  </motion.article>
);
