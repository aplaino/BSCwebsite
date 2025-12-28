export default function Footer() {
  return (
    <footer className="w-screen min-h-80  bg-[#111B36] p-4 flex justify-center items-center">
      <article className="w-full max-w-300 flex flex-col gap-10 text-beige-primary">
        <h1 className="font-primary uppercase text-4xl">buster's sea cave</h1>

        <section className="w-full flex flex-col gap-10 md:gap-0 md:flex-row justify-between">
          <div className="w-auto h-full flex flex-col gap-2 font-secondary ">
            <h2 className=" font-bold">Services</h2>
            <p>Food Truck Catering</p>
            <p>Drop Off Catering</p>
            <p>Pick Up Catering</p>
            <p>Full-Service Catering</p>
          </div>
          <div className="w-auto h-full flex flex-col gap-2 font-secondary">
            <h2 className=" font-bold">Contact</h2>
            <p>416-319-2957</p>
            <p>bustersheadoffice@gmail.com</p>
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
