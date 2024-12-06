import { ContainerScroll } from "@/components/ui/container-scroll-animation";

type Props = {};

export default function HeroSection({}: Props) {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll titleComponent={<></>}>
        <img
          src={`/linear.webp`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
