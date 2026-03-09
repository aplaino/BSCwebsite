// 1. Define what a single menu item looks like
interface MenuItem {
  name: string;
  description: string | null;
  price: string;
  imageUrl?: string;
}

// 2. Define the props for the component
interface MenuSectionProps {
  title: string;
  items: MenuItem[]; // An array of the MenuItem objects defined above
}

export default function MenuItem({ title, items }:MenuSectionProps) {
  return (
    <div
      className="h-full w-full bg-white/70 drop-shadow-2xl rounded-4xl p-8
                  flex flex-col gap-14"
    >
      <h1 className="text-4xl font-extrabold">{title}</h1>
      <div className="grid grid-flow-row gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <div
            key={`${title}-${item.name}-${index}`}
            className="w-full h-full flex flex-col gap-4 p-4 rounded-2xl bg-white/60 border border-black/10"
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
                <div className="w-full h-56 md:h-52 rounded-xl border border-dashed border-black/30 bg-beige-primary/50 flex items-center justify-center text-xs text-blue-primary/70 uppercase tracking-wider text-center px-2">
                  Photo coming soon
                </div>
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
