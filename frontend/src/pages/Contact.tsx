import { FaRegPaperPlane } from "react-icons/fa6";
import { MdOutlineVerified } from "react-icons/md";
import {Link} from "react-router-dom"

export default function Contact() {
    function handleSubmit(formData:FormData){
        const input = Object.fromEntries(formData.entries());

        console.log(input)
    }
  return (
    <main
      className="bg-blue-primary w-screen min-h-screen h-full px-8 pt-40 pb-20
        flex flex-col gap-20 justify-center items-center"
    >
      {/** ------ Contact Card ------ */}
      <div className="bg-beige-primary w-full md:w-150 min-h-90 h-full p-6">
        <h1 className="font-primary uppercase text-blue-primary text-6xl">
          let's get in touch
        </h1>
        <form className="flex flex-col md:flex-row gap-10" action={handleSubmit}>
          {/** form info */}
          <div
            className="h-90 md:h-full w-full md:w-90
            flex flex-col gap-4 pt-8 font-secondary"
          >
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="border-b-2 border-beige-secondary w-full h-8 text-beige-secondary
                    outline-none! placeholder:italic "
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="border-b-2 border-beige-secondary w-full h-8 text-beige-secondary
                    outline-none! placeholder:italic"
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone"
              className="border-b-2 border-beige-secondary w-full h-8 text-beige-secondary
                    outline-none! placeholder:italic"
            />
            <textarea
              name="message"
              className="border-2 border-beige-secondary w-full h-40 text-beige-secondary
                    outline-none! placeholder:italic mt-6 p-2"
              placeholder="Enter your message here..."
            />
          </div>

          {/** submit form */}
          <div className="flex flex-col w-full h-20 md:h-90 md:w-40 justify-between ">
            <MdOutlineVerified className="hidden md:block w-full h-full text-beige-secondary/20 " />
            <button
              type="submit"
              className="font-primary text-beige-primary bg-blue-primary text-xl p-4 gap-3
            w-full md:w-40 h-12 flex justify-center items-center rounded-[4rem] cursor-pointer
            duration-300 hover:bg-beige-primary hover:border  hover:text-blue-primary"
            >
              Send <FaRegPaperPlane />
            </button>
          </div>
        </form>
      </div>

      {/** ------ Info Card ------ */}
      <div
        className="bg-blue-primary text-beige-primary border-2 w-full md:w-150 h-full p-12
      flex flex-col md:flex-row justify-between"
      >
        <section className="flex flex-col max-w-50 justify-around gap-6 size-full ">
          <h1 className="font-primary uppercase text-2xl">Address</h1>
          <div className="size-full flex flex-col font-secondary text-sm">
            <h3 className="font-bold">Buster's Commerce Court</h3>
            <p>199 Bay St. SUITE C-150 Toronto, ON M5L 1E9</p>
          </div>
          <div className="size-full flex flex-col font-secondary text-sm">
            <h3 className="font-bold">Buster's Food Truck</h3>
            <Link to="schedule">Cick to view our schedule</Link>
          </div>
        </section>

        <section className="flex flex-col max-w-50 justify-around gap-6 size-full ">
          <h1 className="font-primary uppercase text-2xl">Contact</h1>
          <div className="size-full flex flex-col font-secondary text-sm">
            <h3 className="font-bold">Phone</h3>
            <p>416-319-2957</p>
          </div>
          <div className="size-full flex flex-col font-secondary text-sm">
            <h3 className="font-bold">Email</h3>
            <p>bustersheadoffice@gmail.com</p>
          </div>
        </section>
      </div>
    </main>
  );
}
