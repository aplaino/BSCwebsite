interface ScrollText {
  text: string;
  rep: number;
}
export default function Scroll({ text, rep }: ScrollText) {
  return (
    <section
      className="w-full h-30 bg-black overflow-hidden 
      font-primary text-beige-primary/10 uppercase text-4xl md:text-8xl flex shrink-0 gap-8"
    >
      <ul
        className="flex shrink-0 justify-center items-center gap-10 uppercase
        animate-infinite-scroll"
      >
        {[...Array(rep)].map((k, index) => (
          <li key={index}>{text}</li>
        ))}
      </ul>
      <ul
        className="flex shrink-0 justify-center items-center gap-10 uppercase
        animate-infinite-scroll"
      >
        {[...Array(rep)].map((k, index) => (
          <li key={index}>{text}</li>
        ))}
      </ul>
    </section>
  );
}
