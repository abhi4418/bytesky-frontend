import { LinkedInIcon } from "@/components/LinkedInIcon";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type FooterLink = {
    name: string;
    id: string;
}

const FooterLinks : FooterLink[] = [
    {name : "Overview" , id: "overview"},
    {name : "Features" , id: "features"},
    {name : "Product" , id: "testimonial"},
    {name : "Testimonial" , id: "testimonial"},
    {name : "FAQ" , id: "faq"},
]

export function FooterSection(){
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <footer className="w-screen bg-[#fbfbfb] pt-20">
            <motion.div
            ref={ref}
            initial={{ y: 100, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex items-center justify-center w-full mx-auto">
                <img className="w-[40px] h-[40px]" src="src\assets\logoimg.avif" />
                <div className="flex flex-col gap-2 pl-2">
                    <div className="text-sm mb-[-6px]">
                        ByteSky
                    </div>
                    <div className="text-sm text-[#707079]">
                        Easy Compute
                    </div>
                </div>
            </motion.div>  
            <div className="w-full mx-auto flex gap-4 justify-center pt-8">
                {FooterLinks.map((el)=>{
                    return (
                        <div>
                            <a href={`#${el.id}`} className={`text-sm hover:text-[#707079]
                            ${el.name==="FAQ" ? "underline" : ""}`}>
                                {el.name}
                            </a>
                        </div>
                    )
                })}
            </div>
            <div className="mt-20 max-w-screen-lg mx-auto h-[1px] bg-[#e5e5e8]"></div>
            <div className="flex md:flex-row md:justify-between max-w-screen-lg mx-auto pt-4 text-sm text-[#1c1c1c]
            flex-col gap-4 justify-center text-center mb-16 md:mb-0">
                <div className="md:text-center">
                    ©ByteSky Technologies Pvt. Ltd. 2024. All rights reserved. Privacy Policy.
                </div>
                <a href='https://www.linkedin.com/company/byteskyofficial/'
                className="hover:cursor-pointer"
                target="_blank">
                    <LinkedInIcon />
                </a>
            </div>
        </footer>
    )
}