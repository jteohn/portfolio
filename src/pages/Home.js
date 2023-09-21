import Navbar from "../components/Navbar";
import jaelyn from "../assets/jaelyn.jpeg";
import { FiLinkedin, FiGithub, FiMail } from "react-icons/fi";
import { useDarkMode } from "../utils/darkMode";

function Home() {
  const { darkMode } = useDarkMode();
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="App h-max-100vh flex flex-col justify-start">
        <Navbar />
        <div className="flex flex-col flex-grow items-start relative mx-auto pl-20 pr-14 md:mx-48 md:p-0 md:pt-8 lg:mx-56 lg:pt-4 text-grey-400 dark:text-beige-300">
          <div className="mt-32">
            <div className="h-32 w-32 md:h-48 md:w-48 lg:h-60 lg:w-60 flex items-center justify-center relative inset-0 mx-auto -mt-28 mb-3 md:mb-5">
              <div className="h-full w-full rounded-full overflow-hidden border-4 md:border-8 border-white absolute dark:border-beige-400">
                <img
                  src={jaelyn}
                  alt="DP"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div>
              <div className="relative text-4xl z-10 font-bold md:text-6xl lg:text-7xl">
                JAELYN TEO
                <div className="absolute inset-x-0 bottom-0 h-4 bg-white z-[-1] md:h-6 lg:h-7 dark:bg-grey-500" />
              </div>
            </div>
          </div>

          <div className="mt-5 md:mt-8 lg:mt-12">
            <div className="text-left text-xs md:text-lg lg:text-xl lg:w-4/5 lg:pr-4 dark:text-beige-500">
              <strong>Hello, I'm Jaelyn!</strong> My journey has taken an
              exciting turn as I've discovered my passion for coding and
              creating innovation solutions with technology.
              <br />
              <br />
              I've always held a deep appreciation for technology and desire to
              make a positive impact on society. For me, coding isn't just about
              lines and algorithms; it's a means to create meaningful change.
              <br />
              <br />
              If you'd like to know more or connect, I'm always down for coffee!
              Let's grab coffee together ☺
            </div>
          </div>

          <div>
            <div className=" flex mt-10 mb-10 gap-2 md:gap-3 lg:gap-3">
              <a
                href="https://www.linkedin.com/in/jaelynteo/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="h-7 w-7 md:h-10 md:w-10 lg:h-11 lg:w-11 rounded-xl bg-grey-300 flex items-center justify-center hover:bg-white transition duration-300 ease-in-out cursor-pointer dark:bg-grey-500 dark:hover:bg-beige-400">
                  <FiLinkedin className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-grey-200" />
                </div>
              </a>
              <a
                href="https://github.com/jteohn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="h-7 w-7 md:h-10 md:w-10 lg:h-11 lg:w-11 rounded-xl bg-grey-300 flex items-center justify-center hover:bg-white transition duration-300 ease-in-out cursor-pointer dark:bg-grey-500 dark:hover:bg-beige-400">
                  <FiGithub className="mt-0.5 h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-grey-200" />
                </div>
              </a>
              <a
                href="mailto:jteohn@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="h-7 w-7 md:h-10 md:w-10 lg:h-11 lg:w-11 rounded-xl bg-grey-300 flex items-center justify-center hover:bg-white transition duration-300 ease-in-out cursor-pointer dark:bg-grey-500 dark:hover:bg-beige-400">
                  <FiMail className="mt-0.5 h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-grey-200" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
