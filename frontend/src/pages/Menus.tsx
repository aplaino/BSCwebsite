import {
  CATERING_bustersPlatterFavourites,
  CATERING_bustersXStackdDeliKitchen,
  CATERING_sides,
  RESTAURANT_friedSandwichesAndPoBoys,
  RESTAURANT_grilledSandwiches,
  RESTAURANT_lobster,
  RESTAURANT_fromTheGrill,
  RESTAURANT_fishFry,
  RESTAURANT_soups,
  RESTAURANT_beverages,
} from "../Data/Menus.ts";
import { useState, useEffect } from "react";
import MenuItem from "../components/MenuItem.tsx";
import { fetchFoodTruckMenu } from "../services/api"; 
import { type MenuType } from "../Types.ts";
import { motion, AnimatePresence } from "framer-motion"; // Added for animations

// Reusable Order Button Component
const OrderButton = ({ url }: { url: string }) => (
  <div className="w-full flex justify-center py-8">
    <a 
      href={url}
      target="_blank" // Opens in a new tab so they don't lose the menu
      rel="noopener noreferrer"
      className="bg-blue-primary text-beige-primary font-primary text-xl md:text-2xl px-10 py-4 rounded-[4rem] hover:scale-105 transition-transform shadow-lg border-2 border-blue-primary text-center"
    >
      To place an order click here
    </a>
  </div>
);

export default function Menus() {
  const [menus, setMenus] = useState<MenuType[]>([
    { type: "catering", isActive: true, name: "Large Orders" },
    { type: "restaurant", isActive: false, name: "Restaurant" },
    { type: "foodTruck", isActive: false, name: "Food Truck" },
  ]);
  const [menuType, setMenuType] = useState(menus[0].type);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchFoodTruckMenu().then(url => setPdfUrl(url));
  }, []);

  // Animation variants
  const fadeVariant = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
    transition: { duration: 0.3 }
  };

  // Define your different links here
  const RESTAURANT_ORDER_URL = "https://sites.ambassador.ai/?s=bustercommercecourt";
  const CATERING_ORDER_URL = "/catering"; // Or a full URL

  return (
    <main className="w-screen h-full min-h-screen flex flex-col bg-beige-primary">
      {/* --- MENU OPTIONS --- */}
      <section className="size-full bg-[url(./menu-background.svg)] bg-cover px-4 flex flex-col justify-center items-center pb-10 border-b-2 border-black">
        <div className="w-full h-30 flex justify-center items-center mt-40">
          <h1 className="font-primary uppercase text-6xl">Our menus</h1>
        </div>
        <div className="w-full h-full flex flex-col gap-6 md:flex-row md:gap-4 justify-center items-center">
          {menus.map((menu, i) => (
            <button
              key={i}
              onClick={() => {
                setMenuType(menu.type);
                setMenus((prev) =>
                  prev.map((m): MenuType => ({ ...m, isActive: m.type === menu.type }))
                );
              }}
              className={`${
                menu.isActive
                  ? `bg-blue-primary text-beige-primary`
                  : `text-blue-primary bg-beige-primary border-2`
              } font-primary text-2xl p-4 w-80 h-16 flex justify-center items-center rounded-[4rem] cursor-pointer hover:bg-blue-primary/10 transition-colors`}
            >
              {menu.name}
            </button>
          ))}
        </div>
      </section>

      {/* --- MENU DETAIL WITH ANIMATION --- */}
      <section className="w-full min-h-screen h-full bg-beige-primary p-4 flex flex-col gap-10 justify-center items-center py-20 font-secondary">
        <AnimatePresence mode="wait">
          <motion.div
            key={menuType} // Key tells Framer which element is which to trigger exit/enter
            variants={fadeVariant}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full max-w-6xl"
          >
            {/* --- Catering Menus --- */}
            {menuType === "catering" && (
              <div className="flex flex-col gap-12 size-full">
                <OrderButton url={CATERING_ORDER_URL} />
                <MenuItem title="Buster's Platter Favourites" items={CATERING_bustersPlatterFavourites} />
                <MenuItem title="Buster's X Stack'd Deli Kitchen" items={CATERING_bustersXStackdDeliKitchen} />
                <MenuItem title="Sides" items={CATERING_sides} />

              </div>
            )}

            {/* --- Restaurant Menu --- */}
            {menuType === "restaurant" && (
              <div className="flex flex-col gap-12 size-full">
                <OrderButton url={RESTAURANT_ORDER_URL} />
                <MenuItem title="Fried Sandwiches & Po' Boys" items={RESTAURANT_friedSandwichesAndPoBoys} />
                <MenuItem title="Grilled Sandwiches" items={RESTAURANT_grilledSandwiches} />
                <MenuItem title="Lobster" items={RESTAURANT_lobster} />
                <MenuItem title="From The Grill" items={RESTAURANT_fromTheGrill} />
                <MenuItem title="Fish Fry" items={RESTAURANT_fishFry} />
                <MenuItem title="Soups" items={RESTAURANT_soups} />
                <MenuItem title="Beverages" items={RESTAURANT_beverages} />
                <OrderButton url={RESTAURANT_ORDER_URL} />
              </div>
            )}

            {/* --- Food Truck Menu --- */}
            {menuType === "foodTruck" && (
              <div className="flex flex-col items-center text-center gap-8 py-10">
                <div className="max-w-xl space-y-4">
                  <h2 className="font-primary text-4xl md:text-5xl text-blue-primary uppercase">Mobile Kitchen Menu</h2>
                  <p className="font-secondary text-blue-primary/70 text-lg italic">
                    Our food truck offerings vary by location and season. View or download our current PDF.
                  </p>
                </div>
                {pdfUrl ? (
                  <div className="flex flex-col md:flex-row gap-6 mt-4">
                    <a 
                      href={pdfUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="border-2 border-blue-primary text-blue-primary font-primary text-2xl px-14 py-4 rounded-[4rem] hover:bg-blue-primary hover:text-beige-primary transition-all duration-300"
                    >
                      View PDF
                    </a>
                    <a 
                      href={pdfUrl} 
                      download 
                      className="border-2 border-blue-primary text-blue-primary font-primary text-2xl px-14 py-4 rounded-[4rem] hover:bg-blue-primary hover:text-beige-primary transition-all duration-300"
                    >
                      Download
                    </a>
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-8 h-8 border-4 border-blue-primary border-t-transparent rounded-full animate-spin"></div>
                    <p className="text-blue-primary font-primary text-xl uppercase tracking-widest italic">
                      Syncing with kitchen...
                    </p>
                  </div>
                )}
              <OrderButton url={RESTAURANT_ORDER_URL} />
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </section>
      <div className="w-full h-8 bg-blue-primary mt-auto" />
    </main>
  );
}