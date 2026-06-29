import { cn } from "../../utils/helpers";

export default function Container({ children, className, as: Tag = "div" }) {
  return (
    <Tag className={cn("mx-auto w-full max-w-[1400px] px-4 md:px-6 lg:px-8 xl:px-10", className)}>
      {children}
    </Tag>
  );
}
