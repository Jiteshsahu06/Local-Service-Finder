import Hero from "../components/Hero/Hero";
import Categories from "../components/Categories/Categories";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Stats from "../components/Stats/Stats";
import FeaturedProfessionals from "../components/FeaturedProfessionals/FeaturedProfessionals";
import Testimonials from "../components/Testimonials/Testimonials";
import FAQ from "../components/FAQ/FAQ";






function Home() {
  return (
    <>
        <Hero />
        <Categories />
        <WhyChooseUs />
        <Stats />
        <FeaturedProfessionals />
        <Testimonials />
        <FAQ />
    </>
  );
}

export default Home;