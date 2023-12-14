import { ActivityIcon, PenLine } from "lucide-react";

const About = () => {
  return (
    <section
      className="mt-12 flex scroll-mt-28 flex-col items-center"
      id="about"
    >
      <PenLine className="h-12 w-12 text-muted-foreground" />
      <h2 className="text-2xl font-semibold">About Us</h2>
      <div className="mt-2 max-w-prose rounded-xl bg-foreground/10 px-9 pb-2 pt-8 text-sm">
        <p className="first">This is what we offer!</p>
        <ul className="sflex mt-4 flex-col items-center ">
          <ul>
            <li className="mt-3">
              🚀 <strong>Start Your AI Journey Today:</strong> Dive into the
              world of artificial intelligence with customized solutions that
              bring your business vision to life. Experience the future of
              innovation tailored just for you.
            </li>
            <li className="mt-3">
              ⬆️ <strong>Elevate Now:</strong> Discover how our tailored AI and
              tech solutions can lift your business operations to new heights.
              Get ready to soar above the competition with our expert
              strategies.
            </li>
            <li className="mt-3">
              🌟 <strong>Transform with AI:</strong> Embrace the power of
              innovative AI assistants and strategic insights. Transform your
              business processes and customer experiences into something
              extraordinary.
            </li>
            <li className="mt-3">
              🤝 <strong>Empower Your Journey:</strong> Join hands with us to
              infuse your business journey with advanced AI and strategic
              insights. Let&apos;s build a future where your business thrives
              with smart technology.
            </li>
            <li className="mt-3">
              🌐 <strong>Revolutionize Now:</strong> Redefine your online
              presence with our cutting-edge AI and Next.js expertise. Step into
              a new era of digital excellence and watch your business
              revolutionize the web.
            </li>
          </ul>
        </ul>

        <ActivityIcon className="divIcon2 mx-auto" />
      </div>
    </section>
  );
};

export default About;
