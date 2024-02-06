import { Contact, Hero } from "@/components/home";

const Home = () => {
  return (
    <div className="flex flex-col gap-20">
      <Hero />
      <Contact />
    </div>
  );
};

export default Home;
