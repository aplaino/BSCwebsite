import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa6";

import { fetchHeroReview, type HeroReview } from "../../services/api";

export default function ReviewBubble() {
  const [review, setReview] = useState<HeroReview | null>(null);

  useEffect(() => {
    let isMounted = true;

    fetchHeroReview()
      .then((data) => {
        if (isMounted) {
          setReview(data);
        }
      })
      .catch(() => {
        if (isMounted) {
          setReview(null);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  if (!review) {
    return null;
  }

  return (
    <motion.aside
      initial={{ opacity: 0, y: 18, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.28 }}
      className="w-full max-w-[22rem] rounded-[2rem] border border-[#D1CDC0] bg-[rgba(247,243,235,0.82)] p-5 shadow-[0_8px_18px_rgba(17,27,54,0.08)] backdrop-blur-sm"
    >
      <div className="mb-3 flex items-center gap-1 text-[#a89d73]">
        {Array.from({ length: review.rating }).map((_, index) => (
          <FaStar key={index} className="h-4 w-4" />
        ))}
      </div>
      <p className="font-secondary text-base leading-relaxed text-[#555555]">
        {review.quote}
      </p>
      <p className="mt-4 font-secondary text-sm font-semibold uppercase tracking-[0.16em] text-[#7b8491]">
        {review.attribution}
      </p>
    </motion.aside>
  );
}
