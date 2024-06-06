import ServiceTitle from "@/components/ourServices/ServiceTitle";
import "../style/globals.css";
export default function ContactUs() {
  return (
    <>
      <section style={{ backgroundColor: "rgb(255,244,236)" }}>
        <div class="container px-6 py-12 mx-auto">
          <div>
            <h1
              class="font-medium text-5xl mt-10"
              style={{ color: "rgb(225,150,83)" }}
            >
              Contact us
            </h1>

            <h1 class="mt-2 text-2xl font-semibold text-black md:text-3xl">
              Get in touch
            </h1>

            <p class="mt-3 text-gray-500 dark:text-gray-400">
              Our friendly team would love to hear from you.
            </p>
          </div>

          <div class="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3">
            <div class="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-1">
              <div>
                <span
                  class="inline-block p-3 rounded-full"
                  style={{
                    backgroundColor: "rgb(225,150,83)",
                    color: "white",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </span>

                <h2 class="mt-4 text-base font-bold text-black">Email</h2>
                <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Our friendly team is here to help.
                </p>
                <p class="mt-2 text-sm text-blue-500 dark:text-blue-400">
                  info@racloop.com
                </p>
              </div>

              <div>
                <span
                  class="inline-block p-3 rounded-full"
                  style={{
                    backgroundColor: "rgb(225,150,83)",
                    color: "white",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </span>

                <h2 class="mt-4 text-base font-bold text-black">Office</h2>
                <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Come say hello at our office HQ.
                </p>
                <p class="mt-2 text-sm text-black">Gurugram</p>
                <p class="mt-2 text-sm text-blue-500 dark:text-blue-400">
                  B-18, Second Floor, Institutional Area, <br />
                  Sector 32, Gurugram,
                  <br /> Haryana 122001
                </p>
                <p class="mt-2 text-sm text-black">Chandigarh</p>
                <p class="mt-2 text-sm text-blue-500 dark:text-blue-400">
                  Unit 42, Level 4, Sushma Infinium, <br />
                  Chandigarh-Ambala Highway, Zirakpur, <br />
                  Punjab - 140603, India
                </p>
              </div>

              <div>
                <span
                  class="inline-block p-3 rounded-full"
                  style={{
                    backgroundColor: "rgb(225,150,83)",
                    color: "white",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </span>

                <h2 class="mt-4 text-base font-bold text-black">Phone</h2>
                <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Mon-Fri from 9am to 7pm.
                </p>
                <p class="mt-2 text-sm text-blue-500 dark:text-blue-400">
                  +91 82647 14180
                </p>
              </div>
            </div>

            <div class="lg:col-span-2 h-96 lg:h-auto flex-col justify-center items-center">
              <iframe
                width="100%"
                height="50%"
                frameborder="0"
                title="map"
                marginheight="0"
                marginwidth="0"
                scrolling="no"
                className="p-1"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.125354110025!2d77.03998117555639!3d28.445637375767316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d23c81cebe325%3A0xc62914e0e0f2fd3f!2sRacloop%20Technologies%20private%20limited!5e0!3m2!1sen!2sin!4v1716887323761!5m2!1sen!2sin"
              ></iframe>
              <iframe
                width="100%"
                height="50%"
                frameborder="0"
                title="map"
                marginheight="0"
                marginwidth="0"
                scrolling="no"
                className="p-1"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3432.846007316873!2d76.82005538332956!3d30.63829720921503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feb302c5c8251%3A0xfc988d718f090a61!2sRacloop%20Technologies%20Private%20Limited!5e0!3m2!1sen!2sin!4v1716888227761!5m2!1sen!2sin"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <section
        class="bg-white dark:bg-gray-900"
        style={{ backgroundColor: "rgb(255,244,236)" }}
      >
        <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <p class="mb-8 lg:mb-16 font-bold text-center text-black sm:text-xl">
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </p>
          <form action="#" class="space-y-8">
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-black"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                class="shadow-sm bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                style={{ backgroundColor: "rgb(225,150,83)", color: "black" }}
                required
              />
            </div>
            <div>
              <label
                for="subject"
                class="block mb-2 text-sm font-medium text-black"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                class="block p-3 w-full text-sm text-black bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                style={{ backgroundColor: "rgb(225,150,83)", color: "black" }}
                required
              />
            </div>
            <div class="sm:col-span-2">
              <label
                for="message"
                class="block mb-2 text-sm font-medium text-black"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                class="block p-2.5 w-full text-sm text-black bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                style={{ backgroundColor: "rgb(225,150,83)", color: "black" }}
              ></textarea>
            </div>
            <button
              type="submit"
              class="py-3 px-5 text-sm font-medium text-center text-black rounded-lg sm:w-fit focus:ring-4 focus:outline-none focus:ring-primary-300 border-black"
              style={{
                backgroundColor: "rgb(225,150,83)",
                cursor: "pointer",
                border: "1px solid black",
              }}
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
