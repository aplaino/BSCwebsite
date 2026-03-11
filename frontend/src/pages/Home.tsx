import FoodTruck from "../components/HomePage/FoodTruck";
import { Link } from "react-router-dom";
import EventNewsBubble from "../components/HomePage/EventNewsBubble";
import Gallery from "../components/HomePage/Gallery";
import { useEffect } from "react";
import HomeNav from "../components/HomePage/HomeNav";
import { motion, type Variants} from "framer-motion"; // Add this

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // 1. Animation variants for the Hero section
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  return (
    <main className="w-screen h-auto bg-beige-primary flex flex-col justify-center overflow-x-hidden">
      {/* -------------- LANDING ----------------- */}
      <section className="w-full h-full pt-20">
        <motion.article
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative flex flex-col gap-2 w-full min-h-[32rem] p-4 justify-center items-center"
        >
          <motion.p
            variants={itemVariants}
            className="font-secondary text-[#876E64] text-xl"
          >
            S I N C E 1992:
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="font-primary uppercase text-8xl md:text-9xl text-blue-primary text-center"
          >
            buster's sea cove
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="h-40 w-full flex justify-center items-center"
          >
            <p className="font-secondary text-[#876E64] text-md md:text-lg pr-10 border-r-beige-secondary border-r-2 text-right w-90">
              The founders of Toronto's renowned seafood legacy. Restaurants,
              food trucks & catering.
            </p>
            <Link
              to="/catering"
              className="font-primary text-beige-primary bg-blue-primary text-2xl p-2 ml-6 w-60 md:w-40 h-14 flex justify-center items-center rounded-[4rem] cursor-pointer hover:scale-105 duration-300 shadow-lg"
            >
              Book Now
            </Link>
          </motion.div>
          <div className="mt-4 flex w-full justify-center px-4 min-[1815px]:mt-0 min-[1815px]:w-auto min-[1815px]:px-0 min-[1815px]:absolute min-[1815px]:top-[24%] min-[1815px]:right-[5%]">
            <EventNewsBubble />
          </div>
        </motion.article>

        {/* Video Placeholder with a fade-in */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 1 }}
          className="h-80 w-full flex justify-center items-center"
        >
          <img
            src="/Landing.png"
            alt="Buster's Sea Cove landing"
            className="max-h-80 w-full object-cover border-t-4 border-b-4 border-[#876E64]"
          />
        </motion.div>
      </section>

      {/* -------------- Home navs -------------- */}
      <HomeNav />

      {/* -------------- FOOD TRUCK SCHEDULE (Scroll Reveal) -------------- */}
      <div>
        <FoodTruck />
      </div>

      <section className="w-full h-4 bg-beige-secondary"></section>

      {/* -------------- GALLERY (Scroll Reveal) -------------- */}
      <div>
        <Gallery />
      </div>

      {/* -------------- SERVING HOURS ----------------- */}
      <section className="bg-[url(/serving-hours-background.jpg)] w-full h-screen bg-cover flex justify-center items-center">
        <motion.img
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          src="/serving-hours.svg"
          alt="serving hours"
          className="h-90 md:120 lg:150 w-auto"
        />
      </section>

      <div className="w-full bg-beige-primary py-8 flex justify-center items-center">
        <button
          type="button"
          onClick={scrollToTop}
          className="font-primary uppercase text-beige-primary bg-blue-primary px-8 py-3 rounded-[3rem] border-2 border-blue-primary hover:bg-beige-primary hover:text-blue-primary transition-colors duration-300"
        >
          Return To Top
        </button>
      </div>
    </main>
  );
}
