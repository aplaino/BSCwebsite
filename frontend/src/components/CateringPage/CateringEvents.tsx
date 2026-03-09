
import { companies } from "../../Data/Events";

export default function CateringEvents() {
  return (
    <section
      className="w-full min-h-200 h-full flex flex-col gap-12 py-20 px-8 md:px-12
        "
    >
      <article
        className="w-full max-w-140 h-full flex flex-col gap-6
            text-[#876E64] "
      >
        <h1 className="font-primary uppercase text-6xl">Recent Events</h1>
        <p className="font-secondary w-full border-l-2  pl-4">
          Our expertise extends past catering into full-scale event production.
          Whether creating our own food-driven experiences or collaborating on
          special projects, we prioritize passion and consistent quality.
        </p>
      </article>

      <div className="w-full min-h-400 h-full grid grid-cols-1 lg:grid-cols-2 gap-8">
        {companies.map((c, i) => (
          <a
            key={i}
            href={c.website}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-cover bg-center min-h-72"
            style={{ backgroundImage: `url('${c.imageUrl}')` }}
          >
            <h1
              className="font-primary uppercase text-white size-full rounded-2xl cursor-pointer
              flex justify-center items-center bg-black/60 duration-300 hover:bg-black/20
              text-2xl"
            >
              {c.name}
            </h1>
          </a>
        ))}
      </div>
    </section>
  );
}
