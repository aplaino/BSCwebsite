import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-screen min-h-80  bg-[#111B36] p-4 flex justify-center items-center">
      <article className="w-full max-w-300 flex flex-col gap-10 text-beige-primary">
        <h1 className="font-primary uppercase text-4xl">buster's sea cove</h1>

        <section className="w-full flex flex-col gap-10 md:gap-0 md:flex-row justify-between">
          <div className="w-auto h-full flex flex-col gap-2 font-secondary ">
            <h2 className=" font-bold">Services</h2>
            <Link to={`/menus/foodTruck`}>Food Truck Catering</Link>
            <a href="https://sites.ambassador.ai/?s=busterscommissary">
              Drop Off Catering
            </a>
            <a href="https://sites.ambassador.ai/?s=busterscommissary">
              Pick Up Catering
            </a>
            <Link to={`/menus/catering`}>Full-Service Catering</Link>
          </div>
          <div className="w-auto h-full flex flex-col gap-2 font-secondary">
            <h2 className=" font-bold">Contact</h2>
            <a href="tel:4163192957">416-319-2957</a>
            <a href="mailto:bustersheadoffice@gmail.com">
              bustersheadoffice@gmail.com
            </a>
          </div>

          <div className="w-auto h-full flex flex-col gap-2 font-secondary">
            <h2 className=" font-bold">Locations</h2>
            <p>Commerce Court</p>
            <p>199 Bay St. SUITE C-150, Toronto, ON M5L 1E9</p>
            <p>Head Office</p>
            <p>305 Industrial Pkwy S Unit 6, Aurora, ON L4G 6X7</p>
          </div>
        </section>
      </article>
    </footer>
  );
}
