import { useEffect, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

export default function HomeNav() {
  const modules = import.meta.glob("../../gallery/HomePageRedir/*.jpg");
  const [navCards, setNavCards] = useState<string[]>([]);
  const routes = ["/menus/restaurant", "/catering", "/about", "/contact"];

  const loadPhotos = async () => {
    const sortedPaths = Object.keys(modules).sort();
    const loaded = await Promise.all(
      sortedPaths.map(async (path) => {
        const mod = (await modules[path]()) as { default: string };
        return mod.default;
      })
    );
    setNavCards(loaded);
  };

  useEffect(() => {
    loadPhotos();
  }, []);

  return (
      <section className="h-120 md:h-140 w-full flex justify-center items-center gap-4 p-6">
        {navCards.map((bgURL, index) => (
          <Link
            key={index}
            to={routes[index] ?? "/"}
            style={{ backgroundImage: `url(${bgURL})` }}
            className={`h-80 lg:h-100 w-full bg-cover rounded-2xl ${
              index === 3 ? "hidden sm:flex" : "flex"
            }
          flex flex-col justify-between hover:scale-105 duration-300 cursor-pointer`}
          >
            <div className="w-full h-auto flex justify-end">
              <GoArrowUpRight className="text-5xl bg-beige-primary p-2 rounded-md" />
            </div>
            <div className="w-full min-h-20 h-auto flex items-end bg-black/40 rounded-2xl p-4">
              <h2 className="font-primary text-3xl md:text-5xl uppercase text-beige-primary">
                {index === 0 && "Menus"}
                {index === 1 && "Catering"}
                {index === 2 && "About"}
                {index === 3 && "Contact"}
              </h2>
            </div>
          </Link>
        ))}
      </section>
    );
}
