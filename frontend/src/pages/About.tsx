export default function About() {
  return (
    <main className="w-screen min-h-screen bg-beige-primary">
      
      {/* --- HERO SECTION --- */}
      <section className="h-[40vh] w-full flex flex-col items-center justify-center bg-blue-primary text-beige-primary text-center px-4">
        <h1 className="font-primary text-6xl md:text-8xl uppercase tracking-tighter">
          Our Story
        </h1>
        <div className="w-24 h-1 bg-beige-primary mt-4"></div>
      </section>

      {/* --- MAIN STORY SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Text Side */}
        <div className="flex flex-col gap-6 order-2 md:order-1">
          <h2 className="font-primary text-4xl md:text-5xl text-blue-primary uppercase leading-none">
            From St. Lawrence Market <br /> to the Streets
          </h2>
          <p className="font-secondary text-lg text-gray-700 leading-relaxed">
            Since opening our doors in 1992, Buster's Sea Cove has been a cornerstone 
            of the historic St. Lawrence Market. What started as a local secret for 
            the freshest fish and chips has evolved into a Toronto institution.
          </p>
          <p className="font-secondary text-lg text-gray-700 leading-relaxed">
            Founded by the same team behind some of the city's favorite seafood, we've 
            expanded our horizons from the market floor to our mobile food trucks, 
            bringing the same high-quality ingredients and "sea-to-street" philosophy 
            to weddings, corporate events, and festivals across Ontario.
          </p>
          <div className="bg-blue-primary text-beige-primary p-6 rounded-lg shadow-md">
            <p className="italic text-lg font-secondary">
              "Thirty years later, the recipe remains the same: fresh seafood, 
              massive portions, and a love for the Toronto community."
            </p>
          </div>
        </div>

        {/* Image Side */}
        <div className="order-1 md:order-2">
          <div className="aspect-square w-full bg-gray-200 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
            <img 
              src="/images/market-stall.jpg" 
              alt="Buster's Original Stall" 
              className="w-full h-full object-cover"
              onError={(e) => { e.currentTarget.src = "" }}  // add picture here 
            />
          </div>
        </div>
      </section>

      {/* --- STATS / QUICK FACTS SECTION --- */}
      <section className="w-full bg-white border-y border-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="font-primary text-5xl text-blue-primary">1992</p>
            <p className="font-secondary uppercase text-sm tracking-widest text-gray-500 mt-2">Established</p>
          </div>
          <div>
            <p className="font-primary text-5xl text-blue-primary">1M+</p>
            <p className="font-secondary uppercase text-sm tracking-widest text-gray-500 mt-2">Meals Served</p>
          </div>
          <div>
            <p className="font-primary text-5xl text-blue-primary">3</p>
            <p className="font-secondary uppercase text-sm tracking-widest text-gray-500 mt-2">Food Trucks</p>
          </div>
          <div>
            <p className="font-primary text-5xl text-blue-primary">100%</p>
            <p className="font-secondary uppercase text-sm tracking-widest text-gray-500 mt-2">Fresh Catch</p>
          </div>
        </div>
      </section>

      {/* --- TRUCK INFO SECTION --- */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h3 className="font-primary text-3xl uppercase text-blue-primary mb-6">The Mobile Experience</h3>
        <p className="font-secondary text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Our trucks are more than just a kitchen on wheels; they are a direct 
          extension of our St. Lawrence kitchen. Whether we're parked at a wedding 
          in the Muskokas or a corporate lunch in the Financial District, you're 
          getting the real Buster's experience.
        </p>
      </section>

    </main>
  );
}