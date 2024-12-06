import { FeatureCard } from "@/components/features/FeatureCard"
import {
    Logo1,
    Logo2,
    Logo3,
    Logo4,
    Logo5,
    Logo6,
    Logo7,
} from "@/components/features/Logos"
import { PricewithLabel } from "@/components/features/PricewithLabel"
import { SectionHeading } from "@/components/SectionHeading"
import { motion } from "framer-motion"

export function FeatureSection() {
    return (
        <div id="features" className="mt-20">
            {/* top level heading */}
            <div className="flex flex-col items-center justify-center">
                <SectionHeading title="Features" logoType="Star" />
            </div>
            {/* content below heading */}
            <div className="max-w-screen-md mx-auto flex flex-col items-center justify-center pt-8">
                <div className="text-neutral-100 text-4xl font-semibold text-center">
                    Your Ultimate Computing Solution
                </div>
                <div className=" text-center pt-8 md:text-base text-neutral-60 px-12">
                    Discover how our solution can revolutionize the way you work
                    . Explore a myriad of features designed to enhance your
                    productivity.
                </div>
            </div>

            {/* feature cards begin here */}
            <div className="pt-20 mx-4 md:max-w-screen-lg md:mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* left side */}
                <div className="flex flex-col gap-2 col-span-1">
                    <FeatureCard>
                        <Logo1 />
                        <div className="text-neutral-100 text-xl font-semibold pt-4">
                            Tailored Cloud Configurations
                        </div>
                        <div className="text-neutral-60 text pt-4">
                            Explore ByteSky's range of configurations, from
                            Nimbus to ApexSky, designed to meet diverse
                            computing needs. Our offerings cater to startups,
                            enterprises, researchers, and more, with options
                            ranging from basic cloud space to cutting-edge
                            high-performance computing solutions.
                        </div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.3 }}
                            variants={{
                                hidden: { opacity: 0, x: "100%" },
                                visible: { opacity: 1, x: 0 },
                            }}
                        >
                            <img
                                decoding="async"
                                loading="lazy"
                                sizes="282px"
                                src="https://framerusercontent.com/images/Ye9h4tZhHZNbYAxBdTfPOOIpaAA.png?lossless=1"
                                alt=""
                                className="block w-full h-full rounded-inherit object-center object-contain image-auto"
                            />
                        </motion.div>
                    </FeatureCard>
                    <FeatureCard className="col-span-1">
                        <Logo3 />
                        <div className="text-neutral-100 text-xl font-semibold pt-4">
                            High-Performance GPU Instances
                        </div>
                        <div className="text-neutral-60 text pt-4">
                            Access powerful GPUs affordably with our innovative
                            approach. We combine multiple low-demand GPUs to
                            perform equivalently to high-end GPUs, offering
                            significant cost savings
                        </div>
                        <div className="text-neutral-60 text pt-4">
                            Our solution provides a pay-as-you-go instance to
                            GPU/CPU with pre-configured frameworks on a
                            user-friendly interface. Features include seamless
                            UI/UX for quick GPU provisioning, resource usage
                            monitoring, model fine-tuning capabilities, and
                            scalable API endpoint deployment.
                        </div>
                    </FeatureCard>
                </div>

                {/* right side */}
                <div className="flex flex-col gap-2 col-span-1">
                    <FeatureCard>
                        <Logo2 />
                        <div className="text-neutral-100 text-xl font-semibold pt-4">
                            Virtual Machines on Existing Hardware
                        </div>
                        <div className="text-neutral-60 text pt-4">
                            Give your old systems a new lease on life with our
                            cloud-based VMs! Use your existing hardware to run a
                            VM in the cloud, slashing e-waste and keeping costs
                            down. With pay-as-you-go pricing, easy setup, and 5
                            Gbps bandwidth, it’s perfect for schools upgrading
                            for CBSE, businesses avoiding pricey upgrades, and
                            gaming cafes needing a performance kick.
                        </div>
                    </FeatureCard>
                    <FeatureCard>
                        <Logo4 />
                        <div className="text-neutral-100 text-xl font-semibold pt-4">
                            Cost-Effective and Sustainable
                        </div>
                        <div className="text-neutral-60 text pt-4">
                            Our approach offers significant cost savings
                            compared to traditional hardware upgrades. By
                            repurposing enterprise systems for schools and
                            providing virtual solutions, we help reduce e-waste
                            and offer environmentally friendly alternatives.
                        </div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.3 }}
                            variants={{
                                hidden: { opacity: 0, x: "100%" },
                                visible: { opacity: 1, x: 0 },
                            }}
                        >
                            <img
                                decoding="async"
                                loading="lazy"
                                sizes="333px"
                                src="https://framerusercontent.com/images/XqKUvZZ5TEgB8AgyUCmjL18sN0.png"
                                alt=""
                                className="block w-full h-full rounded-inherit object-center object-contain image-auto"
                            />
                        </motion.div>
                    </FeatureCard>
                </div>
            </div>

            <div className="max-w-screen-lg mx-auto pt-10">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-4">
                    <FeatureCard className="flex gap-2 py-4">
                        <Logo5 />
                        <div className="flex flex-col gap-2">
                            <div className="text-neutral-100 text-xl font-semibold">
                                Professional Reporting
                            </div>
                            <div className="text-neutral-60">
                                Impress stakeholders with professionally crafted
                                reports and presentations.
                            </div>
                        </div>
                    </FeatureCard>

                    <FeatureCard className="flex gap-2 py-4">
                        <Logo6 />
                        <div className="flex flex-col gap-2">
                            <div className="text-neutral-100 text-xl font-semibold">
                                Real-Time Updates
                            </div>
                            <div className="text-neutral-60">
                                Stay in the loop with real-time updates,
                                ensuring everyone is on the same page.
                            </div>
                        </div>
                    </FeatureCard>

                    <FeatureCard className="flex gap-2 py-4">
                        <Logo7 />
                        <div className="flex flex-col gap-2">
                            <div className="text-neutral-100 text-[1.2rem] font-semibold">
                                Time-Efficient Workflows
                            </div>
                            <div className="text-neutral-60">
                                Optimize your workflows and save time with
                                efficient and structured templates.
                            </div>
                        </div>
                    </FeatureCard>
                </div>
            </div>

            <div className="max-w-screen-lg mx-auto pt-20">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-4">
                    <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true}}
                    transition={{ duration: 0.5 }}
                    variants={{
                    hidden: { opacity: 0, x: "-100%" },
                    visible: { opacity: 1, x: 0 }
                    }}
                    className="col-span-1">
                        <div className="flex flex-col items-center justify-center md:block">
                            <SectionHeading title="Traction" logoType="Cart" />
                        </div>
                        <div className="text-center md:text-left text-neutral-100 text-2xl font-semibold pt-4">
                            Hey there! We're ByteSky, revolutionizing cloud
                            computing.
                        </div>
                        <div className="text-neutral-60 text-base leading-tight pt-4 text-center md:text-left md:px-0 px-6">
                            Driven by a relentless commitment to providing
                            cost-effective, high-performance computing solutions
                            for researchers, startups, and enterprises.
                        </div>

                        <div className=" grid grid-cols-2 pt-8">
                            <PricewithLabel className="col-span-1" price="$25M+" label="Order Book Value" />
                            <PricewithLabel className="col-span-1" price="$15M+" label="Gen AI Enabled Startup" />
                            <PricewithLabel className="col-span-1" price="$5M+" label="Signed LOI with schools" />
                            <PricewithLabel className="col-span-1" price="$2M+" label="HPC Order" />
                        </div>
                    </motion.div>
                    <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true}}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: "100%" },
                        visible: { opacity: 1, x: 0 } 
                    }}
                    className="col-span-1">
                        <img
                            decoding="async"
                            loading="lazy"
                            sizes="min(min(100vw - 96px, 1440px), 580px)"
                            src="https://framerusercontent.com/images/IDYNQ1Og4G2KwdcbqWUDOgdrLI.png"
                            alt=""
                            className="block w-full h-full rounded-inherit object-center object-contain image-auto"
                        />
                    </motion.div>
                </div>
            </div>
        </div>

    )
}
