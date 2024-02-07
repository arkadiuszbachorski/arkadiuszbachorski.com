import { ReactNode } from "react";

interface CaptionProps {
  title?: ReactNode;
  description?: ReactNode;
}

export const Caption = ({ title, description }: CaptionProps) => (
  <>
    <h2 className="text-heading4 font-medium text-turquoise mb-4 mt-8 xl:mt-16 xl:mb-6">
      {title}
    </h2>
    <p className="text-white/85 text-body1 max-w-[510px]">{description}</p>
  </>
);
