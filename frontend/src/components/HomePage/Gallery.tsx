import { useEffect, useState } from "react";

export default function Gallery() {
  const modules = import.meta.glob("../../gallery/HomePageGallery/*.webp");
  const menuGallery = [
    "/Images/Menu/Calamari & Chips .webp",
    "/Images/Menu/Gr Calamari .webp",
    "/Images/Menu/Gr Halibut .webp",
    "/Images/Menu/Haddock & Chips .webp",
    "/Images/Menu/Halibut & Chips .webp",
    "/Images/Menu/Lobster Grilled Cheese Closeup .webp",
    "/Images/Menu/Lobster Roll .webp",
    "/Images/Menu/Rainbow Trout .webp",
    "/Images/Menu/Rainbow Trout closeup.webp",
    "/Images/Menu/Salmon .webp",
    "/Images/Menu/Seared Ahi Tuna salad.webp",
    "/Images/Menu/Snapper .webp",
    "/Images/Menu/Snapper Sandwich .webp",
    "/Images/Menu/Soups .webp",
    "/Images/Menu/Swordfish .webp",
    "/Images/Menu/Tilapia .webp",
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
