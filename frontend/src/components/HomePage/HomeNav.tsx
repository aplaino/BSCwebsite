import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

export default function HomeNav() {
  const navCards = [
    { title: "Menus", route: "/menus/restaurant", image: "/Images/Menu/Lobster Roll .webp" },
    { title: "Catering", route: "/catering", image: "/cateringzfp.webp" },
    { title: "About", route: "/about", image: "/Images/stLawrence.webp" },
    { title: "Contact", route: "/contact", image: "/Images/Buster Sea Cove (51).webp" },
  ];

  return (
    <section className="w-full grid grid-cols-2 lg:grid-cols-4 gap-2 p-3 md:gap-3 md:p-4">
      {navCards.map((card) => (
        <Link
          key={card.title}
          to={card.route}
          style={{ backgroundImage: `url('${encodeURI(card.image)}')` }}
          className="group relative aspect-[3/2] w-full overflow-hidden rounded-2xl bg-cover bg-center cursor-pointer"
        >
          {/* Gradient overlay — deepens on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent transition-all duration-500 group-hover:from-black/80" />

          {/* Arrow — fades in top-right on hover */}
          <GoArrowUpRight className="absolute top-4 right-4 text-white text-xl opacity-0 translate-x-1 -translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0" />

          {/* Title — lifts slightly on hover */}
          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-1 transition-transform duration-300 group-hover:translate-y-0">
            <h2 className="font-primary text-3xl uppercase leading-none text-white md:text-4xl xl:text-5xl">
              {card.title}
            </h2>
          </div>
        </Link>
      ))}
    </section>
  );
}
