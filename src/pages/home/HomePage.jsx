import Hero from "./Hero";
import Popular from "./Popular";

const HomePage = () => {
  return (
    <section className="bg-primaryBg pt-10 lg:pt-[140px]">
      <Hero />
      <Popular />
    </section>
  );
};

export default HomePage;
