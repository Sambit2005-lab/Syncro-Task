import React, { useState } from 'react';

const sections = ['Product', 'Support', 'Resources', 'About'];
const links = [
    'What’s New',
    'Design',
    'Collaboration',
    'Prototyping',
    'Developer Handoff',
    'All Features',
];

const bgUrl = '../src/assets/contact_bkg1.svg'; // Change this to your actual asset path

const Contact = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div
            className="min-h-screen w-full font-poppins bg-cover bg-center"
            style={{ backgroundImage: `url(${bgUrl})` }}
        >
            {/* ==================== NAVBAR ==================== */}
            <nav className="w-full max-w-full px-4 md:px-10 py-4 flex items-center justify-between relative z-50">
                <a
                    href="#"
                    className="font-bold text-[clamp(1rem,2.5vw,2rem)] tracking-wide text-[#e1d5f9]"
                >
                    {/* Brand Logo/Name */}
                </a>
                {/* Hamburger */}
                <button
                    className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px] rounded focus:outline-none"
                    aria-label="Toggle Menu"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span className="block w-7 h-[3px] bg-white rounded transition-all"></span>
                    <span className="block w-7 h-[3px] bg-white rounded transition-all"></span>
                    <span className="block w-7 h-[3px] bg-white rounded transition-all"></span>
                </button>
                {/* Desktop/Menu */}
                <div
                    className={`
            flex items-center gap-8 transition-all
            ${menuOpen ? 'fixed inset-0 bg-[#16072d] flex-col pt-24 px-4 z-40 md:static md:bg-transparent md:flex-row md:pt-0 md:px-0'
                        : 'hidden md:flex'}
          `}
                >
                    {/* Links */}
                    <ul className="flex flex-col md:flex-row gap-6 md:gap-8 mb-6 md:mb-0 w-full md:w-auto">
                        <li>
                            <a
                                href="#"
                                className="block uppercase font-semibold text-[clamp(0.78rem,1vw,1rem)] py-2 px-4 rounded text-[#e1d5f9] hover:bg-[#1d0537] hover:text-[#d4adfc] transition"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block uppercase font-semibold text-[clamp(0.78rem,1vw,1rem)] py-2 px-4 rounded text-[#e1d5f9] hover:bg-[#1d0537] hover:text-[#d4adfc] transition"
                            >
                                About Us
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block uppercase font-semibold text-[clamp(0.78rem,1vw,1rem)] py-2 px-4 rounded text-[#e1d5f9] hover:bg-[#1d0537] hover:text-[#d4adfc] transition"
                            >
                                Custom Service
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block uppercase font-semibold text-[clamp(0.78rem,1vw,1rem)] py-2 px-4 rounded text-[#e1d5f9] hover:bg-[#1d0537] hover:text-[#d4adfc] transition"
                            >
                                Pricing
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block uppercase font-semibold text-[clamp(0.78rem,1vw,1rem)] py-2 px-4 rounded text-[#e1d5f9] hover:bg-[#1d0537] hover:text-[#d4adfc] transition"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                    {/* Buttons */}
                    <div className="flex flex-col md:flex-row gap-3 md:gap-2 w-full md:w-auto">
                        <button className="border border-white text-white font-semibold uppercase rounded-md px-5 py-2 text-[clamp(0.72rem,1vw,1rem)] bg-transparent hover:opacity-85 transition">
                            Log In
                        </button>
                        <button className="bg-gradient-to-r from-fuchsia-500 to-purple-700 text-white font-semibold uppercase rounded-md px-5 py-2 text-[clamp(0.72rem,1vw,1rem)] hover:opacity-85 transition mt-1 md:mt-0 border-none">
                            Sign Up
                        </button>
                    </div>
                </div>
            </nav>

            {/* ==================== REQUEST SERVICE ==================== */}
            <section className="flex flex-col md:flex-row justify-between gap-10 md:gap-12 py-16 px-4 md:px-10 text-white">
                <div className="flex-1 flex flex-col justify-center min-w-[220px] mb-8 md:mb-0">
                    <h1 className="font-extrabold text-3xl md:text-[2.8rem] leading-tight">
                        Request
                    </h1>
                    <h1 className="font-extrabold text-3xl md:text-[2.8rem] leading-tight">
                        Custom Service
                    </h1>
                </div>

                <form
                    className="flex-1 flex flex-col gap-6 max-w-2xl min-w-[220px] w-full px-4 py-8 rounded-2xl backdrop-blur-lg bg-gradient-to-br from-[#21263b88] via-[#21263b88] to-[#191b2c88]"
                    onSubmit={e => e.preventDefault()}
                >
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium">Service Title</label>
                        <input
                            type="text"
                            className="bg-gradient-to-b from-[#1C2031] to-[#1B1F30] border border-white/25 text-white rounded-lg px-4 py-3 text-base focus:outline-none"
                            placeholder="Enter service title"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium">Budget Range</label>
                        <input
                            type="text"
                            className="bg-gradient-to-b from-[#1C2031] to-[#1B1F30] border border-white/25 text-white rounded-lg px-4 py-3 text-base focus:outline-none"
                            placeholder="Enter your budget range"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium">Description</label>
                        <textarea
                            className="bg-gradient-to-b from-[#1C2031] to-[#1B1F30] border border-white/25 text-white rounded-lg px-4 py-3 text-base focus:outline-none resize-none min-h-[120px]"
                            placeholder="Enter short description"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium">Upload file</label>
                        <input
                            type="file"
                            className="text-white file:bg-[#2c2c35] file:text-white file:rounded-md file:px-4 file:py-2 file:mr-2 file:border-0 file:cursor-pointer
                 file:hover:bg-[#444] text-sm"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-fit bg-gradient-to-b from-[#AF4FF6] to-[#690CAD] border border-fuchsia-300 text-white font-semibold rounded-2xl px-8 py-3 text-base mt-2 hover:from-[#d76bfb] hover:to-[#b26afe] transition"
                    >
                        Submit Request
                    </button>
                </form>
            </section>

            {/* ==================== FOOTER ==================== */}
            <footer className="w-full bg-transparent text-white px-4 md:px-10 pt-16 pb-8">
                {/* Footer Links */}
                <div className="flex flex-wrap gap-10 justify-between pb-8">
                    {sections.map((section, idx) => (
                        <div key={idx} className="min-w-[130px]">
                            <h3 className="text-sm font-medium text-gray-300 mb-4">// {section}</h3>
                            <ul className="space-y-2">
                                {links.map((link, i) => (
                                    <li
                                        key={i}
                                        className="text-base text-white hover:text-gray-400 cursor-pointer transition"
                                    >
                                        {link}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <hr className="border-t border-white/15 my-8" />

                {/* Newsletter */}
                <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between gap-10 md:gap-16 mb-8">
                    <div className="max-w-md">
                        <h4 className="text-base font-medium mb-1">Never miss an update</h4>
                        <p className="text-sm text-gray-300">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, dolor?
                        </p>
                    </div>
                    <div className="min-w-[260px] flex flex-col gap-3 w-full max-w-sm">
                        <div className="flex gap-2">
                            <input
                                type="email"
                                className="px-4 py-3 rounded-lg bg-white/10 text-white flex-1 text-base outline-none"
                                placeholder="example@gmail.com"
                            />
                            <button className="bg-white text-black font-medium px-5 py-3 rounded-lg hover:bg-gray-300 transition">
                                Join
                            </button>
                        </div>
                        <label className="flex items-center gap-2 text-sm text-gray-300 cursor-pointer select-none">
                            <input type="checkbox" className="accent-fuchsia-700 w-4 h-4" />
                            I agree to receive emails
                        </label>
                    </div>
                </div>

                {/* Legal */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-center text-sm text-gray-400 gap-3">
                    <p>
                        ©2025 by <span className="text-white font-semibold">Code-X-Novas</span>
                    </p>
                    <div className="flex gap-8 mt-2 md:mt-0">
                        <a href="#" className="hover:text-white transition">
                            Privacy Policy
                        </a>
                        <a href="#" className="hover:text-white transition">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Contact;
