import { useEffect } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion"; // Required for your strict TS settings
import Seo from "../components/Seo";

export default function Schedule() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Animation variants matching your About/Catering pages
  const fadeInUp: Variants = {
    initial: { opacity: 0, y: 40 },
    animate: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  const staggerContainer: Variants = {
    initial: {},
    animate: { 
      transition: { staggerChildren: 0.2 } 
    }
  };

  return (
    <main className="w-full min-h-screen bg-beige-secondary flex flex-col items-center">
      <Seo
        title="Food Truck Schedule"
        description="See the Buster's Sea Cove food truck schedule for Toronto and GTA stops, and check upcoming locations before booking food truck catering."
        path="/schedule"
        image="/foodtruck.svg"
      />
      <motion.div 
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="w-full max-w-7xl p-6 mt-24 flex flex-col gap-12 justify-center items-center"
      >
        {/* Animated Title */}
        <motion.h1 
          variants={fadeInUp}
          className="uppercase font-primary text-5xl md:text-7xl text-beige-primary text-center leading-none"
        >
          Food Truck <br /> Schedule
        </motion.h1>

        {/* Animated Calendar Container */}
        <motion.div 
          variants={fadeInUp}
          className="w-full relative group"
        >
          {/* Subtle branding glow behind the calendar */}
          <div className="absolute -inset-1 bg-blue-primary/20 blur-2xl rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <iframe
            src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FToronto&showPrint=0&src=Y2hyaXN0b3BoZXJtYW9tYW9AZ21haWwuY29t&src=ZmFtaWx5MDcyNDc1NDc5MjY5MjI5NTE3NTlAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=ZW4uY2FuYWRpYW4jaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039be5&color=%23ad1457&color=%230b8043"
            title="Buster's Sea Cove food truck schedule"
            loading="lazy"
            /* FIXED: Tailwind v4 requires brackets for custom values like h-[800px] */
            className="relative z-10 w-full h-[600px] md:h-[800px] rounded-2xl shadow-2xl border-none grayscale hover:grayscale-0 transition-all duration-700"
          />
          
          {/* Legend / Info under calendar */}
          <p className="mt-6 font-secondary text-beige-primary/60 text-sm italic text-center">
            * Locations are subject to weather conditions. Check our Instagram for live updates.
          </p>
        </motion.div>
      </motion.div>
    </main>
  );
}
