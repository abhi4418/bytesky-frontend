import { cn } from "@/lib/utils";
import { CartIcon } from "./CartIcon";
import { LockIcon } from "./LockIcon";
import { StarIcon } from "./StarIcon";
import { LinkIcon } from "./LinkIcon";

type SectionHeadingProps = {
  title: string;
  logoType: "Lock" | "Star" | "Cart" | "Link";
  className?: string;
};

export function SectionHeading({
  title,
  logoType,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(className, `max-w-[150px] `)}>
      <div
        style={{
          boxShadow:
            "rgba(50, 50, 93, 0.25) fu0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
        }}
        className="py-2 px-4  rounded-full  bg-dark-80 flex gap-2 items-center justify-center border border-dark-50"
      >
        {logoType === "Lock" ? (
          <LockIcon />
        ) : logoType === "Cart" ? (
          <CartIcon />
        ) : logoType === "Star" ? (
          <StarIcon />
        ) : (
          <LinkIcon />
        )}
        <div className="text-neutral-0 text-sm ">{title}</div>
      </div>
    </div>
  );
}
