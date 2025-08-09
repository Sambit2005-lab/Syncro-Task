import React, { useState } from "react";
import { IoAddOutline, IoRemoveOutline } from "react-icons/io5";
import sampleImg from "/src/vite.svg"; // adjust relative to your project structure

const faqData = [
    {
        question: "How does AI convert text to video, automatically?",
        answer:
            "It enables us to focus more on content rather than polishing animations manually. Thanks to the Figma plugin, workflow is smoother.",
        image: sampleImg,
    },
    {
        question: "What tech powers the AI video generator?",
        answer:
            "AI uses deep learning and text-to-scene tools to create animations based on your input.",
        image: sampleImg,
    },
    {
        question: "Can I customize the generated videos?",
        answer:
            "Yes, you can adjust scenes, characters, and voiceovers using our intuitive editor.",
        image: sampleImg,
    },
    {
        question: "Is this suitable for marketing or education?",
        answer:
            "Absolutely! The platform supports templates for both educational and promotional use cases.",
        image: sampleImg,
    },
];

const sections = ["Product", "Support", "Resources", "About"];
const links = [
    "What’s New",
    "Design",
    "Collaboration",
    "Prototyping",
    "Developer Handoff",
    "All Features",
];

const FaqFooter = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div
            className="py-16 px-10 bg-cover bg-center"
            style={{ backgroundImage: "url('../src/assets/faq_footer_bkg.png')" }}
        >
            {/* Heading Block */}
            <div className="flex items-center mb-9 w-fit">
                <h2 className="text-white text-[3.5rem] font-bold mr-8 leading-[1.15] font-inter">
                    FAQ
                </h2>
                <div className="flex flex-col justify-center gap-4 mt-8">
                    <div className="w-[100px] h-[3px] rounded bg-[#9333ea]" />
                    <div className="w-[60px] h-[3px] rounded bg-[#9333ea]" />
                </div>
            </div>

            {/* FAQ Accordion */}
            <div className="flex flex-col gap-6">
                {faqData.map((faq, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-md overflow-hidden relative transition-all ease-in-out"
                    >
                        {activeIndex !== index ? (
                            // Collapsed state
                            <div
                                className="flex justify-between items-center p-4 cursor-pointer font-semibold text-base text-black bg-gray-100"
                                onClick={() => toggleAccordion(index)}
                                aria-expanded={activeIndex === index}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter" || e.key === " ") toggleAccordion(index);
                                }}
                            >
                                <span>{faq.question}</span>
                                <span
                                    className="w-9 h-9 flex-shrink-0 flex justify-center items-center border-2 border-[#7028e4]
                  bg-white text-[#7028e4] rounded-full text-xl
                  transition-transform hover:scale-110 shadow-md shadow-[#7028e4]/50"
                                    aria-label="Expand Answer"
                                >
                  <IoAddOutline />
                </span>
                            </div>
                        ) : (
                            // Expanded state (with absolute top-right minus button)
                            <div className="flex flex-wrap items-center gap-6 p-6 text-white bg-gradient-to-tr from-pink-400 via-purple-700 to-purple-900 relative">
                                <img
                                    src={faq.image}
                                    alt="FAQ visual"
                                    className="object-contain rounded-lg flex-shrink-0 w-[200px] h-auto"
                                />
                                <div className="flex-1 min-w-[220px]">
                                    <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                                    <p className="text-[0.95rem] leading-relaxed text-gray-200">{faq.answer}</p>
                                </div>
                                <span
                                    onClick={() => toggleAccordion(index)}
                                    className="absolute top-4 right-4 w-9 h-9 flex-shrink-0 flex justify-center items-center rounded-full
                  text-2xl  cursor-pointer hover:bg-white/20"
                                    aria-label="Collapse Answer"
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter" || e.key === " ") toggleAccordion(index);
                                    }}
                                >
                  <IoRemoveOutline />
                </span>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Footer */}
            <footer className="mt-12 text-white">
                <div className="flex flex-wrap justify-between gap-8 mb-8">
                    {sections.map((section, idx) => (
                        <div
                            key={idx}
                            className="min-w-[180px] flex-1 max-w-[220px] flex flex-col"
                        >
                            <h3 className="text-yellow-400 text-lg mb-4">// {section}</h3>
                            <ul className="list-none p-0 m-0 space-y-2">
                                {links.map((link, i) => (
                                    <li
                                        key={i}
                                        className="text-base cursor-pointer hover:text-yellow-400 transition-colors"
                                    >
                                        {link}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <hr className="border-t border-gray-800 mb-8" />

                <div className="flex flex-wrap justify-between items-center gap-8">
                    <div className="flex-1 min-w-[280px]">
                        <h4 className="text-xl mb-2">Never miss an update</h4>
                        <p className="text-gray-400 text-base max-w-md">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
                            dolor?
                        </p>
                    </div>

                    <div className="flex-1 min-w-[280px] max-w-md flex flex-col gap-3 w-full">
                        <form className="flex gap-2 w-full max-w-md">
                            <input
                                type="email"
                                placeholder="example@gmail.com"
                                className="flex-grow rounded-l-md px-3 py-2 bg-white/10 text-white text-sm focus:outline-none"
                            />
                            <button
                                type="submit"
                                className="bg-yellow-400 text-black px-5 py-2 rounded-r-md font-semibold text-sm hover:bg-yellow-300 transition"
                            >
                                Join
                            </button>
                        </form>
                        <label className="flex items-center gap-2 text-sm text-gray-300 cursor-pointer select-none">
                            <input
                                type="checkbox"
                                className="accent-yellow-400 w-4 h-4 cursor-pointer"
                            />
                            I agree to receive emails
                        </label>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm gap-4 border-t border-gray-900 pt-6 mt-8 flex-wrap max-w-6xl mx-auto">
                    <p>
                        ©2025 by <span className="text-yellow-400 font-semibold">Code-X-Novas</span>
                    </p>
                    <div className="flex gap-4 flex-wrap">
                        <a href="#" className="hover:text-yellow-400 transition">
                            Privacy Policy
                        </a>
                        <a href="#" className="hover:text-yellow-400 transition">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default FaqFooter;
