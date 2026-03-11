// 1. Define what a single menu item looks like
interface MenuItem {
  name: string;
  description: string | null;
  price: string;
  imageUrl?: string | null;
}

// 2. Define the props for the component
interface MenuSectionProps {
  title: string;
  items: MenuItem[]; // An array of the MenuItem objects defined above
}

export default function MenuItem({ title, items }:MenuSectionProps) {
  return (
    <div
      className="h-full w-full bg-white/75 backdrop-blur-sm rounded-4xl p-8
                  flex flex-col gap-14 border border-white/50 shadow-[0_14px_30px_rgba(17,27,54,0.16)]"
    >
      <h1 className="text-4xl font-extrabold">{title}</h1>
      <div className="grid grid-flow-row gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <div
            key={`${title}-${item.name}-${index}`}
            className="w-full h-full flex flex-col gap-4 p-4 rounded-2xl bg-white/75 border border-black/10 shadow-[0_8px_18px_rgba(17,27,54,0.13)] hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(17,27,54,0.18)] transition-all duration-300"
          >
            <div className="w-full">
              {item.imageUrl ? (
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-56 md:h-52 object-cover rounded-xl border border-black/15"
                  loading="lazy"
                />
              ) : (
                <img
                  src="/logo.svg"
                  alt="Buster's Sea Cove logo"
                  className="w-full h-56 md:h-52 object-contain rounded-xl border border-dashed border-black/30 bg-beige-primary/50 p-6"
                  loading="lazy"
                />
              )}
            </div>
            <div className="w-full h-full flex flex-col gap-2">
              <h2 className="font-bold text-xl">{item.name}</h2>
              {item.description ? (
                <h2 className="text-md">{item.description}</h2>
              ) : null}
            </div>

            <h2 className="text-md text-right mt-auto">{item.price}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

// Buster's Platter Favourites, CATERING_bustersPlatterFavourites
