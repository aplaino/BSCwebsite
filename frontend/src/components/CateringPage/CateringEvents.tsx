
import { companies } from "../../Data/Events";

export default function CateringEvents() {
  return (
    <section
      className="w-full flex flex-col gap-6 py-10 px-6 md:px-12"
    >
      <article
        className="w-full max-w-120 flex flex-col gap-3 text-[#876E64]"
      >
        <h1 className="font-primary uppercase text-3xl md:text-5xl">Recent Events</h1>
        <p className="font-secondary w-full border-l-2 pl-4 text-sm md:text-base">
          Our expertise extends past catering into full-scale event production.
          Whether creating our own food-driven experiences or collaborating on
          special projects, we prioritize passion and consistent quality.
        </p>
      </article>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        {companies.map((c, i) => (
          <a
            key={i}
            href={c.website}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-cover bg-center min-h-56"
            style={{ backgroundImage: `url('${c.imageUrl}')` }}
          >
            <h1
              className="font-primary uppercase text-white size-full rounded-2xl cursor-pointer
              flex justify-center items-center bg-black/60 duration-300 hover:bg-black/20
              text-xl"
            >
              {c.name}
            </h1>
          </a>
        ))}
      </div>
    </section>
  );
}
