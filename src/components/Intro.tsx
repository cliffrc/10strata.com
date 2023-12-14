import Image from "next/image";
import profileImg from "@/public/10strata-logo-vertical.png";

const Intro = () => {
  return (
    <section
      className="mx-auto mt-28 max-w-[50rem]  scroll-mt-28 items-center text-center sm:mb-0"
      id="home"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <div>
            <Image
              src={profileImg}
              alt="10strata logo"
              priority
              style={{
                width: "192px",
                height: "auto",
              }}
              className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            />
          </div>
          <span className="absolute -bottom-4 -right-2 -rotate-12 text-4xl">
            🥇
          </span>
        </div>
      </div>
      <h1 className="small-caps mb-10 mt-7 max-w-lg px-4 text-center text-4xl !leading-[1.5] sm:text-2xl">
        🌟 Transform with AI.{" "}
        <span className="font-[700] underline">Embrace the power</span> of
        innovative AI assistants and{" "}
        <span className="text-2xl font-[700] text-zinc-500 underline">
          strategic insights
        </span>
        . Transform your business processes and customer experiences into{" "}
        <span className="font-[800] underline">something extraordinary</span>.
      </h1>
      <p>
        In a world where staying ahead means embracing the new, our AI solutions
        offer you the cutting edge in technology and strategy. Whether it&apos;s
        through custom chatbots that engage your customers, prompt engineering
        that hones your AI&apos;s effectiveness, or API creation and consumption
        that streamlines your operations, we are here to ensure that your
        business not only keeps up but sets the pace.
      </p>
      <p>
        Our expertise in advanced technologies like OpenAI, Next.js, and React,
        combined with a deep understanding of business strategies from AI role
        development to content repurposing and growth hacking, ensures that your
        company is not just part of the AI revolution, but leading it.
        Let&aspos;s collaborate to turn your visions into reality, making your
        business not just a player but a game-changer in your industry.
      </p>
      <p className="mt-4">
        Transform with AI. Embrace the power of innovative AI assistants and
        strategic insights. Transform your business processes and customer
        experiences into something extraordinary.
      </p>
      <p className="small-caps mb-10 mt-4  max-w-md px-4 text-center text-base font-normal italic !leading-[1.5] text-zinc-600 sm:text-base">
        ... with{" "}
        <span className=" font-bold underline">
          Our Expertise in Content Repurposing
        </span>
        , Growth Hacking, and{" "}
        <span className=" font-bold underline">
          Cutting-Edge Development Tools
        </span>{" "}
        like Next.js & React.{" "}
        <span className=" font-bold underline">
          Innovative Tech like TypeScript and Prisma
        </span>{" "}
        will help supercharge your brand&apos;s growth and online influence.
      </p>
    </section>
  );
};

export default Intro;
