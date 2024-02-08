import { Contact, Hero, Skills } from "@/components/home";

const Home = () => {
  return (
    <div className="flex flex-col gap-20">
      <Hero />
      <Contact />
      <Skills />
    </div>
  );
};

export default Home;
