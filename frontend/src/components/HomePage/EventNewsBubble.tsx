import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { fetchEventNews, type EventNewsItem } from "../../services/api";

function formatEventDate(dateValue: string | null) {
  if (!dateValue) {
    return null;
  }

  return new Intl.DateTimeFormat("en-CA", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${dateValue}T00:00:00`));
}

export default function EventNewsBubble() {
  const [story, setStory] = useState<EventNewsItem | null>(null);

  useEffect(() => {
    let isMounted = true;

    fetchEventNews()
      .then((data) => {
        if (isMounted) {
          setStory(data);
        }
      })
      .catch(() => {
        if (isMounted) {
          setStory(null);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  if (!story) {
    return null;
  }

  const content = (
    <motion.aside
      initial={{ opacity: 0, y: 18, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.35 }}
      className="w-full max-w-md rounded-[2rem] border border-black/10 bg-[rgba(247,243,235,0.82)] p-5 shadow-[0_8px_18px_rgba(17,27,54,0.08)] backdrop-blur-sm"
    >
      <div className="mb-3 flex items-center gap-3">
        <span className="rounded-full border border-black/10 bg-[rgba(178,150,139,0.26)] px-4 py-1 font-primary text-lg uppercase tracking-wide text-[#4f5968]">
          {story.badge || "Coming Up"}
        </span>
        {story.event_date && (
          <span className="font-secondary text-sm uppercase tracking-[0.18em] text-[#6b7280]">
            {formatEventDate(story.event_date)}
          </span>
        )}
      </div>
      <h2 className="font-primary text-4xl uppercase leading-none text-[#374151]">
        {story.title}
      </h2>
      <p className="mt-3 font-secondary text-base leading-relaxed text-[#4b5563]">
        {story.summary}
      </p>
      {story.cta_label && story.cta_url && (
        <span className="mt-4 inline-flex rounded-full border border-black/10 bg-[rgba(247,243,235,0.65)] px-5 py-2 font-primary text-xl uppercase text-[#4f5968] transition-colors duration-300 hover:bg-[rgba(178,150,139,0.2)] hover:text-[#374151]">
          {story.cta_label}
        </span>
      )}
    </motion.aside>
  );

  if (story.cta_label && story.cta_url) {
    const isInternalLink = story.cta_url.startsWith("/");

    if (isInternalLink) {
      return <Link to={story.cta_url}>{content}</Link>;
    }

    return (
      <a href={story.cta_url} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
}
