import FoodTruck from "../components/FoodTruck";
import { Link } from "react-router-dom";
import Gallery from "../components/Gallery";

export default function Home() {
  return (
    <main
      className="w-screen h-auto bg-beige-primary
        flex flex-col justify-center"
    >
      {/* -------------- LANDING ----------------- **/}
      <section className="w-full h-full pt-20">
        <article
          className="flex flex-col gap-12 w-full h-160 p-4
      justify-center items-center"
        >
          <p className="font-secondary text-beige-secondary">S I N C E 1992:</p>
          <h1 className="font-primary uppercase text-8xl text-blue-primary">
            buster's sea cove
          </h1>
          <div className="h-40 w-full flex justify-center items-center">
            <p
              className="font-secondary text-beige-secondary pr-10 border-r-beige-secondary border-r-2
          text-right w-80"
            >
              The Foudners of Torontp's renowned seafood legacy. Restaurants,
              foot trucks & catering.
            </p>
            <Link
              to="/catering"
              className="font-primary text-beige-primary bg-blue-primary text-2xl p-4 ml-10
            w-40 h-16 flex justify-center items-center rounded-[4rem] cursor-pointer"
            >
              Book Now
            </Link>
          </div>
        </article>
        <img src="./home-food-truck.svg" className="w-screen h-auto fit" />
      </section>
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
