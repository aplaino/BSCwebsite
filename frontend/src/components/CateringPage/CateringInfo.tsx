
export default function CateringInfo(){
    return (
      <section className="w-full py-20 px-6 bg-[#111B36] text-beige-primary">
        <div className="max-w-5xl mx-auto flex flex-col gap-16">
          <article className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="lg:w-1/2">
              <h2 className="font-primary text-4xl md:text-6xl uppercase leading-tight">
                Exceptional Seafood <br /> For Every Occasion
              </h2>
            </div>
            <div className="lg:w-1/2 flex flex-col gap-6">
              <p className="font-secondary text-lg md:text-xl text-beige-primary/80 leading-relaxed pl-4 border-l-2 border-beige-secondary">
                Since 1992, Buster’s Sea Cove has served as a cornerstone of
                Toronto’s culinary scene, bringing an unparalleled seafood
                experience to the city’s most prestigious corporate and private
                events. Our dedicated catering team prides itself on a bespoke
                approach, curating sophisticated, dietary-inclusive menus
                tailored to your unique vision and budget. We provide a
                comprehensive solution to managing everything from professional
                setup to expert service, ensuring a seamless execution so you
                can remain fully present with your guests.{" "}
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
                your doorstep. Perfect for outdoor festivals, film sets, and
                large corporate rallies.
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
                A bespoke buffet-style experience with professional chefs on
                hand. Full-scale hospitality for weddings and premium corporate
                galas.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
}