// src/services/api.ts
const BASE_URL = "http://127.0.0.1:8000/api";

// 1. Contact Form Logic
export const submitContactForm = async (formData: FormData) => {
  const input = Object.fromEntries(formData.entries());
  const response = await fetch(`${BASE_URL}/contact/submit/`, {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(input)
  });
  return response.json();
};

// 2. Food Truck PDF Logic (What we just set up)
export const fetchFoodTruckMenu = async () => {
  const response = await fetch(`${BASE_URL}/restaurant/foodtruckmenu/`);
  const data = await response.json();
  // Returns the latest PDF URL
  return data[0]?.pdf_file || null;
};