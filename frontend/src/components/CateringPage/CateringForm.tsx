import { FaCheck } from "react-icons/fa6";
import { useState } from "react";
import { submitCateringForm } from "../../services/api";

interface CateringFormInterface {
  minimalForm: boolean;
  setMinimalForm: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function CateringForm({
  minimalForm,
  setMinimalForm,
}: CateringFormInterface) {
  const [submitState, setSubmitState] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  async function handleSubmit(formData: FormData) {
    try {
      setSubmitState("submitting");
      await submitCateringForm(formData);
      setSubmitState("success");
    } catch {
      setSubmitState("error");
    }
  }

  return (
    <section
      className={`w-full min-h-160 h-full bg-[url(/catering-background.svg)] bg-cover px-6
          flex flex-col gap-10 justify-center items-center ${
            minimalForm ? "" : "pt-40 pb-20"
          }
          `}
    >
      <article
        className="w-full max-w-120 h-full flex flex-col gap-4
                text-beige-primary"
      >
        <h1 className="font-primary uppercase text-4xl md:text-5xl">
          Buster's Sea Cove Catering Request Form
        </h1>
        <p className="font-secondary text-sm md:text-base">
          We're thrilled you found us! Please fill out the form below with as
          much detail as possible. Any Corporate Events, Golf Courses, House
          Parties, Weddings, Birthday Parties, Film Sets, and SO much more! We
          cater to it all.
        </p>
      </article>

      <form
        className={`w-full max-w-120 h-full flex flex-col bg-beige-primary px-6
          font-secondary text-[#876E64]  ${
            minimalForm
              ? "hover:bg-beige-secondary/80 hover:text-beige-primary duration-300"
              : "pt-6 pb-14 gap-6 "
          }
          `}
        action={handleSubmit}
      >
        <div className="w-full h-16 flex justify-end items-center ">
          <button
            className="h-full w-full font-secondary cursor-pointer hover:underline text-lg"
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
            id="fullName"
            name="fullName"
            type="text"
            placeholder="e.g. Helena Eagan"
            required
            className="border-b-2 border-beige-secondary w-full h-8
                        outline-none! placeholder:italic mb-8"
          />
          <label htmlFor="email" className="font-bold">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="e.g. helena123@gmail.com"
            required
            className="border-b-2 border-beige-secondary w-full h-8
                        outline-none! placeholder:italic mb-8"
          />
          <label htmlFor="phone" className="font-bold">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="text"
            placeholder="e.g. 1234567890"
            required
            className="border-b-2 border-beige-secondary w-full h-8
                        outline-none! placeholder:italic mb-8"
          />
          <label htmlFor="companyName" className="font-bold">
            Company Name (if applicable)
          </label>
          <input
            id="companyName"
            name="companyName"
            type="text"
            placeholder="e.g. Lumon Industries"
            className="border-b-2 border-beige-secondary w-full h-8
                        outline-none! placeholder:italic mb-8"
          />
          <label htmlFor="serviceType" className="font-bold">
            I am interested in (select one):
          </label>
          <select id="serviceType" name="serviceType">
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
            id="eventDate"
            name="eventDate"
            type="date"
            placeholder="e.g. 2025-07-20"
            required
            className="border-b-2 border-beige-secondary w-full h-8
                        outline-none! placeholder:italic mb-8"
          />
          <label htmlFor="eventAddress" className="font-bold">
            Event Address
          </label>
          <input
            id="eventAddress"
            name="eventAddress"
            type="text"
            placeholder="e.g. 123 Bay St, Toronto"
            required
            className="border-b-2 border-beige-secondary w-full h-8
                        outline-none! placeholder:italic mb-8"
          />
          <label htmlFor="startTime" className="font-bold">
            Start Time
          </label>
          <input
            id="startTime"
            name="startTime"
            type="time"
            className="border-b-2 border-beige-secondary w-full h-8
                        outline-none! placeholder:italic mb-8"
          />
          <label htmlFor="endTime" className="font-bold">
            End Time
          </label>
          <input
            id="endTime"
            name="endTime"
            type="time"
            className="border-b-2 border-beige-secondary w-full h-8
                        outline-none! placeholder:italic mb-8"
          />
          <label htmlFor="budget" className="font-bold">
            Budget (Canadian dollars)
          </label>
          <input
            id="budget"
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
            id="notes"
            name="notes"
            className="border-2 border-beige-secondary w-full h-32 text-beige-secondary
                        outline-none! placeholder:italic mt-6 p-2"
            placeholder="e.g. We love lobster rolls!"
          />
          <div className="hidden" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input
              tabIndex={-1}
              autoComplete="off"
              name="website"
              type="text"
            />
          </div>

          <button
            type="submit"
            disabled={submitState === "submitting"}
            className="font-primary text-beige-primary bg-[#876E64] text-lg p-4 gap-3 mt-6
                        w-full h-12 flex justify-center items-center rounded-[4rem] cursor-pointer
                        duration-300 hover:bg-beige-primary hover:border  hover:text-[#876E64]"
          >
            {submitState === "submitting" ? "Sending..." : "Send"} <FaCheck />
          </button>
          {submitState === "success" && (
            <p className="text-sm text-green-700 font-secondary text-center">
              Catering request sent successfully.
            </p>
          )}
          {submitState === "error" && (
            <p className="text-sm text-red-700 font-secondary text-center">
              Something went wrong. Please try again.
            </p>
          )}
        </div>
      </form>
    </section>
  );
}
