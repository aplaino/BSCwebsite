import { useEffect, useState } from "react";
import CateringScroll from "../components/CateringPage/CateringScroll";
import CateringForm from "../components/CateringPage/CateringForm";
import CateringInfo from "../components/CateringPage/CateringInfo";
import CateringEvents from "../components/CateringPage/CateringEvents";
// 1. Import Framer Motion utilities
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

export default function Catering() {
  useEffect(() => {
    // Using requestAnimationFrame for smoother initial scroll behavior
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  }, []);

  const [minimalForm, setMinimalForm] = useState<boolean>(true);

  // 2. Define reusable animation variants
  // Standard fade-up used across the site for consistency
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  // A container variant to stagger the initial load if needed
  const pageContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  return (
    <motion.main 
        variants={pageContainer}
        initial="hidden"
        animate="visible"
        className="w-full min-h-screen flex flex-col gap-0 justify-center items-center overflow-x-hidden"
    >
      {/** --------- Form (Hero Section) ------------- */}
      {/** This uses 'animate' instead of 'whileInView' so it loads immediately */}
      <motion.div variants={fadeInUp} className="w-full z-20">
        <CateringForm minimalForm={minimalForm} setMinimalForm={setMinimalForm} />
      </motion.div>

      {/** --------- PARTNERS SCROLL ------------- */}
      {/** Subsequent sections use 'whileInView' to trigger on scroll */}
      <motion.div 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="w-full z-10 relative"
      >
        <CateringScroll />
      </motion.div>

      {/* -------------- NEW SECTION 2: INFORMATION / SERVICE TIERS ----------------- */}
      <motion.div 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="w-full z-10 relative"
       >
        <CateringInfo />
      </motion.div>

      {/** --------- RECENT EVENTS ------------- */}
      <motion.div 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="w-full z-0 relative"
      >
        <CateringEvents />
      </motion.div>
      
    </motion.main>
  );
}