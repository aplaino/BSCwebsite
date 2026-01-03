import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

export default function About() {
  useEffect(() => {
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  }, []);

  const fadeInUp: Variants = {
    initial: { opacity: 0, y: 30 },
    whileInView: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  const staggerContainer: Variants = {
    initial: {},
    whileInView: { 
      transition: { staggerChildren: 0.2 } 
    }
  };

  return (
    <main className="w-full h-auto bg-beige-primary flex flex-col items-center overflow-x-hidden">
      
      {/* -------------- HERO SECTION ----------------- */}
      <section className="w-full pt-32 pb-10 px-4">
        <motion.article 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col gap-2 w-full justify-center items-center text-center"
        >
          <p className="font-secondary text-beige-secondary uppercase tracking-[0.4em] text-xs">
            Established 1992
          </p>
          <h1 className="font-primary uppercase text-7xl md:text-9xl text-blue-primary leading-[0.8] text-balance">
            Our Story <br /> & Legacy
          </h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ delay: 0.5, duration: 1 }}
            className="h-1 bg-blue-primary mt-6" 
          />
        </motion.article>
      </section>

      {/* -------------- SECTION 1: THE ORIGIN ----------------- */}
      <section className="w-full max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div 
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="relative group z-10"
        >
          <div className="absolute -inset-4 border-2 border-blue-primary/10 rounded-sm translate-x-3 translate-y-3 transition-all duration-700 ease-out group-hover:translate-x-1 group-hover:translate-y-1 group-hover:border-blue-primary/30" />
          
          <div className="relative rounded-sm overflow-hidden shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] transition-all duration-700 group-hover:shadow-[0_20px_60px_rgba(8,_112,_184,_0.2)]"></div>
          <img 
            src="/Images/stLawrence.jpg" 
            alt="St. Lawrence Market" 
          className="w-full h-[400px] md:h-[500px] object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-in-out"          />
        </motion.div>

        <motion.div 
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="space-y-4" 
        >
          <h2 className="font-primary text-5xl text-blue-primary uppercase leading-none text-balance">
            From St. Lawrence <br /> Market Roots
          </h2>
          <p className="font-secondary text-blue-primary/80 text-lg leading-snug text-justify max-w-prose">
            Buster’s Sea Cove embarked on its culinary journey in 1992 within the vibrant surroundings of Toronto’s renowned St. Lawrence Market. From its humble beginnings as a boutique market stall, the brand steadily gained momentum, but it was the visionary leadership of Tom Antonarakis that saw Buster’s truly flourish. Infused with Tom’s unwavering dedication to delivering the freshest and most delectable seafood, the brand swiftly captured the hearts and palates of enthusiasts across the GTA, evolving from a local favorite into a definitive household name.
          </p>
        </motion.div>
      </section>

      {/* -------------- SECTION 2: THE NUMBERS (Stats) ----------------- */}
      <section className="w-full bg-blue-primary py-10 border-y border-beige-secondary/10">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-y-8 text-center"
        >
          {/* Stats content stays the same, just tighter gap-y */}
          {[
            { val: "100%", label: "Always Fresh Catch" },
            { val: "30+", label: "Years of Heritage" },
            { val: "1M+", label: "Meals Served Across GTA" },
            { val: "00", label: "Shortcuts Taken" }
          ].map((stat, i) => (
            <motion.div key={i} variants={fadeInUp} className="flex flex-col">
              <h3 className="font-primary text-5xl md:text-6xl text-beige-primary uppercase leading-none">
                {stat.val}
              </h3>
              <p className="font-secondary text-beige-secondary uppercase tracking-[0.2em] text-[10px] italic">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* -------------- SECTION 3: EVOLUTION ----------------- */}
      {/* Reduced py-20 to py-12 */}
      <section className="w-full max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div 
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="space-y-4 order-2 md:order-1"
        >
          <h2 className="font-primary text-5xl text-blue-primary uppercase leading-none text-balance">
            The Evolution of <br /> A Legacy
          </h2>
          <p className="font-secondary text-blue-primary/80 text-lg leading-snug text-justify max-w-prose">
            Over the years, Buster’s Sea Cove evolved and expanded into far more than just a collection of restaurants. Today, the brand continues to thrive as a hospitality leader, offering an extensive history of full-scale production experience that reaches well beyond the scope of traditional event catering.
          </p>
          <div className="pt-4">
            <Link
              to="/catering"
              className="font-primary text-beige-primary bg-blue-primary text-xl px-10 py-3 rounded-[4rem] hover:bg-beige-secondary duration-300 inline-block"
            >
              Book Catering
            </Link>
          </div>
        </motion.div>

        <motion.div 
          variants={fadeInUp}
          initial="initial"
          /* FIXED: Changed 'whiteInView' to 'whileInView' */
          whileInView="whileInView" 
          viewport={{ once: true }}
          whileHover={{ y: -10, transition: { duration: 0.4, ease: "easeOut" } }}
          className="order-1 md:order-2 flex justify-center items-center relative z-10"
        >
          <img 
            /* Double check this path matches your folder exactly! */
            src="/Images/Buster Sea Cove (51).jpg" 
            alt="Busters Truck" 
            className="w-full h-auto max-h-[400px] object-contain 
              filter drop-shadow-[0_25px_35px_rgba(42,68,132,0.4)]
              antialiased relative z-20"
          />
          
          {/* The Glow - ensure it stays behind the truck with -z-10 */}
          <div className="absolute inset-0 bg-blue-primary/10 blur-[80px] -z-10 rounded-full scale-75" />
        </motion.div>
      </section>

      {/* Tightened divider margin */}
      <div className="w-full h-4 bg-beige-secondary mt-10" />
    </main>
  );
}