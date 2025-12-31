import { useEffect } from "react";

export default function Schedule() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="w-full min-h-screen bg-beige-secondary">
      <div className="size-full p-6 mt-20 flex flex-col gap-12 justify-center items-center">
        <h1 className="uppercase font-primary text-4xl md:text-6xl text-beige-primary">Buster's Food Truck Schedule</h1>
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FToronto&showPrint=0&src=Y2hyaXN0b3BoZXJtYW9tYW9AZ21haWwuY29t&src=ZmFtaWx5MDcyNDc1NDc5MjY5MjI5NTE3NTlAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=ZW4uY2FuYWRpYW4jaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039be5&color=%23ad1457&color=%230b8043"
          className="w-full h-200 rounded-2xl drop-shadow-2xl"
        />
      </div>
    </main>
  );
}
