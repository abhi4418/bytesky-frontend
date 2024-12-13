import AnimatedCard from "@/components/features/AnimatedCard";
import { Logo5, Logo6, Logo7 } from "@/components/features/Logos"
import { SectionHeading } from "@/components/SectionHeading"
import { CardSpotlight } from "@/components/ui/card-spotlight"

export function FeatureSection() {
    return (
        <div id="subsidiaries" className=" pt-20">
            {/* top level heading */}
            <div className="flex flex-col items-center justify-center">
                <SectionHeading title="Subsidiaries" logoType="Star" />
            </div>

            {/* feature cards begin here */}
            <div className="pt-10 md:w-full lg:px-44 md:px-12 px-4 md:mx-auto grid grid-cols-1 gap-4">
                <div className="flex flex-col gap-2 col-span-1">
                  <AnimatedCard direction="right">
                      <CardSpotlight>
                          <div className="text-neutral-0 text-xl font-semibold pt-4 text-center">
                              ByteAI
                          </div>
                          <div className="text-neutral-40 text pt-4 text-center">
                              ByteAi specializes in AI-driven solutions, offering
                              services like LLM development, programmatic data
                              labeling, and ML-based testing for early AI model
                              training.
                          </div>
                      </CardSpotlight>
                    </AnimatedCard>

                    <AnimatedCard direction="left">
                    <CardSpotlight>
                        <div className="text-neutral-0 text-xl font-semibold pt-4 text-center">
                            ByteCompute
                        </div>
                        <div className="text-neutral-40 text pt-4 text-center">
                            ByteCompute revolutionizes tech infrastructure
                            through a cloud-based Desktop as a Service (DaaS)
                            solution, along with high-performance computing
                            platforms powered by A100 and H100 GPUs, enabling
                            organizations to advance AI and machine learning
                            capabilities while reducing hardware costs.
                        </div>
                    </CardSpotlight>
                    </AnimatedCard>
                </div>

                {/* right side */}
                <AnimatedCard direction="right">
                  <div className="flex flex-col gap-2 col-span-1">
                      <CardSpotlight>
                          <div className="text-neutral-0 text-xl font-semibold pt-4 text-center">
                              ByteVision
                          </div>
                          <div className="text-neutral-40 text pt-4 text-center">
                              ByteVision focuses on computer vision, providing
                              automated surveillance and workflow optimization for
                              factory environments as well as immense vitality in
                              the healthcare sector.
                          </div>
                      </CardSpotlight>
                  </div>
                </AnimatedCard>
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
                                  Impress stakeholders with professionally crafted
                                  reports and presentations.
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
                                  Stay in the loop with real-time updates,
                                  ensuring everyone is on the same page.
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
                                  Optimize your workflows and save time with
                                  efficient and structured templates.
                              </div>
                          </div>
                      </CardSpotlight>
                  </div>
              </div>
            </AnimatedCard>
        </div>
    )
}
