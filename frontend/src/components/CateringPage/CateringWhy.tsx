import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const whyPoints = [
  {
    title: "Toronto's Original Seafood Food Truck",
    body: "Buster's Sea Cove has been a fixture of Toronto's food scene since 1992 - long before food truck culture took off. We didn't follow the trend, we helped define it. When you book Buster's, you're booking a brand that Toronto already knows and trusts.",
  },
  {
    title: "Proven High-Volume Service",
    body: "We've served thousands of guests in a single event without compromising on speed or quality. Our team is trained for high-pressure, large-scale environments - from corporate rallies and music festivals to community events drawing crowds across the GTA.",
  },
  {
    title: "Flexible Menus & Full Commissary Support",
    body: "Every event is different, and our menus reflect that. We work with clients to build a menu that fits their crowd, budget, and event format. Backed by full commissary support, we can scale from a small private lunch to a 2,000-person corporate party without missing a beat.",
  },
  {
    title: "Premium Seafood - No Shortcuts",
    body: "Every dish served from the Buster's food truck is made with the same fresh, sustainably sourced seafood that built our reputation over three decades. Fish and chips, lobster rolls, grilled halibut - prepared fresh on-site, every time.",
  },
];

const services = [
  "Full-service food truck catering",
  "Customizable event menus",
  "Fast, high-volume service",
  "Setup and cleanup handled by our team",
  "Drop-off catering available",
  "Commissary-backed operations",
];

const eventTypes = [
  "Corporate Events",
  "Weddings",
  "Private Parties",
  "Office Lunches",
  "Music Festivals",
  "Golf Tournaments",
  "Film & TV Sets",
  "Community Events",
  "Sports Tournaments",
  "University & College Events",
];

export default function CateringWhy() {
  return (
    <section className="w-full bg-[#111B36] py-10 md:py-16 px-6 text-beige-primary">
      <div className="max-w-6xl mx-auto flex flex-col gap-8 md:gap-14">

        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col gap-3"
        >
          <motion.p variants={fadeUp} className="font-secondary text-beige-secondary uppercase tracking-[0.4em] text-xs">
            Toronto's Premier Seafood Food Truck
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-primary uppercase text-5xl md:text-7xl text-beige-primary leading-none text-balance">
            Why Choose <br /> Buster's Sea Cove
          </motion.h2>
          <motion.p variants={fadeUp} className="font-secondary text-beige-primary/80 text-lg max-w-2xl leading-snug mt-2">
            From St. Lawrence Market to some of Toronto's largest public and private events, Buster's Sea Cove has spent over 30 years earning a reputation as the GTA's most trusted seafood caterer and food truck operator. Here's what sets us apart.
          </motion.p>
        </motion.div>

        {/* Why Points Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {whyPoints.map((point, i) => (
            <motion.article key={i} variants={fadeUp} className="flex flex-col gap-3 border-l-2 border-beige-secondary pl-5">
              <h3 className="font-primary uppercase text-2xl text-beige-secondary leading-none">
                {point.title}
              </h3>
              <p className="font-secondary text-beige-primary/80 text-base leading-snug">
                {point.body}
              </p>
            </motion.article>
          ))}
        </motion.div>

        {/* What We Offer + Event Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="flex flex-col gap-5">
            <h3 className="font-primary uppercase text-3xl text-beige-primary leading-none">
              What We Offer
            </h3>
            <p className="font-secondary text-beige-primary/80 text-base leading-snug">
              Whether you're planning a corporate event, wedding, or private party - the Buster's food truck is built to handle it. We manage every detail from arrival to cleanup so you can focus on your event.
            </p>
            <ul className="flex flex-col gap-3">
              {services.map((s, i) => (
                <li key={i} className="flex items-start gap-3 font-secondary text-beige-primary/80 text-base">
                  <span className="mt-1 w-2 h-2 rounded-full bg-beige-secondary shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="font-primary uppercase text-3xl text-beige-primary leading-none">
              Events We've Catered
            </h3>
            <p className="font-secondary text-beige-primary/80 text-base leading-snug">
              We've catered everything from intimate office lunches to large-scale events drawing thousands of guests across Toronto, Mississauga, North York, King City, Rhill, Aurora and the broader GTA. No event is too big or too small.
            </p>
            <div className="flex flex-wrap gap-2">
              {eventTypes.map((type, i) => (
                <span
                  key={i}
                  className="font-secondary text-sm text-beige-primary border border-beige-primary/20 px-3 py-1 rounded-full bg-beige-primary/10"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 items-start">
          <Link
            to="/catering"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-primary text-[#111B36] bg-beige-primary text-xl px-10 py-3 rounded-[4rem] hover:bg-beige-secondary duration-300 inline-block"
          >
            Get a Catering Quote
          </Link>
          <Link
            to="/menus/foodTruck"
            className="font-primary text-beige-primary border-2 border-beige-primary/40 text-xl px-10 py-3 rounded-[4rem] hover:bg-beige-primary/10 duration-300 inline-block"
          >
            View Our Menu
          </Link>
        </div>

      </div>
    </section>
  );
}
