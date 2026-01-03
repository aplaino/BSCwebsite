export default function CateringScroll() {
  return (
    <section className="w-full h-100 flex flex-col gap-12  justify-center items-center">
      <h1 className="font-primary uppercase text-6xl text-[#876E64]">
        Our Partners
      </h1>

      <div className="h-44 w-full max-w-240 flex flex-col gap-12 relative justify-center items-center">
        {/** ---- 2 absolute gradient blocks at either side of the scroll ---- */}
        <div
          className="h-44 w-40 border-l-2 border-beige-secondary bg-linear-to-r from-beige-primary to-transparent z-52
        absolute left-0 top-0"
        ></div>
        <div
          className="h-44 w-40 border-r-2 border-beige-secondary bg-linear-to-l from-beige-primary to-transparent z-52
        absolute right-0 top-0"
        ></div>
        {/** ---- Row 1 ---- */}
        <div
          className="w-full h-16 overflow-hidden 
      font-primary uppercase text-4xl md:text-8xl flex shrink-0 gap-8"
        >
          <ul
            className="flex shrink-0 justify-center items-center gap-10 
        animate-infinite-scroll"
          >
            {[...Array(4)].map((k, index) => (
              <img
                src={`./CateringScroll/${index}.svg`}
                className="w-40 h-20"
              />
            ))}
          </ul>
          <ul
            className="flex shrink-0 justify-center items-center gap-10 uppercase
        animate-infinite-scroll"
          >
            {[...Array(4)].map((k, index) => (
              <img
                src={`./CateringScroll/${index}.svg`}
                className="w-40 h-20"
              />
            ))}
          </ul>
        </div>

        {/** ---- Row 2 ---- */}
        <div
          className="w-full h-16 bg overflow-hidden 
      font-primary uppercase text-4xl md:text-8xl flex shrink-0 gap-8"
        >
          <ul
            className="flex shrink-0 justify-center items-center gap-10 
        animate-infinite-scroll-2"
          >
            {[...Array(5)].map((k, index) => (
              <img
                src={`./CateringScroll/${index + 4}.svg`}
                className="w-40 h-20"
              />
            ))}
          </ul>
          <ul
            className="flex shrink-0 justify-center items-center gap-10 uppercase
        animate-infinite-scroll-2"
          >
            {[...Array(5)].map((k, index) => (
              <img
                src={`./CateringScroll/${index + 4}.svg`}
                className="w-40 h-20"
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
