import FoodTruck from "../components/HomePage/FoodTruck";
import { Link } from "react-router-dom";
import Gallery from "../components/HomePage/Gallery";
import { useEffect } from "react";
import HomeNav from "../components/HomePage/HomeNav";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main
      className="w-screen h-auto bg-beige-primary
        flex flex-col justify-center"
    >
      {/* -------------- LANDING ----------------- **/}
      <section className="w-full h-full pt-20">
        <article
          className="flex flex-col gap-2 w-full h-120 p-4
      justify-center items-center "
        >
          <p className="font-secondary text-[#876E64] text-xl">
            S I N C E 1992:
          </p>
          <h1 className="font-primary uppercase text-8xl md:text-9xl text-blue-primary text-center">
            buster's sea cove
          </h1>
          <div className="h-40 w-full flex justify-center items-center">
            <p
              className="font-secondary text-[#876E64] text-md md:text-lg pr-10 border-r-beige-secondary border-r-2
          text-right w-90"
            >
              The Foudners of Torontp's renowned seafood legacy. Restaurants,
              foot trucks & catering.
            </p>
            <Link
              to="/catering"
              className="font-primary text-beige-primary bg-blue-primary text-2xl p-2 ml-6
            w-60 md:w-40 h-14 flex justify-center items-center rounded-[4rem] cursor-pointer
            hover:text-blue-primary hover:bg-beige-primary hover:border duration-300"
            >
              Book Now
            </Link>
          </div>
        </article>
        <div
          className="h-80 w-full bg-amber-400
        flex justify-center items-center"
        >
          Placeholder image / video
        </div>
      </section>
      {/* -------------- Home navs **/}
      <HomeNav />
      {/* -------------- FOOD TRUCK SCHEDULE ----------------- **/}
      <FoodTruck />
      <section className="w-full h-4 bg-beige-secondary"></section>
      {/* -------------- GALLERY ----------------- **/}
      <Gallery />
      {/* -------------- SERVING HOURS ----------------- **/}
      <section
        className="bg-[url(./serving-hours-background.jpg)] w-full h-screen bg-cover
      flex justify-center items-center"
      >
        <img
          src="./serving-hours.svg"
          alt="serving hours"
          className="h-90 md:120 lg:150 w-auto"
        />
      </section>
    </main>
  );
}
