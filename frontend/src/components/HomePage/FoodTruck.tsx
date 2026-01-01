import Scroll from "./Scroll";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function FoodTruck() {
  return (
    <section className="w-full h-240 flex flex-col relative bg-black py-5 md:py-10 ">
      <img
        src="./foodtruck.svg"
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
          Our <span className="text-blue-secondary underline">food truck</span>{" "}
          is always on the move.{" "}
          <Link
            to="/schedule"
            className="bg-beige-primary text-blue-primary text-2xl md:text-4xl w-auto whitespace-nowrap rounded-3xl px-4 py-2
            duration-300 hover:bg-beige-primary/80
            inline-flex justify-center items-center gap-2"
          >
            Check the schedule <FaMapMarkerAlt className="text-3xl" />
          </Link>
        </h1>
      </div>
    </section>
  );
}
