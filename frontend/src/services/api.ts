// src/services/api.ts
const BASE_URL =
  import.meta.env.VITE_API_BASE_URL ??
  (window.location.hostname === "localhost" ||
  window.location.hostname === "127.0.0.1"
    ? "http://127.0.0.1:8000/api"
    : "/api");

export type EventNewsItem = {
  id: number;
  title: string;
  summary: string;
  badge: string;
  event_date: string | null;
  cta_label: string;
  cta_url: string;
};

export type RestaurantMenuItem = {
  id: number;
  name: string;
  description: string | null;
  price: string;
  imageUrl?: string | null;
};

export type RestaurantMenuSection = {
  id: number;
  title: string;
  slug: string;
  items: RestaurantMenuItem[];
};

export type HeroReview = {
  id: number;
  quote: string;
  attribution: string;
  rating: number;
};

// 1. Contact Form Logic
export const submitContactForm = async (formData: FormData) => {
  const input = Object.fromEntries(formData.entries());
  const response = await fetch(`${BASE_URL}/contact/submit/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });
  if (!response.ok) {
    throw new Error("Failed to submit contact form");
  }
  return response.json();
};

export const submitCateringForm = async (formData: FormData) => {
  const input = Object.fromEntries(formData.entries());
  const response = await fetch(`${BASE_URL}/catering/submit/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });
  if (!response.ok) {
    throw new Error("Failed to submit catering form");
  }
  return response.json();
};

// 2. Food Truck PDF Logic (What we just set up)
export const fetchFoodTruckMenu = async () => {
  const response = await fetch(`${BASE_URL}/restaurant/foodtruckmenu/`);
  if (!response.ok) {
    throw new Error("Failed to fetch food truck menu");
  }
  const data = await response.json();
  // Returns the latest PDF URL
  return data[0]?.pdf_url || data[0]?.pdf_file || null;
};

export const fetchEventNews = async (signal?: AbortSignal): Promise<EventNewsItem | null> => {
  const response = await fetch(`${BASE_URL}/news/event/`, { signal });
  if (!response.ok) {
    throw new Error("Failed to fetch event news");
  }
  const data = (await response.json()) as Partial<EventNewsItem>;
  if (!data || !data.id) {
    return null;
  }
  return data as EventNewsItem;
};

export const fetchRestaurantMenu = async (): Promise<RestaurantMenuSection[]> => {
  const response = await fetch(`${BASE_URL}/restaurant/menu/`);
  if (!response.ok) {
    throw new Error("Failed to fetch restaurant menu");
  }
  return (await response.json()) as RestaurantMenuSection[];
};

export const fetchHeroReview = async (): Promise<HeroReview | null> => {
  const response = await fetch(`${BASE_URL}/reviews/hero/`);
  if (!response.ok) {
    throw new Error("Failed to fetch hero review");
  }
  const data = (await response.json()) as Partial<HeroReview>;
  if (!data || !data.id) {
    return null;
  }
  return data as HeroReview;
};
