import AnimatedCard from "@/components/features/AnimatedCard";
import { Logo5, Logo6, Logo7 } from "@/components/features/Logos";
import { SectionHeading } from "@/components/SectionHeading";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import byteaigraphic from "@/assets/byteaigraphic.webp";
import byteailogo from "@/assets/ByteAi_Logo_.png";
import bytecomputegraphic from "@/assets/bytecomputegraphic.webp";
import bytecomputelogo from "@/assets/bytecomputelogo.png";
import bytevisiongraphic from "@/assets/bytevisiongraphic.webp";
import bytevisionlogo from "@/assets/ByteVisionlogo.png";
export function FeatureSection() {
  return (
    <div id="subsidiaries" className=" pt-20">
      {/* top level heading */}
      <div className="flex flex-col items-center justify-center">
        <SectionHeading title="Subsidiaries" logoType="Star" />
      </div>

      {/* feature cards begin here */}
      <div className="pt-10 md:w-full lg:px-44 md:px-12 px-4 md:mx-auto grid grid-cols-1 gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 flex-wrap gap-4 w-full ">
          <AnimatedCard direction="left">
            <CardSpotlight className="md:min-h-[40rem]">
              <div className="text-neutral-0 center text-xl font-semibold text-center">
                <img
                  src={byteailogo}
                  className="w-36 aspect-video object-cover"
                />
                {/* <div>ByteAI</div> */}
              </div>
              <div className="flex ">
                <div className="text-neutral-40 text pt-4 ">
                  ByteAi specializes in AI-driven solutions, offering services
                  like LLM development, programmatic data labeling, and ML-based
                  testing for early AI model training.
                </div>
              </div>
              <div className="center py-6">
                <img
                  src={byteaigraphic}
                  className="aspect-video object-cover h-[300px] rounded-lg "
                />
              </div>
            </CardSpotlight>
          </AnimatedCard>
          <AnimatedCard direction="right">
            <CardSpotlight className="md:min-h-[40rem]">
              <div className="text-neutral-0 center text-xl font-semibold text-center">
                <img src={bytevisionlogo} className="w-36 " />
                {/* <div>ByteAI</div> */}
              </div>
              <div className="text-neutral-40 text pt-4 ">
                ByteCompute revolutionizes tech infrastructure through a
                cloud-based Desktop as a Service (DaaS) solution, along with
                high-performance computing platforms powered by A100 and H100
                GPUs, enabling organizations to advance AI and machine learning
                capabilities while reducing hardware costs.
              </div>
              <div className="center py-6">
                <img
                  src={bytevisiongraphic}
                  className="aspect-video object-cover h-[300px] rounded-lg"
                />
              </div>
            </CardSpotlight>
          </AnimatedCard>
          <AnimatedCard direction="left">
            <CardSpotlight className="md:min-h-[40rem]">
              <div className="text-neutral-0 center text-xl font-semibold text-center">
                <img
                  src={bytecomputelogo}
                  className="w-36 aspect-video object-cover"
                />
                {/* <div>ByteAI</div> */}
              </div>
              <div className="text-neutral-40 text pt-4 ">
                ByteCompute revolutionizes tech infrastructure through a
                cloud-based Desktop as a Service (DaaS) solution, along with
                high-performance computing platforms powered by A100 and H100
                GPUs, enabling organizations to advance AI and machine learning
                capabilities while reducing hardware costs.
              </div>
              <div className="center py-6">
                <img
                  src={bytecomputegraphic}
                  className="aspect-video object-cover h-[300px] rounded-lg"
                />
              </div>
            </CardSpotlight>
          </AnimatedCard>

          {/* <AnimatedCard direction="right">
            <div className="flex flex-col gap-2 col-span-1">
              <CardSpotlight>
                <div className="text-neutral-0 text-xl font-semibold pt-4 text-center">
                  ByteVision
                </div>
                <div className="text-neutral-40 text pt-4 text-center">
                  ByteVision focuses on computer vision, providing automated
                  surveillance and workflow optimization for factory
                  environments as well as immense vitality in the healthcare
                  sector.
                </div>
                <div className="center py-6">
                  <img
                    src={byteaigraphic}
                    className="aspect-video object-cover h-[300px]"
                  />
                </div>
              </CardSpotlight>
            </div>
          </AnimatedCard> */}
        </div>

        {/* right side */}
      </div>

      <AnimatedCard direction="bottom">
        <div className="md:w-full md:px-12 lg:px-44 px-4 pt-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 md:gap-4  ">
            <CardSpotlight className="flex flex-col gap-2 py-4">
              <Logo5 />
              <div className="flex flex-col gap-2">
                <div className="text-neutral-0 text-lg font-semibold">
                  Professional Reporting
                </div>
                <div className="text-neutral-40">
                  Impress stakeholders with professionally crafted reports and
                  presentations.
                </div>
              </div>
            </CardSpotlight>

            <CardSpotlight className="flex flex-col gap-2 py-4">
              <Logo6 />
              <div className="flex flex-col gap-2">
                <div className="text-neutral-0 text-lg font-semibold">
                  Real-Time Updates
                </div>
                <div className="text-neutral-40">
                  Stay in the loop with real-time updates, ensuring everyone is
                  on the same page.
                </div>
              </div>
            </CardSpotlight>

            <CardSpotlight className="flex flex-col gap-2 py-4">
              <Logo7 />
              <div className="flex flex-col gap-2">
                <div className="text-neutral-0 text-[1.07rem] font-semibold">
                  Time-Efficient Workflows
                </div>
                <div className="text-neutral-40">
                  Optimize your workflows and save time with efficient and
                  structured templates.
                </div>
              </div>
            </CardSpotlight>
          </div>
        </div>
      </AnimatedCard>
    </div>
  );
}
