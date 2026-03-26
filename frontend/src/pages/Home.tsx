import FoodTruck from "../components/HomePage/FoodTruck";
import { Link } from "react-router-dom";
import EventNewsBubble from "../components/HomePage/EventNewsBubble";
import Gallery from "../components/HomePage/Gallery";
import ReviewBubble from "../components/HomePage/ReviewBubble";
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
          className="relative mx-auto grid w-full max-w-[110rem] gap-8 px-4 py-8 xl:grid-cols-[minmax(18rem,22rem)_minmax(0,1fr)_minmax(18rem,22rem)] xl:items-center xl:px-10"
        >
          <div className="hidden xl:flex xl:justify-end xl:self-center">
            <ReviewBubble />
          </div>

          <div className="flex min-h-[32rem] flex-col items-center justify-center gap-2 text-center">
            <motion.p
              variants={itemVariants}
              className="font-secondary text-xl text-[#876E64]"
            >
              S I N C E 1992:
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="font-primary uppercase text-7xl text-blue-primary sm:text-8xl md:text-9xl"
            >
              buster&apos;s sea cove
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="mt-4 flex w-full max-w-3xl flex-col items-center justify-center gap-6 md:h-40 md:flex-row"
            >
              <p className="w-full max-w-[28rem] text-center font-secondary text-md text-[#876E64] md:border-r-2 md:border-r-beige-secondary md:pr-10 md:text-right md:text-lg">
                The founders of Toronto&apos;s renowned seafood legacy.
                Restaurants, food trucks & catering.
              </p>
              <Link
                to="/catering"
                className="flex h-14 w-60 cursor-pointer items-center justify-center rounded-[4rem] bg-blue-primary p-2 font-primary text-2xl text-beige-primary shadow-lg duration-300 hover:scale-105 md:ml-6 md:w-40"
              >
                Book Now
              </Link>
            </motion.div>
          </div>

          <div className="hidden xl:flex xl:justify-start xl:self-center">
            <EventNewsBubble />
          </div>

          <div className="flex w-full flex-col items-center gap-4 px-4 xl:hidden">
            <div className="flex w-full justify-center">
              <EventNewsBubble />
            </div>
            <div className="flex w-full justify-center">
              <ReviewBubble />
            </div>
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
      <section className="bg-[url('/Commerce%20Court%20Photo_edited.jpg')] bg-center w-full h-[70vh] min-h-[32rem] bg-cover flex justify-center items-center">
        <motion.img
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          src="/serving-hours.svg"
          alt="serving hours"
          className="h-72 md:h-96 lg:h-[34rem] w-auto"
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
