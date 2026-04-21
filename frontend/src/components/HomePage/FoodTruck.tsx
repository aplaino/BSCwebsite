import { Link } from "react-router-dom";

export default function FoodTruck() {
  return (
    <section className="w-full">
      {/* Foreground — truck image + text layered over the scroll rows */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center px-8 pt-10 pb-12 gap-8 md:px-16 md:pt-14 md:pb-16">
        <img
          src="/foodtruck.svg"
          alt=""
          className="w-full max-w-sm md:max-w-md lg:max-w-xl flex-shrink-0 pointer-events-none"
        />
        <div className="flex flex-col gap-6">
          <h2 className="font-primary uppercase text-6xl leading-tight text-beige-primary md:text-6xl lg:text-7xl">
            Our{" "}
            <Link
              to="/schedule"
              className="text-blue-secondary underline decoration-2 underline-offset-4 hover:text-blue-primary transition-colors duration-300"
            >
              food truck
            </Link>
            <br />
            is always on the
            <br />
            move.
          </h2>
          <Link
            to="/catering"
            className="self-start bg-blue-primary text-beige-primary font-primary uppercase text-xl rounded-[3rem] px-8 py-4
            border-2 border-beige-primary shadow-[0_8px_20px_rgba(0,0,0,0.35)] transition-all duration-300 hover:bg-blue-secondary hover:scale-105
            inline-flex items-center"
          >
            Book the Truck
          </Link>
        </div>
      </div>
    </section>
  );
}
