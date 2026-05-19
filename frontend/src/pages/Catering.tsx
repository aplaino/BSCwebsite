import { useEffect, useState } from "react";
import CateringScroll from "../components/CateringPage/CateringScroll";
import CateringForm from "../components/CateringPage/CateringForm";
import CateringInfo from "../components/CateringPage/CateringInfo";
import CateringEvents from "../components/CateringPage/CateringEvents";
import CateringWhy from "../components/CateringPage/CateringWhy";
import CateringFaq from "../components/CateringPage/CateringFaq";
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

  // Section-level fade — no Y movement to prevent background bleed-through
  const sectionFade: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const pageContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 }
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
      url: "https://www.bustersseacove.com/FoodTruckCatering",
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
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is food truck catering?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Food truck catering brings a fully equipped mobile kitchen to your event location. Buster's Sea Cove food truck arrives, sets up, and serves fresh seafood directly to your guests — all you need to provide is a 20 ft parking spot. We handle everything else: cooking, serving, and cleanup.",
          },
        },
        {
          "@type": "Question",
          name: "What areas does Buster's Sea Cove serve for food truck catering?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We provide food truck catering across Toronto and the Greater Toronto Area, including Mississauga, North York, Scarborough, Etobicoke, Aurora, King City, Markham, Richmond Hill, Vaughan, and Oakville.",
          },
        },
        {
          "@type": "Question",
          name: "How much does food truck catering cost in Toronto?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Food truck catering pricing depends on guest count, menu selections, event duration, and travel distance. We work with a wide range of budgets — from intimate office lunches to large corporate events with thousands of guests. Fill out our catering request form for a custom quote.",
          },
        },
        {
          "@type": "Question",
          name: "How far in advance should I book food truck catering?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We recommend booking at least 4–6 weeks in advance for most events, and 2–3 months ahead for peak summer dates, weddings, and large corporate events.",
          },
        },
        {
          "@type": "Question",
          name: "What types of events can I book food truck catering for?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Buster's Sea Cove food truck has catered corporate events, weddings, private parties, golf tournaments, film and TV sets, music festivals, university events, sports tournaments, office lunches, and community events across the GTA.",
          },
        },
        {
          "@type": "Question",
          name: "Do you offer catering options other than the food truck?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. In addition to food truck catering, we offer drop-off catering (delivered at peak temperature to your door) and full-service catering (buffet-style with chefs on site).",
          },
        },
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
        path="/FoodTruckCatering"
        image="/cateringzfp.webp"
        jsonLd={cateringSchema}
      />
      {/** --------- Form (Hero Section) ------------- */}
      <motion.div
          variants={sectionFade}
          initial="hidden"
          animate="visible"
          className="w-full z-20"
      >
        <CateringForm minimalForm={minimalForm} setMinimalForm={setMinimalForm} />
      </motion.div>

      {/** --------- PARTNERS SCROLL ------------- */}
      <motion.div
          variants={sectionFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
          className="w-full z-10 relative"
      >
        <CateringScroll />
      </motion.div>

      {/** --------- WHY BUSTER'S + SERVICE TIERS — single dark block ------------- */}
      <motion.div
          variants={sectionFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
          className="w-full z-10 relative flex flex-col"
      >
        <CateringWhy />
        <CateringInfo />
      </motion.div>

      {/** --------- RECENT EVENTS ------------- */}
      <motion.div
          variants={sectionFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
          className="w-full z-0 relative"
      >
        <CateringEvents />
      </motion.div>

      {/** --------- FAQ ------------- */}
      <motion.div
          variants={sectionFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
          className="w-full z-0 relative"
      >
        <CateringFaq />
      </motion.div>

      <div className="w-full py-4 flex justify-center items-center">
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
