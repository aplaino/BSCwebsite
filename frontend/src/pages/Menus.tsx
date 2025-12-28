import { CateringMenu } from "../Menus.ts";
import { useState } from "react";

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
      <section className="w-full min-h-screen h-full bg-beige-primary
      flex flex-col gap-10 justify-center items-center py-20">
        {menuType == "catering" &&
          CateringMenu.map((portion) => (
            <div className="h-80 w-120 bg-white/70 drop-shadow-2xl">
                <h2>{}</h2>
            </div>
          ))}
      </section>
    </main>
  );
}
