import HeroHome from "../components/HeroHome";
import HowWeWork from "../components/HowWeWork";
import OurProjectsSection from "../components/OurProjectsSection";
import FeaturesSection from "../components/FeaturesSection";
import Reviews from "../components/Reviews";
import Faq from "../components/Faq";
import ContactForm from "../components/ContactForm";
import BlogSection from "../components/BlogSection";

const Home = () => {
    return (
        <main className="main">
            <HeroHome/>
            <HowWeWork/>
            <OurProjectsSection/>
            <FeaturesSection/>
            <Reviews/>
            <Faq/>
            <ContactForm/>
            <BlogSection/>
        </main>
    )
}

export default Home;
