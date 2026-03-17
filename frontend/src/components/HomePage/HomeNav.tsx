import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

export default function HomeNav() {
  const navCards = [
    { title: "Menus", route: "/menus/restaurant", image: "/Images/Menu/Lobster Roll .jpg" },
    { title: "Catering", route: "/catering", image: "/cateringzfp.jpg" },
    { title: "About", route: "/about", image: "/Images/stLawrence.jpg" },
    { title: "Contact", route: "/contact", image: "/Images/Buster Sea Cove (51).jpg" },
  ];

  return (
    <section className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4 p-6">
      {navCards.map((card) => (
        <Link
          key={card.title}
          to={card.route}
          style={{ backgroundImage: `url('${encodeURI(card.image)}')` }}
          className="aspect-square w-full bg-cover bg-center rounded-2xl flex flex-col justify-between hover:scale-105 duration-300 cursor-pointer"
        >
          <div className="w-full h-auto flex justify-end">
            <GoArrowUpRight className="text-5xl bg-beige-primary p-2 rounded-md" />
          </div>
          <div className="w-full min-h-20 h-auto flex items-end bg-black/40 rounded-2xl p-4">
            <h2 className="font-primary text-3xl md:text-5xl uppercase text-beige-primary">
              {card.title}
            </h2>
          </div>
        </Link>
      ))}
    </section>
  );
}
