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
        flex flex-col px-6 md:px-10 gap-10 pb-20 pt-16 md:pt-24"
    >
      <div className="flex flex-col w-full gap-3 text-[#111B36] border-b border-beige-secondary pb-8">
        <h1 className="font-primary text-5xl md:text-7xl uppercase leading-none">Buster's Gallery</h1>
        <p className="font-secondary text-sm md:text-base max-w-md">
          Our favourite photographs of the food we serve.
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
