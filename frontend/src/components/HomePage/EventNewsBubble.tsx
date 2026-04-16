import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { fetchEventNews, type EventNewsItem } from "../../services/api";

function formatEventDate(dateValue: string | null) {
  if (!dateValue || !/^\d{4}-\d{2}-\d{2}$/.test(dateValue)) {
    return null;
  }

  return new Intl.DateTimeFormat("en-CA", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${dateValue}T00:00:00`));
}

function isSafeUrl(url: string): boolean {
  if (url.startsWith("/")) return true;
  try {
    const parsed = new URL(url);
    return parsed.protocol === "https:" || parsed.protocol === "http:";
  } catch {
    return false;
  }
}

export default function EventNewsBubble() {
  const [story, setStory] = useState<EventNewsItem | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    fetchEventNews(controller.signal)
      .then((data) => setStory(data))
      .catch((err: unknown) => {
        if (err instanceof Error && err.name !== "AbortError") {
          setStory(null);
        }
      });

    return () => controller.abort();
  }, []);

  if (!story) {
    return null;
  }

  const hasCta = story.cta_label && story.cta_url && isSafeUrl(story.cta_url);

  const content = (
    <motion.aside
      initial={{ opacity: 0, y: 18, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.35 }}
      className="w-full max-w-[15.5rem] rounded-[1.4rem] border border-black/10 bg-[rgba(247,243,235,0.82)] p-3.5 shadow-[0_8px_18px_rgba(17,27,54,0.08)] backdrop-blur-sm"
    >
      <div className="mb-2.5 flex items-center gap-2">
        <span className="rounded-full border border-black/10 bg-[rgba(178,150,139,0.26)] px-3 py-1 font-primary text-sm uppercase tracking-wide text-[#4f5968]">
          {story.badge || "Coming Up"}
        </span>
        {story.event_date && (
          <span className="font-secondary text-[0.65rem] uppercase tracking-[0.16em] text-[#6b7280]">
            {formatEventDate(story.event_date)}
          </span>
        )}
      </div>
      <h2 className="font-primary text-[1.75rem] uppercase leading-none text-[#374151]">
        {story.title}
      </h2>
      <p className="mt-2.5 font-secondary text-sm leading-relaxed text-[#4b5563]">
        {story.summary}
      </p>
      {hasCta && (
        <span className="mt-3 inline-flex rounded-full border border-black/10 bg-[rgba(247,243,235,0.65)] px-4 py-1.5 font-primary text-base uppercase text-[#4f5968] transition-colors duration-300 hover:bg-[rgba(178,150,139,0.2)] hover:text-[#374151]">
          {story.cta_label}
        </span>
      )}
    </motion.aside>
  );

  if (hasCta) {
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
