import { cn } from "@/lib/utils";

type PricewithLabelProps = {
    price : string ;
    label : string ;
    className? : string ;
}

export function PricewithLabel({price , label , className} : PricewithLabelProps) {
  return (
    <div className = {cn("flex flex-col gap-2 center text-center" , className)}>
        <div className="text-[#ff6522]  text-4xl lg:text-5xl ">
            {price}
        </div>
        <div className="text-neutral-60 md:text-xl text-center ">
            {label}
        </div>
    </div>
  )
}