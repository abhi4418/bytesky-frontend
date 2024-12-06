import { cn } from "@/lib/utils";
import { CartIcon } from "./CartIcon";
import { LockIcon } from "./LockIcon";
import { StarIcon } from "./StarIcon";

type SectionHeadingProps = {
    title : string;
    logoType : "Lock" | "Star" | "Cart" ;
    className? : string;
}

export function SectionHeading({title , logoType , className} : SectionHeadingProps) {
  return (
    <div className={cn(className , `max-w-[150px] font-thin`)}>
          <div
          style={{
            boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
          }}
          className="py-2 px-4  rounded-full border border-gray-100 flex gap-2 items-center justify-center
          shadow-md">
            {logoType === "Lock" ? <LockIcon /> : logoType==="Cart"? <CartIcon /> : <StarIcon />}
            <div className="text-neutral-100 text-sm font-semibold">
                {title}
            </div>
          </div>
    </div>
  )
}

