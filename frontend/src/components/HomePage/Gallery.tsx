import { useEffect, useState } from "react";

export default function Gallery() {
  const modules = import.meta.glob("../../gallery/HomePageGallery/*.jpg");
  const menuGallery = [
    "/Images/Menu/Calamari & Chips .jpg",
    "/Images/Menu/Gr Calamari .jpg",
    "/Images/Menu/Gr Halibut .jpg",
    "/Images/Menu/Haddock & Chips .jpg",
    "/Images/Menu/Halibut & Chips .jpg",
    "/Images/Menu/Lobster Grilled Cheese Closeup .jpg",
    "/Images/Menu/Lobster Roll .jpg",
    "/Images/Menu/Octopus .jpg",
    "/Images/Menu/Rainbow Trout .jpg",
    "/Images/Menu/Rainbow Trout closeup.jpg",
    "/Images/Menu/Salmon .jpg",
    "/Images/Menu/Seared Ahi Tuna salad (1).jpg",
    "/Images/Menu/Seared Ahi Tuna salad.jpg",
    "/Images/Menu/Snapper .jpg",
    "/Images/Menu/Snapper Sandwich .jpg",
    "/Images/Menu/Soups .jpg",
    "/Images/Menu/Swordfish .jpg",
    "/Images/Menu/Tilapia .jpg",
  ];
  const [gallery, setGallery] = useState<string[]>(menuGallery);

  const loadPhotos = async () => {
    const sortedPaths = Object.keys(modules).sort();
    const homeGallery = await Promise.all(
      sortedPaths.map(async (path) => {
        const mod = (await modules[path]()) as { default: string };
        return mod.default;
      })
    );
    setGallery((prev) => [...prev, ...homeGallery]);
  };

  useEffect(() => {
    loadPhotos();
  }, []);
  return (
    <section
      className="bg-beige-primary w-screen min-h-screen h-full
        flex flex-col px-8 gap-12 pb-20 pt-40 "
    >
      <div className="flex flex-col w-full h-full gap-2 text-[#876E64]">
        <h1 className="font-primary text-6xl ">Buster's Gallery</h1>
        <p className="font-secondary">
          Check out our favourite photographs of the food we serve!
        </p>
      </div>

      <div
        className="columns-2 sm:columns-2 lg:columns-3 xl:columns-4
      [&>img:not(:first-child)]:mt-4"
      >
        {gallery.map((p, index) => (
          <img
            src={encodeURI(p)}
            key={`${p}-${index}`}
            alt={`Gallery item ${index + 1}`}
            loading={index < 8 ? "eager" : "lazy"}
            decoding="async"
            className="w-full rounded-2xl"
          />
        ))}
      </div>
    </section>
  );
}
