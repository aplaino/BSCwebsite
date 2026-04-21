import FoodTruck from "../components/HomePage/FoodTruck";
import { Link } from "react-router-dom";
import EventNewsBubble from "../components/HomePage/EventNewsBubble";
import Gallery from "../components/HomePage/Gallery";
import ReviewBubble from "../components/HomePage/ReviewBubble";
import { useEffect } from "react";
import HomeNav from "../components/HomePage/HomeNav";
import Scroll from "../components/HomePage/Scroll";
import Seo from "../components/Seo";
import { motion, type Variants} from "framer-motion";

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
      <Seo
        title="Seafood Restaurant, Catering & Food Truck in Toronto"
        description="Buster's Sea Cove serves fresh seafood in Toronto with restaurant menus, food truck events, and catering for corporate functions, weddings, and private events across the GTA."
        path="/"
        image="/Landing.webp"
      />
      {/* -------------- LANDING ----------------- */}
      <section className="w-full h-full pt-20">
        <motion.article
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative mx-auto grid w-full max-w-[110rem] gap-8 px-6 py-14 md:py-20 xl:grid-cols-[minmax(18rem,22rem)_minmax(0,1fr)_minmax(18rem,22rem)] xl:items-center xl:px-10"
        >
          <div className="hidden xl:flex xl:justify-end xl:self-center">
            <ReviewBubble />
          </div>

          <div className="flex flex-col items-center justify-center gap-6 text-center">
            <motion.span
              variants={itemVariants}
              className="inline-flex items-center rounded-full border border-slate-300 px-4 py-1.5 font-secondary text-xs tracking-[0.22em] text-slate-500 uppercase"
            >
              Since 1992
            </motion.span>

            <motion.h1
              variants={itemVariants}
              className="font-primary uppercase text-6xl leading-none text-black sm:text-8xl md:text-9xl"
            >
              buster&apos;s sea cove
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="max-w-[22rem] font-secondary text-sm leading-relaxed text-slate-600 md:text-base"
            >
              The founders of Toronto&apos;s renowned seafood legacy.
              Restaurants, food trucks &amp; catering.
            </motion.p>

            <motion.div variants={itemVariants}>
              <Link
                to="/catering"
                className="inline-flex h-12 w-44 cursor-pointer items-center justify-center rounded-[4rem] bg-black font-primary text-xl text-beige-primary shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Book Now
              </Link>
            </motion.div>
          </div>

          <div className="hidden xl:flex xl:justify-start xl:self-center">
            <EventNewsBubble />
          </div>

          <div className="hidden md:flex w-full flex-row flex-wrap justify-center gap-4 px-2 xl:hidden">
            <EventNewsBubble />
            <ReviewBubble />
          </div>
        </motion.article>

        {/* Video Placeholder with a fade-in */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 1 }}
          className="h-[52vh] min-h-[22rem] w-full"
        >
          <img
            src="/Landing.webp"
            alt="Buster's Sea Cove landing"
            className="h-full w-full object-cover border-t-4 border-b-4 border-black/15"
          />
        </motion.div>
      </section>

      {/* -------------- Home navs + Food Truck (shared scroll background) -------------- */}
      <div className="relative bg-black overflow-hidden">
        {/* Scroll rows — shared background layer */}
        <div className="absolute inset-0 flex flex-col pointer-events-none">
          <Scroll text="available now" rep={5} />
          <Scroll text="buster's sea cove" rep={3} />
          <Scroll text="available now" rep={6} />
          <Scroll text="buster's sea cove" rep={3} />
          <Scroll text="call us" rep={9} />
          <Scroll text="available now" rep={5} />
          <Scroll text="buster's sea cove" rep={3} />
          <Scroll text="unforgettable experience" rep={3} />
          <Scroll text="available now" rep={6} />
          <Scroll text="buster's sea cove" rep={4} />
          <Scroll text="available now" rep={5} />
        </div>

        <HomeNav />
        <FoodTruck />
      </div>

      {/* -------------- GALLERY (Scroll Reveal) -------------- */}
      <div>
        <Gallery />
      </div>

      {/* -------------- SERVING HOURS ----------------- */}
      <section className="bg-[url('/Commerce%20Court%20Photo_edited.webp')] bg-center w-full h-[70vh] min-h-[32rem] bg-cover flex justify-center items-center">
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
          className="font-primary uppercase text-beige-primary bg-black px-8 py-3 rounded-[3rem] border-2 border-black hover:bg-beige-primary hover:text-black transition-colors duration-300"
        >
          Return To Top
        </button>
      </div>
    </main>
  );
}
