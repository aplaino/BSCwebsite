import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-screen bg-[#111B36] flex justify-center items-center border-t border-beige-primary/10">
      <article className="w-full max-w-300 flex flex-col gap-12 text-beige-primary px-6 py-14 md:px-10 md:py-18">

        <div className="flex flex-col gap-1">
          <h1 className="font-primary uppercase text-4xl md:text-5xl tracking-wide">buster's sea cove</h1>
          <p className="font-secondary text-sm text-beige-primary/70">Toronto's seafood legacy since 1992.</p>
        </div>

        <section className="w-full grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-6 border-t border-beige-primary/10 pt-10">
          <div className="flex flex-col gap-3 font-secondary">
            <h2 className="text-xs uppercase tracking-[0.18em] text-beige-primary/70 font-semibold mb-1">Services</h2>
            <Link to="/catering" className="text-sm hover:text-beige-secondary transition-colors duration-200">Food Truck Catering</Link>
            <a href="https://sites.ambassador.ai/?s=busterscommissary" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-beige-secondary transition-colors duration-200">
              Drop Off Catering
            </a>
            <a href="https://sites.ambassador.ai/?s=busterscommissary" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-beige-secondary transition-colors duration-200">
              Pick Up Catering
            </a>
            <Link to="/catering" className="text-sm hover:text-beige-secondary transition-colors duration-200">Full-Service Catering</Link>
          </div>

          <div className="flex flex-col gap-3 font-secondary">
            <h2 className="text-xs uppercase tracking-[0.18em] text-beige-primary/70 font-semibold mb-1">Contact</h2>
            <a href="tel:4163192957" className="text-sm hover:text-beige-secondary transition-colors duration-200">416-319-2957</a>
            <a href="mailto:bustersheadoffice@gmail.com" className="text-sm hover:text-beige-secondary transition-colors duration-200">
              bustersheadoffice@gmail.com
            </a>
          </div>

          <div className="flex flex-col gap-3 font-secondary">
            <h2 className="text-xs uppercase tracking-[0.18em] text-beige-primary/70 font-semibold mb-1">Locations</h2>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-semibold">Commerce Court</p>
              <a
                href="https://maps.google.com/?q=199+Bay+St+Suite+C-150,+Toronto,+ON+M5L+1E9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-beige-primary/70 hover:text-beige-secondary transition-colors duration-200"
              >
                199 Bay St. Suite C-150, Toronto, ON
              </a>
              <p className="text-xs text-beige-primary/60">Mon–Fri 11:00 am–3:00 pm</p>
            </div>
            <div className="flex flex-col gap-1 mt-2">
              <p className="text-sm font-semibold">Head Office</p>
              <a
                href="https://maps.google.com/?q=305+Industrial+Pkwy+S+Unit+6,+Aurora,+ON+L4G+6X7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-beige-primary/70 hover:text-beige-secondary transition-colors duration-200"
              >
                305 Industrial Pkwy S Unit 6, Aurora, ON
              </a>
            </div>
          </div>
        </section>

        <p className="font-secondary text-xs text-beige-primary/50 border-t border-beige-primary/10 pt-6">
          © {new Date().getFullYear()} Buster's Sea Cove. All rights reserved.
        </p>
      </article>
    </footer>
  );
}
