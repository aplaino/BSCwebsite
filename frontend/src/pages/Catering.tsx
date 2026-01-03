import { FaCheck } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { companies } from "../Data/Events";
export default function Catering() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [minimalForm, setMinimalForm] = useState<boolean>(true);

  async function handleSubmit(formData: FormData) {
    const input = Object.fromEntries(formData.entries());
    console.log("SENDING TO DJANGO:", input);

    const result = await fetch("http://127.0.0.1:8000/api/catering/submit/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    });

    const data = await result.json();
    console.log(data);
  }
  return (
    <main className="w-full min-h-screen flex flex-col gap-10 justify-center items-center">
      <section
        className={`w-full min-h-200 h-full bg-[url(./catering-background.svg)] bg-cover px-6
      flex flex-col gap-10 justify-center items-center ${
        minimalForm ? "" : "pt-40 pb-20"
      }
      border-b-4 border-beige-secondary`}
      >
        <article
          className="w-full max-w-140 h-full flex flex-col gap-6
            text-beige-primary"
        >
          <h1 className="font-primary uppercase text-6xl">
            Buster's Sea Cove Catering Request Form
          </h1>
          <p className="font-secondary ">
            We're thrilled you found us! Please fill out the form below with as
            much detail as possible. Any Corporate Events, Golf Courses, House
            Parties, Weddings, Birthday Parties, Film Sets, and SO much more! We
            cater to it all.
          </p>
        </article>

        <form
          className={`w-full max-w-140 h-full flex flex-col bg-beige-primary px-8
      font-secondary text-[#876E64]  ${
        minimalForm
          ? "hover:bg-beige-secondary/80 hover:text-beige-primary duration-300"
          : "pt-8 pb-20 gap-8 "
      }
      `}
          action={handleSubmit}
        >
          <div className="w-full h-20  flex justify-end items-center ">
            <button
              className="h-full w-full font-secondary cursor-pointer hover:underline text-xl"
              onClick={() => setMinimalForm((prev) => !prev)}
              type="button"
            >
              {minimalForm ? "Expand the form +" : "Minimize the form -"}
            </button>
          </div>
          <div
            className={`${
              minimalForm ? "hidden" : "flex flex-col gap-2 h-full w-full"
            }`}
          >
            <label htmlFor="fullName" className="font-bold">
              First & Last Name
            </label>
            <input
              name="fullName"
              type="text"
              placeholder="e.g. Helena Eagan"
              className="border-b-2 border-beige-secondary w-full h-8 
                    outline-none! placeholder:italic mb-8"
            />
            <label htmlFor="email" className="font-bold">
              Email
            </label>
            <input
              name="email"
              type="text"
              placeholder="e.g. helena123@gmail.com"
              className="border-b-2 border-beige-secondary w-full h-8 
                    outline-none! placeholder:italic mb-8"
            />
            <label htmlFor="phone" className="font-bold">
              Phone Number
            </label>
            <input
              name="phone"
              type="text"
              placeholder="e.g. 1234567890"
              className="border-b-2 border-beige-secondary w-full h-8 
                    outline-none! placeholder:italic mb-8"
            />
            <label htmlFor="companyName" className="font-bold">
              Company Name (if applicable)
            </label>
            <input
              name="companyName"
              type="text"
              placeholder="e.g. Lumon Industries"
              className="border-b-2 border-beige-secondary w-full h-8 
                    outline-none! placeholder:italic mb-8"
            />
            <label htmlFor="serviceType" className="font-bold">
              I am interested in (select one):
            </label>
            <select name="serviceType">
              <option value="FOOD_TRUCK">
                Food Truck Catering (20 ft parking spots and that's it! We will
                take it from there)
              </option>
              <option value="DROP_OFF">
                Drop-Off Catering (Drop off right at your door at the perfect
                temperature)
              </option>
              <option value="FULL_SERVICE">
                Full-Service Drop Off (Buffet Style setup with chefs on hand
                serving food)
              </option>
            </select>
            <label htmlFor="eventDate" className="font-bold">
              Event Date
            </label>
            <input
              name="eventDate"
              type="date"
              placeholder="e.g. 2025-07-20"
              className="border-b-2 border-beige-secondary w-full h-8 
                    outline-none! placeholder:italic mb-8"
            />
            <label htmlFor="eventAddress" className="font-bold">
              Event Address
            </label>
            <input
              name="eventAddress"
              type="text"
              placeholder="e.g. 123 Bay St, Toronto"
              className="border-b-2 border-beige-secondary w-full h-8 
                    outline-none! placeholder:italic mb-8"
            />
            <label htmlFor="startTime" className="font-bold">
              Start Time
            </label>
            <input
              name="startTime"
              type="time"
              className="border-b-2 border-beige-secondary w-full h-8 
                    outline-none! placeholder:italic mb-8"
            />
            <label htmlFor="endTime" className="font-bold">
              End Time
            </label>
            <input
              name="endTime"
              type="time"
              className="border-b-2 border-beige-secondary w-full h-8 
                    outline-none! placeholder:italic mb-8"
            />
            <label htmlFor="budget" className="font-bold">
              Budget (Canadian dollars)
            </label>
            <input
              name="budget"
              type="number"
              placeholder="2000"
              className="border-b-2 border-beige-secondary w-full h-8 
                    outline-none! placeholder:italic mb-8"
            />
            <label htmlFor="notes" className="font-bold">
              Notes
            </label>
            <textarea
              name="notes"
              className="border-2 border-beige-secondary w-full h-40 text-beige-secondary
                    outline-none! placeholder:italic mt-6 p-2"
              placeholder="e.g. We love lobster rolls!"
            />

            <button
              type="submit"
              className="font-primary text-beige-primary bg-[#876E64] text-xl p-4 gap-3 mt-6
                    w-full h-12 flex justify-center items-center rounded-[4rem] cursor-pointer
                    duration-300 hover:bg-beige-primary hover:border  hover:text-[#876E64]"
            >
              Send <FaCheck />
            </button>
          </div>
        </form>
      </section>

      {/* -------------- NEW SECTION 2: INFORMATION / SERVICE TIERS ----------------- */}
      <section className="w-full py-20 px-6 bg-[#111B36] text-beige-primary">
        <div className="max-w-5xl mx-auto flex flex-col gap-16">
          <article className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="lg:w-1/2">
              <h2 className="font-primary text-5xl md:text-7xl uppercase leading-tight">
                Exceptional Seafood <br /> For Every Occasion
              </h2>
            </div>
            <div className="lg:w-1/2 flex flex-col gap-6">
              <p className="font-secondary text-lg md:text-xl text-beige-primary/80 leading-relaxed pl-4 border-l-2 border-beige-secondary">
Since 1992, Buster’s Sea Cove has served as a cornerstone of Toronto’s culinary scene, bringing an unparalleled seafood experience to the city’s most prestigious corporate and private events. Our dedicated catering team prides itself on a bespoke approach, curating sophisticated, dietary-inclusive menus tailored to your unique vision and budget. We provide a comprehensive solution to managing everything from professional setup to expert service, ensuring a seamless execution so you can remain fully present with your guests.       </p>
            </div>
            
          </article>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-beige-primary/10 p-8 rounded-2xl border border-beige-primary/20 backdrop-blur-sm">
              <h3 className="font-primary text-3xl uppercase mb-4 text-beige-secondary">Food Truck</h3>
              <p className="font-secondary text-sm opacity-90">
                Our iconic mobile kitchen brings the street-side experience to your doorstep. 
                Perfect for outdoor festivals, film sets, and large corporate rallies.
              </p>
            </div>
            <div className="bg-beige-primary/10 p-8 rounded-2xl border border-beige-primary/20 backdrop-blur-sm">
              <h3 className="font-primary text-3xl uppercase mb-4 text-beige-secondary">Drop-Off</h3>
              <p className="font-secondary text-sm opacity-90">
                Gourmet seafood delivered at peak temperature. Ideal for office luncheons, 
                house parties, and casual gatherings where quality is paramount.
              </p>
            </div>
            <div className="bg-beige-primary/10 p-8 rounded-2xl border border-beige-primary/20 backdrop-blur-sm">
              <h3 className="font-primary text-3xl uppercase mb-4 text-beige-secondary">Full Service</h3>
              <p className="font-secondary text-sm opacity-90">
                A bespoke buffet-style experience with professional chefs on hand. 
                Full-scale hospitality for weddings and premium corporate galas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="w-full min-h-200 h-full flex flex-col gap-12 py-20 px-6
       items-center "
      >
        <article
          className="w-full max-w-140 h-full flex flex-col gap-6
            text-[#876E64] "
        >
          <h1 className="font-primary uppercase text-6xl">Recent Events</h1>
          <p className="font-secondary w-full border-l-2  pl-4">
            Our expertise extends past catering into full-scale event
            production. Whether creating our own food-driven experiences or
            collaborating on special projects, we prioritize passion and
            consistent quality.
          </p>
        </article>

        <div className="w-full min-h-400 h-full grid grid-cols-1 lg:grid-cols-2 gap-8">
          {companies.map((c, i) => (
            <div
              key={i}
              className={`rounded-2xl bg-cover`}
              style={{ backgroundImage: `url('/EventsGallery/${c.imageUrl}')` }}
            >
              <h1
                className="font-primary uppercase text-white size-full rounded-2xl cursor-pointer
              flex justify-center items-center bg-black/60 duration-300 hover:opacity-0
              text-2xl"
              >
                {c.name}
              </h1>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
