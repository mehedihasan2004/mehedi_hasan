import { ThreeDCard } from "@/components/aui";
import { Contact, Hero, Skills } from "@/components/home";

const Home = () => {
  return (
    <div className="flex flex-col gap-20">
      <Hero />
      <Contact />
      <Skills />
      <ThreeDCard />
    </div>
  );
};

export default Home;
