// 1. Define what a single menu item looks like
interface MenuItem {
  name: string;
  description: string | null;
  price: string;
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
        { items.map((item) => (
          <div
            className="w-full h-full gap-7
                      flex flex-col justify-between py-2 border-b-2 border-black/30"
          >
            <div className="w-full h-full flex flex-col justify-between">
              <h2 className="font-bold text-xl">{item.name}</h2>
              <h2 className=" text-md">{item.description}</h2>
            </div>

            <h2 className="text-md text-right">{item.price}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

// Buster's Platter Favourites, CATERING_bustersPlatterFavourites
