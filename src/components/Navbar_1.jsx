import React, { useState } from "react";

const Navbar_1 = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav
            className="
        w-full max-w-full
        px-[clamp(0.8rem,2vw,1.8rem)]
        md:px-[clamp(1rem,5vw,4rem)]
        py-3
        bg-[#10001e]
        flex justify-between items-center
        relative z-50
        box-border
      "
        >
            <a
                href="#"
                className="
          text-[#e1d5f9]
          font-bold
          text-[clamp(1rem,2.5vw,2rem)]
          tracking-wide
          no-underline
          select-none
        "
                aria-label="Brand"
            >
                {/* Brand content (text/logo) can be placed here */}
                {/*Brand*/}
            </a>

            {/* Hamburger button (hidden on md and above) */}
            <button
                aria-label="Toggle Menu"
                onClick={() => setMenuOpen(!menuOpen)}
                className="
          md:hidden
          flex flex-col gap-1.5
          w-9 h-9 p-1.5
          justify-center items-center
          bg-transparent border-none cursor-pointer
          focus:outline-none
        "
            >
        <span
            className={`block w-6 h-[3px] bg-white rounded transition-all ${
                menuOpen ? "rotate-45 translate-y-[6px]" : ""
            }`}
        />
                <span
                    className={`block w-6 h-[3px] bg-white rounded transition-all ${
                        menuOpen ? "opacity-0" : "opacity-100"
                    }`}
                />
                <span
                    className={`block w-6 h-[3px] bg-white rounded transition-all ${
                        menuOpen ? "-rotate-45 -translate-y-[6px]" : ""
                    }`}
                />
            </button>

            {/* Menu Wrapper */}
            <div
                className={`
          md:flex md:items-center
          gap-8
          transition-all duration-300 ease-in-out
          ${
                    menuOpen
                        ? "absolute top-full left-0 w-full flex flex-col bg-[#16072d] p-6 pt-8 z-40 md:static md:flex-row md:bg-transparent md:p-0"
                        : "hidden md:flex"
                }
        `}
            >
                {/* Navigation Links */}
                <ul
                    className="
            list-none
            flex flex-col md:flex-row
            gap-[clamp(0.8rem,2vw,3rem)]
            m-0 p-0
            w-full md:w-auto
          "
                >
                    {[
                        { name: "Home", href: "#" },
                        { name: "About Us", href: "#" },
                        { name: "Custom Service", href: "#" },
                        { name: "Pricing", href: "#" },
                        { name: "Contact", href: "#" },
                    ].map(({ name, href }) => (
                        <li key={name}>
                            <a
                                href={href}
                                className="
                  block
                  text-[#e1d5f9]
                  font-semibold
                  uppercase
                  text-[clamp(0.78rem,1vw,1rem)]
                  rounded-md
                  tracking-wide
                  px-4 py-2
                  transition-colors duration-200
                  hover:bg-[#1d0537]
                  hover:text-[#d4adfc]
                  focus:outline-none
                  focus:bg-[#1d0537]
                  focus:text-[#d4adfc]
                "
                            >
                                {name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Buttons */}
                <div
                    className="
            flex flex-col md:flex-row
            gap-3 md:gap-4
            w-full md:w-auto
            ml-0 md:ml-2
          "
                >
                    <button
                        type="button"
                        className="
              w-full md:w-auto
              px-5 py-2
              border border-white
              rounded-md
              font-semibold
              uppercase
              text-[clamp(0.72rem,1vw,1rem)]
              bg-transparent
              text-white
              cursor-pointer
              transition-opacity duration-200
              hover:opacity-80
              focus:outline-none
              focus:ring-2 focus:ring-[#a879ff] focus:ring-offset-1
            "
                    >
                        Log In
                    </button>
                    <button
                        type="button"
                        className="
              w-full md:w-auto
              px-5 py-2
              rounded-md
              font-semibold
              uppercase
              text-[clamp(0.72rem,1vw,1rem)]
              bg-gradient-to-r from-[#d946ef] to-[#9333ea]
              border-none
              text-white
              cursor-pointer
              transition-opacity duration-200
              hover:opacity-80
              focus:outline-none
              focus:ring-2 focus:ring-[#a879ff] focus:ring-offset-1
            "
                    >
                        Sign Up
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar_1;
