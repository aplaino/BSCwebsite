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
  FOOD_TRUCK_Tacos, 
  FOOD_TRUCK_Sandwiches, 
  FOOD_TRUCK_AddOns 
} from "../Menus.ts";
import { useState } from "react";
import MenuItem from "../components/MenuItem.tsx";

export default function Menus() {
  const [menuType, setMenuType] = useState("catering");

  return (
    <main
      className="w-screen h-full min-h-screen flex flex-col
        bg-beige-primary"
    >
      {/* --- MENU OPTIONS --- **/}
      <section
        className="size-full bg-[url(./menu-background.svg)] bg-cover px-4
      flex flex-col justify-center items-center py-10 border-b-2 border-black"
      >
        <div className="w-full h-30 flex justify-center items-center mt-40">
          <h1 className="font-primary uppercase text-6xl ">Our menus</h1>
        </div>
        <div className="w-full h-full flex flex-col gap-6 md:flex-row md:gap-4 justify-center items-center">
          <button
            onClick={() => setMenuType("catering")}
            className="font-primary text-beige-primary bg-blue-primary text-2xl p-4 
            w-80 h-16 flex justify-center items-center rounded-[4rem] cursor-pointer"
          >
            Catering Menu
          </button>
          <button
            onClick={() => setMenuType("restaurant")}
            className="font-primary text-beige-primary bg-blue-primary text-2xl p-4 
            w-80 h-16 flex justify-center items-center rounded-[4rem] cursor-pointer"
          >
            Restaurant Menu
          </button>
          <button
            onClick={() => setMenuType("food truck")}
            className="font-primary text-beige-primary bg-blue-primary text-2xl p-4 
            w-80 h-16 flex justify-center items-center rounded-[4rem] cursor-pointer"
          >
            Food Truck Menu
          </button>
        </div>
      </section>

      {/* --- MENU DETAIL --- **/}
      <section
        className="w-full min-h-screen h-full bg-beige-primary p-4
      flex flex-col gap-10 justify-center items-center py-20 font-secondary"
      >
        {/* --- Catering Menus  --- **/}
        {menuType == "catering" && (
          <div className="flex flex-col gap-12 size-full">
            {/* --- portion card --- **/}
            <MenuItem
              title="Buster's Platter Favourites"
              items={CATERING_bustersPlatterFavourites}
            />
            {/* --- portion card --- **/}
            <MenuItem
              title="Buster's X Stack'd Deli Kitchen"
              items={CATERING_bustersXStackdDeliKitchen}
            />
            {/* --- portion card --- **/}
            <MenuItem title="Sides" items={CATERING_sides} />
          </div>
        )}

        {menuType === "restaurant" && (
          <div className="flex flex-col gap-12 size-full">
            <MenuItem
              title="Fried Sandwiches & Po' Boys"
              items={RESTAURANT_friedSandwichesAndPoBoys}
            />
            <MenuItem
              title="Grilled Sandwiches"
              items={RESTAURANT_grilledSandwiches}
            />
            <MenuItem title="Lobster" items={RESTAURANT_lobster} />
            <MenuItem title="From The Grill" items={RESTAURANT_fromTheGrill} />
            <MenuItem title="Fish Fry" items={RESTAURANT_fishFry} />
            <MenuItem title="Soups" items={RESTAURANT_soups} />
            <MenuItem title="Beverages" items={RESTAURANT_beverages} />
          </div>
        )}

        {menuType === "food truck" && (
          <div className="flex flex-col gap-12 size-full">
            
            {/* --- HOW IT WORKS SECTION --- */}
            <div className="w-full bg-blue-primary text-beige-primary p-8 rounded-3xl mb-10">
              <h2 className="font-primary text-4xl uppercase mb-8 text-center">How It Works</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
                <div className="flex flex-col gap-2">
                  <span className="font-primary text-3xl border-b border-beige-primary w-fit">Step 1</span>
                  <p>Fill out the contact form. Please provide as many details as possible!</p>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-primary text-3xl border-b border-beige-primary w-fit">Step 2</span>
                  <p>Build your menu: Choose 3 Mains & 1 Side. (Vegan, GF, Halal available).</p>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-primary text-3xl border-b border-beige-primary w-fit">Step 3</span>
                  <p>A member of our team will provide a quote and booking details.</p>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-primary text-3xl border-b border-beige-primary w-fit">Step 4</span>
                  <p>Relax, Eat, & Enjoy the Food Truck Experience!</p>
                </div>
              </div>
            </div>

            {/* --- TACO MENU --- */}
            <div className="border-t-2 border-black pt-10">
                <h2 className="font-primary text-3xl uppercase mb-2">Taco Catering Menu</h2>
                <p className="mb-6 italic">$22 PP + Booking, Travel, & Gratuities</p>
                <MenuItem title="Proteins (Select 3)" items={FOOD_TRUCK_Tacos} />
            </div>

            {/* --- OG MENU --- */}
            <div className="border-t-2 border-black pt-10">
                <h2 className="font-primary text-3xl uppercase mb-2">O.G. Catering Menu</h2>
                <p className="mb-6 italic">$25 PP + Booking, Travel, & Gratuities</p>
                <MenuItem title="Sandwiches & Mains" items={FOOD_TRUCK_Sandwiches} />
            </div>

            {/* --- ADD ONS --- */}
            <MenuItem title="Add Ons & Extras" items={FOOD_TRUCK_AddOns} />
          </div>
        )}
      </section>
    </main>
  );
}
