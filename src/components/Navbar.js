import React from "react";
import { useNavigate } from "react-router-dom";
import { BiSolidMoon, BiMoon } from "react-icons/bi";
import { useDarkMode } from "../utils/darkMode";

function Navbar() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const navigate = useNavigate();

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="flex gap-4 justify-end m-8 pr-2 lg:pr-10 text-grey-200 font-semibold items-center cursor-pointer">
        {darkMode ? (
          <div className="rounded-full p-2 hover:bg-grey-300  dark:hover:bg-beige-400 transition duration-300 ease-in-out">
            <BiSolidMoon
              className="w-5 h-5 fill-beige-200"
              onClick={toggleDarkMode}
            />
          </div>
        ) : (
          <div className="rounded-full p-2 hover:bg-grey-300 transition duration-300 ease-in-out">
            <BiMoon className="w-5 h-5" onClick={toggleDarkMode} />
          </div>
        )}

        <div
          className="hover:text-grey-400 transition duration-250 ease-in-out dark:text-beige-200 dark:hover:text-beige-400"
          onClick={() => navigate("/portfolio")}
        >
          HOME
        </div>

        <div
          className="hover:text-grey-400 transition duration-250 ease-in-out dark:text-beige-200 dark:hover:text-beige-400"
          onClick={() => navigate("/portfolio/projects")}
        >
          PORTFOLIO
        </div>
      </div>
    </div>
  );
}
export default Navbar;
