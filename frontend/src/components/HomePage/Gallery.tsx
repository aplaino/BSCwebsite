import { useEffect, useState } from "react";

export default function Gallery() {
  const modules = import.meta.glob("../../gallery/HomePageGallery/*.jpg");
  const [gallery, setGallery] = useState<string[]>([]);

  const loadPhotos = () => {
    for (const path in modules) {
      modules[path]().then((mod: any) => {
        setGallery((prev) => [...prev, mod.default]);
      });
    }
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
        className="columns-1 sm:columns-2 lg:colums-3 xl:columns-4
      [&>img:not(:first-child)]:mt-4"
      >
        {gallery.map((p, index) => (
          <img src={p} key={index} alt={`Gallery item ${index + 1}`} className="rounded-2xl" />
        ))}
      </div>
    </section>
  );
}
