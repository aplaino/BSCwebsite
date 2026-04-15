import { FaRegPaperPlane } from "react-icons/fa6";
import { MdOutlineVerified } from "react-icons/md";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { submitContactForm } from "../services/api";
import Seo from "../components/Seo";
// 1. Framer Motion Imports
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

// Define variants outside the component to prevent re-renders
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function Contact() {
  const [submitState, setSubmitState] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  async function handleSubmit(formData: FormData) {
    try {
      setSubmitState("submitting");
      await submitContactForm(formData);
      setSubmitState("success");
    } catch {
      setSubmitState("error");
    }
  }

  useEffect(() => {
    // Standardized scroll behavior
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  }, []);

  return (
    <motion.main
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="bg-blue-primary w-full min-h-screen px-8 pt-40 pb-20 flex flex-col gap-10 justify-center items-center overflow-x-hidden"
    >
      <Seo
        title="Contact Buster's Sea Cove"
        description="Contact Buster's Sea Cove for restaurant questions, seafood catering inquiries, food truck bookings, and event planning across Toronto and the GTA."
        path="/contact"
        image="/Landing.png"
      />
      {/** ------ Contact Card ------ */}
      <motion.div 
        variants={fadeInUp}
        className="bg-beige-primary w-full md:max-w-[800px] p-8 shadow-2xl"
      >
        <h1 className="font-primary uppercase text-blue-primary text-6xl mb-8">
          let's get in touch
        </h1>
        <form
          className="flex flex-col md:flex-row gap-10"
          action={handleSubmit}
        >
          <div className="flex flex-col gap-4 w-full md:w-2/3 font-secondary">
            <input
              name="name"
              type="text"
              placeholder="Name"
              required
              className="border-b-2 border-beige-secondary w-full h-10 text-blue-primary bg-transparent outline-none placeholder:italic placeholder:text-beige-secondary/60 mb-4"
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              required
              className="border-b-2 border-beige-secondary w-full h-10 text-blue-primary bg-transparent outline-none placeholder:italic placeholder:text-beige-secondary/60 mb-4"
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone"
              required
              className="border-b-2 border-beige-secondary w-full h-10 text-blue-primary bg-transparent outline-none placeholder:italic placeholder:text-beige-secondary/60 mb-4"
            />
            <textarea
              name="message"
              placeholder="Enter your message here..."
              required
              className="border-2 border-beige-secondary w-full h-40 text-blue-primary bg-transparent outline-none placeholder:italic p-4 mt-4"
            />
            <div className="hidden" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input
                tabIndex={-1}
                autoComplete="off"
                name="website"
                type="text"
              />
            </div>
          </div>

          <div className="flex flex-col w-full md:w-1/3 justify-between items-center gap-6">
            <MdOutlineVerified className="hidden md:block w-32 h-32 text-blue-primary/10" />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={submitState === "submitting"}
              className="font-primary text-beige-primary bg-blue-primary text-xl px-8 py-4 gap-3 w-full flex justify-center items-center rounded-[4rem] cursor-pointer duration-300 hover:bg-white hover:text-blue-primary border-2 border-transparent hover:border-blue-primary shadow-lg"
            >
              {submitState === "submitting" ? "Sending..." : "Send"}{" "}
              <FaRegPaperPlane />
            </motion.button>
            {submitState === "success" && (
              <p className="text-sm text-green-700 font-secondary text-center">
                Message sent successfully.
              </p>
            )}
            {submitState === "error" && (
              <p className="text-sm text-red-700 font-secondary text-center">
                Something went wrong. Please try again.
              </p>
            )}
          </div>
        </form>
      </motion.div>

      {/** ------ Info Card ------ */}
      <motion.div
        variants={fadeInUp}
        className="bg-blue-primary text-beige-primary border-2 border-beige-primary/30 w-full md:max-w-[800px] p-12 flex flex-col md:flex-row justify-between gap-12"
      >
        <section className="flex flex-col gap-6 flex-1">
          <h1 className="font-primary uppercase text-2xl text-beige-secondary">Address</h1>
          <div className="flex flex-col font-secondary text-sm gap-1">
            <h3 className="font-bold">Home Office</h3>
            <a
              href="https://maps.google.com/?q=305+Industrial+Pkwy+S+Unit+6,+Aurora,+ON+L4G+6X7"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 underline underline-offset-2 hover:text-beige-secondary transition-colors"
            >
              305 Industrial Pkwy S Unit 6, Aurora, ON L4G 6X7
            </a>
          </div>
          <div className="flex flex-col font-secondary text-sm gap-1">
            <h3 className="font-bold">Buster's Food Truck</h3>
            <Link to="/schedule" className="underline underline-offset-4 hover:text-beige-secondary transition-colors italic">
              Click to view our schedule
            </Link>
          </div>
        </section>

        <section className="flex flex-col gap-6 flex-1">
          <h1 className="font-primary uppercase text-2xl text-beige-secondary">Contact</h1>
          <div className="flex flex-col font-secondary text-sm gap-1">
            <h3 className="font-bold">Phone</h3>
            <a href="tel:4163192957" className="opacity-80 underline underline-offset-2 hover:text-beige-secondary transition-colors">
              416-319-2957
            </a>
          </div>
          <div className="flex flex-col font-secondary text-sm gap-1">
            <h3 className="font-bold">Email</h3>
            <a
              href="mailto:bustersheadoffice@gmail.com"
              className="opacity-80 underline underline-offset-2 hover:text-beige-secondary transition-colors"
            >
              bustersheadoffice@gmail.com
            </a>
          </div>
        </section>
      </motion.div>
    </motion.main>
  );
}
