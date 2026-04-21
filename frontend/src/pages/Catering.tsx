import { useEffect, useState } from "react";
import CateringScroll from "../components/CateringPage/CateringScroll";
import CateringForm from "../components/CateringPage/CateringForm";
import CateringInfo from "../components/CateringPage/CateringInfo";
import CateringEvents from "../components/CateringPage/CateringEvents";
import Seo from "../components/Seo";
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // 2. Define reusable animation variants
  // Standard fade-up used across the site for consistency
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  const pageContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0 }
    }
  };

  const cateringSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      name: "Buster's Sea Cove",
      url: "https://www.bustersseacove.com/",
      image: "https://www.bustersseacove.com/Landing.webp",
      telephone: "+1-416-319-2957",
      email: "bustersheadoffice@gmail.com",
      servesCuisine: ["Seafood", "Catering"],
      address: {
        "@type": "PostalAddress",
        streetAddress: "305 Industrial Pkwy S Unit 6",
        addressLocality: "Aurora",
        addressRegion: "ON",
        postalCode: "L4G 6X7",
        addressCountry: "CA",
      },
      areaServed: ["Toronto", "GTA", "Aurora", "Ontario"],
    },
    {
      "@context": "https://schema.org",
      "@type": "CateringService",
      name: "Buster's Sea Cove Catering",
      url: "https://www.bustersseacove.com/catering",
      image: "https://www.bustersseacove.com/cateringzfp.webp",
      description:
        "Seafood catering, food truck catering, drop-off catering, and full-service event catering for weddings, corporate events, film sets, golf courses, and private parties in Toronto and the GTA.",
      provider: {
        "@type": "Restaurant",
        name: "Buster's Sea Cove",
      },
      areaServed: ["Toronto", "GTA", "Aurora", "Ontario"],
      serviceType: [
        "Food truck catering",
        "Drop-off catering",
        "Full-service catering",
        "Corporate catering",
        "Wedding catering",
      ],
    },
  ];

  return (
    <motion.main 
        variants={pageContainer}
        initial="hidden"
        animate="visible"
        className="w-full min-h-screen flex flex-col gap-0 justify-center items-center overflow-x-hidden"
    >
      <Seo
        title="Toronto Catering, Seafood Catering & Food Truck Catering"
        description="Book Buster's Sea Cove for seafood catering in Toronto and the GTA, including food truck catering, corporate catering, weddings, golf events, film sets, and private parties."
        path="/catering"
        image="/cateringzfp.webp"
        jsonLd={cateringSchema}
      />
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

      <div className="w-full bg-beige-primary py-8 flex justify-center items-center">
        <button
          type="button"
          onClick={scrollToTop}
          className="font-primary uppercase text-beige-primary bg-blue-primary px-8 py-3 rounded-[3rem] border-2 border-blue-primary hover:bg-beige-primary hover:text-blue-primary transition-colors duration-300"
        >
          Return To Top
        </button>
      </div>
      
    </motion.main>
  );
}
