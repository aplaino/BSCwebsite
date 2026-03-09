import { FaArrowRightLong } from "react-icons/fa6";

export default function CateringInfo() {
  return (
    <section className="w-full py-20 px-6 bg-[#111B36] text-beige-primary">
      <div className="max-w-5xl mx-auto flex flex-col gap-16">
        <article className="flex flex-col lg:flex-row gap-10 items-start lg:justify-center lg:items-center ">
          <div className="lg:w-1/2">
            <h2 className="font-primary text-4xl md:text-6xl uppercase leading-tight">
              Exceptional Seafood <br /> For Every Occasion
            </h2>
          </div>
          <div className="lg:w-1/2 flex flex-col gap-6 ">
            <p className="font-secondary text-lg md:text-xl text-beige-primary/80 leading-relaxed pl-4 border-l-2 border-beige-secondary">
              Since 1992, Buster’s Sea Cove has served as a cornerstone of
              Toronto’s culinary scene, bringing an unparalleled seafood
              experience to the city’s most prestigious corporate and private
              events.
            </p>
          </div>
        </article>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-beige-primary/10 p-8 rounded-2xl border border-beige-primary/20 backdrop-blur-sm">
            <h3 className="font-primary text-3xl uppercase mb-4 text-beige-secondary">
              Food Truck
            </h3>
            <p className="font-secondary text-sm opacity-90">
              Our iconic mobile kitchen brings the street-side experience to
              your doorstep. Perfect for outdoor festivals, film sets, and large
              corporate rallies.
            </p>
          </div>
          <div className="bg-beige-primary/10 p-8 rounded-2xl border border-beige-primary/20 backdrop-blur-sm">
            <h3 className="font-primary text-3xl uppercase mb-4 text-beige-secondary">
              Drop-Off
            </h3>
            <p className="font-secondary text-sm opacity-90">
              Gourmet seafood delivered at peak temperature. Ideal for office
              luncheons, house parties, and casual gatherings where quality is
              paramount.
            </p>
          </div>
          <div className="bg-beige-primary/10 p-8 rounded-2xl border border-beige-primary/20 backdrop-blur-sm">
            <h3 className="font-primary text-3xl uppercase mb-4 text-beige-secondary">
              Full Service
            </h3>
            <p className="font-secondary text-sm opacity-90">
              A bespoke buffet-style experience with professional chefs on hand.
              Full-scale hospitality for weddings and premium corporate galas.
            </p>
          </div>
        </div>

        {/* Dessert Section */}
        <div className="flex flex-col items-center gap-6">
          <h3 className="font-secondary font-semibold italic text-3xl md:text-4xl uppercase">
            Complete your menu
          </h3>
          <a
            href="https://dolcellagelato.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-md bg-beige-primary/10 p-8 rounded-2xl border border-beige-primary/20 backdrop-blur-sm transition-all cursor-pointer hover:bg-beige-primary/20 group"
          >
            <h3
              className="font-primary flex justify-around
             text-3xl uppercase w-full  text-beige-secondary group-hover:text-beige-primary transition-colors "
            >
              Our dessert service <FaArrowRightLong />
            </h3>
          </a>
        </div>
      </div>
    </section>
  );
}
