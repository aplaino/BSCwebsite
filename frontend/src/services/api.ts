// src/services/api.ts
const BASE_URL =
  import.meta.env.VITE_API_BASE_URL ??
  (window.location.hostname === "localhost" ||
  window.location.hostname === "127.0.0.1"
    ? "http://127.0.0.1:8000/api"
    : "/api");

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
  return data[0]?.pdf_file || null;
};
