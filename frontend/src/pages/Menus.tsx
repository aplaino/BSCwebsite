import {
  CATERING_bustersPlatterFavourites,
  CATERING_bustersXStackdDeliKitchen,
  CATERING_sides,
} from "../Data/Menus.ts";
import { useState, useEffect } from "react";
import MenuItem from "../components/MenuItem.tsx";
import { fetchFoodTruckMenu, fetchRestaurantMenu, type RestaurantMenuSection } from "../services/api";
import { type MenuType } from "../Types.ts";
import { Navigate, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"; // Added for animations

// Reusable Order Button Component
const OrderButton = ({
  url,
  label = "To place an order click here",
}: {
  url: string;
  label?: string;
}) => (
  <div className="w-full flex justify-center py-8">
    <a
      href={url}
      target="_blank" // Opens in a new tab so they don't lose the menu
      rel="noopener noreferrer"
      className="bg-blue-primary text-beige-primary font-primary text-xl md:text-2xl px-10 py-4 rounded-[4rem] hover:scale-[1.02] hover:-translate-y-0.5 transition-all duration-300 shadow-[0_10px_22px_rgba(17,27,54,0.24)] border-2 border-blue-primary text-center"
    >
      {label}
    </a>
  </div>
);

export default function Menus() {
  const validMenuTypes = ["restaurant", "catering", "foodTruck"] as const;
  const { typeParam } = useParams<{ typeParam: string }>();
  if (
    typeParam === undefined ||
    !validMenuTypes.includes(typeParam as (typeof validMenuTypes)[number])
  ) {
    return <Navigate to="/menus/restaurant" replace />;
  }

  const [menus, setMenus] = useState<MenuType[]>([
    {
      type: "restaurant",
      isActive: typeParam == "restaurant",
      name: "Restaurant",
    },
    {
      type: "catering",
      isActive: typeParam == "catering",
      name: "Large Orders",
    },

    {
      type: "foodTruck",
      isActive: typeParam == "foodTruck",
      name: "Food Truck Catering",
    },
  ]);
  const [menuType, setMenuType] = useState(typeParam);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [restaurantSections, setRestaurantSections] = useState<RestaurantMenuSection[]>([]);
  const [restaurantSectionsLoaded, setRestaurantSectionsLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchFoodTruckMenu()
      .then((url) => setPdfUrl(url))
      .catch(() => setPdfUrl(null));
    fetchRestaurantMenu()
      .then((sections) => setRestaurantSections(sections))
      .catch(() => setRestaurantSections([]))
      .finally(() => setRestaurantSectionsLoaded(true));
  }, []);

  useEffect(() => {
    setMenuType(typeParam);
    setMenus((prev) =>
      prev.map((m): MenuType => ({ ...m, isActive: m.type === typeParam }))
    );
  }, [typeParam]);

  // Animation variants
  const fadeVariant = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
    transition: { duration: 0.3 },
  };

  // Define your different links here
  const RESTAURANT_ORDER_URL =
    "https://sites.ambassador.ai/?s=bustercommercecourt";
  const CATERING_ORDER_URL = "/catering"; // Or a full URL

  return (
    <main className="w-screen h-full min-h-screen flex flex-col bg-beige-primary">
      {/* --- MENU OPTIONS --- */}
      <section className="w-full bg-[url(/menu-background.svg)] bg-cover px-4 pt-28 pb-6 flex flex-col justify-center items-center gap-4 border-b-2 border-black">
        <div className="w-full h-20 flex justify-center items-center mt-10">
          <h1 className="font-primary uppercase text-4xl md:text-5xl">Our menus</h1>
        </div>
        <div className="w-full h-full flex flex-row flex-wrap gap-3 justify-center items-center">
          {menus.map((menu, i) => (
            <button
              key={i}
              onClick={() => {
                setMenuType(menu.type);
                setMenus((prev) =>
                  prev.map(
                    (m): MenuType => ({ ...m, isActive: m.type === menu.type })
                  )
                );
              }}
              className={`${
                menu.isActive
                  ? `bg-blue-primary text-beige-primary shadow-[0_10px_20px_rgba(17,27,54,0.25)] -translate-y-0.5`
                  : `text-blue-primary bg-beige-primary/85 border-2 border-blue-primary/20 shadow-[0_8px_18px_rgba(17,27,54,0.12)]`
              } font-primary text-lg md:text-xl px-4 py-2 min-w-42 md:min-w-48 h-12 flex justify-center items-center rounded-[4rem] cursor-pointer hover:bg-blue-primary/10 hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(17,27,54,0.2)] transition-all duration-300`}
            >
              {menu.name}
            </button>
          ))}
        </div>
      </section>

      {/* --- MENU DETAIL WITH ANIMATION --- */}
      <section className="w-full min-h-screen h-full bg-beige-primary p-2 md:p-4 flex flex-col gap-8 justify-start items-center py-10 md:py-14 font-secondary">
        <AnimatePresence mode="wait">
          <motion.div
            key={menuType} // Key tells Framer which element is which to trigger exit/enter
            variants={fadeVariant}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full max-w-[95vw] origin-top scale-[0.7] sm:scale-[0.8] md:scale-[0.9]"
          >
            {/* --- Catering Menus --- */}
            {menuType === "catering" && (
              <div className="flex flex-col gap-12 size-full">
                <OrderButton url={CATERING_ORDER_URL} />
                <MenuItem
                  title="Buster's Platter Favourites"
                  items={CATERING_bustersPlatterFavourites}
                />
                <MenuItem
                  title="Buster's X Stack'd Deli Kitchen"
                  items={CATERING_bustersXStackdDeliKitchen}
                />
                <MenuItem title="Sides" items={CATERING_sides} />
              </div>
            )}

            {/* --- Restaurant Menu --- */}
            {menuType === "restaurant" && (
              <div className="flex flex-col gap-12 size-full">
                <OrderButton url={RESTAURANT_ORDER_URL} />
                {restaurantSectionsLoaded ? (
                  restaurantSections.length > 0 ? (
                    restaurantSections.map((section) => (
                      <MenuItem
                        key={section.id}
                        title={section.title}
                        items={section.items}
                      />
                    ))
                  ) : (
                    <div className="rounded-[2rem] border border-blue-primary/15 bg-white/70 px-8 py-16 text-center shadow-[0_14px_30px_rgba(17,27,54,0.12)]">
                      <h2 className="font-primary text-4xl uppercase text-blue-primary">
                        Restaurant menu unavailable
                      </h2>
                      <p className="mt-3 text-lg text-blue-primary/70">
                        Add menu sections and items in the admin to publish them here.
                      </p>
                    </div>
                  )
                ) : (
                  <div className="flex flex-col items-center gap-4 py-14">
                    <div className="w-8 h-8 border-4 border-blue-primary border-t-transparent rounded-full animate-spin"></div>
                    <p className="text-blue-primary font-primary text-xl uppercase tracking-widest italic">
                      Loading restaurant menu...
                    </p>
                  </div>
                )}
                <OrderButton url={RESTAURANT_ORDER_URL} />
              </div>
            )}

            {/* --- Food Truck Menu --- */}
            {menuType === "foodTruck" && (
              <div className="flex flex-col items-center text-center gap-8 py-10">
                <div className="max-w-xl space-y-4">
                  <h2 className="font-primary text-4xl md:text-5xl text-blue-primary uppercase">
                    Food Truck Catering
                  </h2>
                  <p className="font-secondary text-blue-primary/70 text-lg italic">
                    Our food truck offerings vary by location and season. View
                    or download our current PDF.
                  </p>
                </div>
                {pdfUrl ? (
                  <div className="w-full flex flex-col items-center gap-6 mt-4">
                    <div className="w-full max-w-5xl h-[70vh] min-h-[500px] rounded-2xl overflow-hidden border-2 border-blue-primary/20 shadow-lg bg-white">
                      <iframe
                        src={`${pdfUrl}#toolbar=0&navpanes=0`}
                        title="Food Truck Menu PDF"
                        className="w-full h-full"
                      />
                    </div>
                    <div className="flex flex-col md:flex-row gap-6">
                      <a
                        href={pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-2 border-blue-primary text-blue-primary font-primary text-2xl px-14 py-4 rounded-[4rem] hover:bg-blue-primary hover:text-beige-primary hover:-translate-y-0.5 transition-all duration-300 shadow-[0_8px_18px_rgba(17,27,54,0.16)]"
                      >
                        Open in New Tab
                      </a>
                      <a
                        href={pdfUrl}
                        download
                        className="border-2 border-blue-primary text-blue-primary font-primary text-2xl px-14 py-4 rounded-[4rem] hover:bg-blue-primary hover:text-beige-primary hover:-translate-y-0.5 transition-all duration-300 shadow-[0_8px_18px_rgba(17,27,54,0.16)]"
                      >
                        Download
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-8 h-8 border-4 border-blue-primary border-t-transparent rounded-full animate-spin"></div>
                    <p className="text-blue-primary font-primary text-xl uppercase tracking-widest italic">
                      Syncing with kitchen...
                    </p>
                  </div>
                )}
                <OrderButton
                  url={CATERING_ORDER_URL}
                  label="Click to book our food truck"
                />
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </section>
      <div className="w-full h-8 bg-blue-primary mt-auto" />
    </main>
  );
}
