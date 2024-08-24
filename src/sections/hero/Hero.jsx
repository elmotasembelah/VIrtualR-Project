import MaxWidthWrapper from "../../components/MaxWidthWrapper";
import video1 from "../../assets/video1.mp4";
import video2 from "../../assets/video2.mp4";
import Btn from "../../components/btn/Btn";

const Hero = () => {
  return (
    <MaxWidthWrapper className="mt-16 text-center">
      <article className="flex flex-col items-center gap-10">
        <h1 className="lg:text lg text-4xl tracking-wide sm:text-6xl lg:text-7xl">
          VirtualR build tools{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent">
            for developers
          </span>
        </h1>
        <p className="max-w-4xl text-lg text-neutral-500">
          Empower your creativity and bring your VR app ideas to life with our
          intuitive development tools. Get started today and turn your
          imagination into immersive reality!
        </p>

        <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-8">
          <Btn text="Start for Free" variant="accent" />
          <Btn text="Documentation" />
        </div>

        <div className="mt-12 flex w-fit flex-col gap-2 sm:flex-row">
          <video
            src={video1}
            autoPlay
            muted
            loop
            className="rounded-lg border border-orange-700 sm:w-1/2"
          ></video>
          <video
            src={video2}
            autoPlay
            muted
            loop
            className="rounded-lg border border-orange-700 sm:w-1/2"
          ></video>
        </div>
      </article>
    </MaxWidthWrapper>
  );
};
export default Hero;
