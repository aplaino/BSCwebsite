import Scroll from "./Scroll";
import { Link } from "react-router-dom";
export default function FoodTruck() {
  return (
    <section className="w-full h-240 flex flex-col relative bg-black py-5 md:py-10 ">
      <img
        src="/foodtruck.svg"
        alt=""
        className="absolute w-170 z-50
        top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/3"
      />

      <Scroll text="available now" rep={5} />
      <Scroll text="buster's sea cove" rep={3} />
      <Scroll text="call us" rep={9} />
      <Scroll text="unforgettable experience" rep={3} />
      <Scroll text="available now" rep={6} />
      <div
        className="w-full h-100 bg-black text-beige-primary p-6
      flex flex-col text-left justify-center"
      >
        <h1 className="font-secondary font-bold text-6xl ">
          Our{" "}
          <Link
            to="/schedule"
            className="text-blue-secondary underline decoration-3 underline-offset-4 hover:text-blue-primary transition-colors"
          >
            food truck
          </Link>{" "}
          is always on the move.{" "}
          <Link
            to="/catering"
            className="bg-blue-primary text-beige-primary text-2xl md:text-4xl w-auto whitespace-nowrap rounded-[3rem] px-7 py-3 md:px-8 md:py-4 ml-2
            border-2 border-beige-primary shadow-[0_8px_20px_rgba(0,0,0,0.35)] duration-300 hover:bg-blue-secondary hover:scale-105
            inline-flex justify-center items-center gap-2"
          >
            Book our food truck
          </Link>
        </h1>
      </div>
    </section>
  );
}
