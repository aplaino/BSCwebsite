export default function CateringScroll() {
  return (
    <section className="w-full h-80 flex flex-col gap-12  justify-center items-center">
      <h1 className="font-primary uppercase text-6xl text-[#876E64]">
        Our Partners
      </h1>
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
            <img src={`./CateringScroll/${index}.svg`} className="bg-contain" />
          ))}
        </ul>
        <ul
          className="flex shrink-0 justify-center items-center gap-10 uppercase
        animate-infinite-scroll"
        >
          {[...Array(4)].map((k, index) => (
            <img src={`./CateringScroll/${index}.svg`} className="bg-cover" />
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
        animate-infinite-scroll"
        >
          {[...Array(5)].map((k, index) => (
            <img
              src={`./CateringScroll/${index + 4}.svg`}
              className="bg-cover"
            />
          ))}
        </ul>
        <ul
          className="flex shrink-0 justify-center items-center gap-10 uppercase
        animate-infinite-scroll"
        >
          {[...Array(5)].map((k, index) => (
            <img
              src={`./CateringScroll/${index + 4}.svg`}
              className="bg-cover"
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
