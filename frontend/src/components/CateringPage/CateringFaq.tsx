import { useState } from "react";

const faqs = [
  {
    question: "What is food truck catering?",
    answer:
      "Food truck catering brings a fully equipped mobile kitchen to your event location. Buster's Sea Cove food truck arrives, sets up, and serves fresh seafood directly to your guests — all you need to provide is a 20 ft parking spot. We handle everything else: cooking, serving, and cleanup.",
  },
  {
    question: "What areas does Buster's Sea Cove serve for food truck catering?",
    answer:
      "We provide food truck catering across Toronto and the Greater Toronto Area, including Mississauga, North York, Scarborough, Etobicoke, Aurora, King City, Markham, Richmond Hill, Vaughan, and Oakville. Contact us for events outside the GTA.",
  },
  {
    question: "How much does food truck catering cost in Toronto?",
    answer:
      "Food truck catering pricing depends on guest count, menu selections, event duration, and travel distance. We work with a wide range of budgets — from intimate office lunches to large corporate events with thousands of guests. Fill out our catering request form above for a custom quote.",
  },
  {
    question: "How far in advance should I book food truck catering?",
    answer:
      "We recommend booking at least 4–6 weeks in advance for most events, and 2–3 months ahead for peak summer dates, weddings, and large corporate events. Popular dates fill quickly, so the sooner you reach out, the better.",
  },
  {
    question: "What types of events can I book food truck catering for?",
    answer:
      "Buster's Sea Cove food truck has catered corporate events, weddings, private parties, golf tournaments, film and TV sets, music festivals, university events, sports tournaments, office lunches, and community events across the GTA.",
  },
  {
    question: "What seafood does the food truck serve?",
    answer:
      "Our food truck menu features fresh seafood including lobster rolls, fish and chips, grilled halibut, calamari, rainbow trout, swordfish, and more. Menus can be customized for your event. View our full menu on the Food Truck menu page.",
  },
  {
    question: "Do you offer catering options other than the food truck?",
    answer:
      "Yes. In addition to food truck catering, we offer drop-off catering (delivered at peak temperature to your door) and full-service catering (buffet-style with chefs on site). All three options use the same fresh, sustainably sourced seafood.",
  },
];

export default function CateringFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-beige-primary py-12 md:py-20 px-6">
      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <p className="font-secondary uppercase tracking-[0.4em] text-xs text-[#876E64]">
            Common Questions
          </p>
          <h2 className="font-primary uppercase text-4xl md:text-6xl text-[#111B36] leading-none">
            Food Truck Catering FAQ
          </h2>
        </div>

        <div className="flex flex-col divide-y divide-[#111B36]/10">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex justify-between items-start gap-4 py-5 text-left cursor-pointer group"
                  aria-expanded={isOpen}
                >
                  <h3 className="font-primary uppercase text-xl md:text-2xl text-[#111B36] leading-snug group-hover:text-[#876E64] transition-colors">
                    {faq.question}
                  </h3>
                  <span className="mt-1 shrink-0 text-[#111B36]/40 text-xl font-light">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <p className="font-secondary text-base text-[#111B36]/70 leading-relaxed pb-5 max-w-3xl">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
