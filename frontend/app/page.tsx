import { Hero } from "@/components/home";

const Home = () => {
  return (
    <div className="flex flex-col gap-20 h-[850px]">
      <Hero />
      <Hero />
      <Hero />
      <Hero />
    </div>
  );
};

export default Home;
