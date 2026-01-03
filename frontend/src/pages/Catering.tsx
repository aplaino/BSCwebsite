import { useEffect, useState } from "react";

import CateringScroll from "../components/CateringPage/CateringScroll";
import CateringForm from "../components/CateringPage/CateringForm";
import CateringInfo from "../components/CateringPage/CateringInfo";
import CateringEvents from "../components/CateringPage/CateringEvents";
export default function Catering() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [minimalForm, setMinimalForm] = useState<boolean>(true);

  return (
    <main className="w-full min-h-screen flex flex-col gap-10 justify-center items-center">
      {/** --------- Form ------------- */}

      <CateringForm minimalForm={minimalForm} setMinimalForm={setMinimalForm} />

      {/** --------- PARTERS (SCROLL) ------------- */}

      <CateringScroll />

      {/* -------------- NEW SECTION 2: INFORMATION / SERVICE TIERS ----------------- */}

      <CateringInfo />

      {/** --------- RECENT EVENTS ------------- */}

      <CateringEvents />
      
    </main>
  );
}
