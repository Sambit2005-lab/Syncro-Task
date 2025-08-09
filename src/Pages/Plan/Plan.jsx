import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import FaqFooter from "../../components/faq_footer.jsx";

const plans = [
    {
        title: "Basic Plan",
        price: "$29/month",
        label: "Start Free Trial",
        features: [
            "Unlimited monthly emails",
            "3 seats",
            "Customer user permission",
            "Unlimited audience",
            "Unlimited website",
            "Email support 24/7 priority",
        ],
        highlight: false,
    },
    {
        title: "Popular Plan",
        price: "$124/month",
        label: "Start 7-days Free Trial",
        features: [
            "Unlimited monthly emails",
            "3 seats",
            "Customer user permission",
            "Unlimited audience",
            "Unlimited website",
            "Email support 24/7 priority",
        ],
        highlight: true,
    },
    {
        title: "Pro Plan",
        price: "$299/month",
        label: "Start Free Trial",
        features: [
            "Unlimited monthly emails",
            "3 seats",
            "Customer user permission",
            "Unlimited audience",
            "Unlimited website",
            "Email support 24/7 priority",
        ],
        highlight: false,
    },
];

const services = [
    { name: "Resume", market: "$25 - $50", ai: "$25 - $50", ours: "$25 - $50" },
    { name: "Pitch Deck", market: "$25 - $50", ai: "$25 - $50", ours: "$25 - $50" },
    { name: "Proofreading", market: "$25 - $50", ai: "$25 - $50", ours: "$25 - $50" },
    { name: "Research Help", market: "$25 - $50", ai: "$25 - $50", ours: "$25 - $50" },
    { name: "Article Draft", market: "$25 - $50", ai: "$25 - $50", ours: "$25 - $50" },
];

const Plan = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <div className="min-h-screen font-poppins text-white bg-[url('/src/assets/plan_bkg.svg')] bg-no-repeat bg-center bg-contain min-h-[600px] w-full">
                <div className="bg-[url('/src/assets/plan_bkg.svg')] bg-repeat bg-center bg-contain min-h-[600px] w-full">

                    {/* ===== Navbar from Navbar_1 ===== */}
                    <nav
                        className="
              w-full max-w-full
              px-[clamp(0.8rem,2vw,1.8rem)]
              md:px-[clamp(1rem,5vw,4rem)]
              py-3
              pt-7
              flex justify-between items-center
              relative z-50
              box-border
            "
                    >
                        <Link
                            to="/"
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
                            {/* Brand */}
                        </Link>

                        {/* Hamburger */}
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

                        {/* Menu */}
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
                                    { label: "Home", path: "/" },
                                    { label: "About Us", path: "/about_us" },
                                    { label: "Custom Service", path: "/custom-service" },
                                    { label: "Pricing", path: "/pricing" },
                                    { label: "Contact", path: "/contact" },
                                ].map((item, idx) => (
                                    <li key={idx}>
                                        <Link
                                            to={item.path}
                                            className="
                        block text-[#e1d5f9] font-semibold uppercase
                        text-[clamp(0.78rem,1vw,1rem)] rounded-md tracking-wide
                        px-4 py-2 transition-colors duration-200
                        hover:bg-[#1d0537] hover:text-[#d4adfc]
                        focus:outline-none focus:bg-[#1d0537] focus:text-[#d4adfc]
                      "
                                            onClick={() => setMenuOpen(false)}
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                            <div
                                className="
                  flex flex-col md:flex-row
                  gap-3 md:gap-4
                  w-full md:w-auto
                  ml-0 md:ml-2
                "
                            >
                                <Link
                                    to="/login"
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
                    text-center
                  "
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Log In
                                </Link>
                                <Link
                                    to="/sign_up"
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
                    text-center
                  "
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Sign Up
                                </Link>
                            </div>
                        </div>
                    </nav>



                    {/* Bundles Section */}
                    <section className="text-center px-4 sm:px-10 md:px-20 py-16 bg-transparent">
                        <h2 className="text-4xl font-bold mb-2">
              <span className="bg-gradient-to-r from-white to-[#bbbbff] bg-clip-text text-transparent">
                Affordable Scalable Plans
              </span>
                        </h2>
                        <p className="text-gray-300 mb-8 text-lg">
                            Get more done with AI + Human support
                        </p>
                        <h3 className="text-4xl font-semibold mb-6 text-left max-w-6xl mx-auto">
                            Bundles
                        </h3>
                        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
                            {plans.map((plan, idx) => (
                                <div
                                    key={idx}
                                    className={`bg-white/5 border border-white/10 rounded-2xl p-8 text-white shadow-[0_0_30px_rgba(255,255,255,0.05)] backdrop-blur-xl max-w-xs flex-shrink-0 transition-transform hover:-translate-y-1 ${
                                        plan.highlight
                                            ? "bg-purple-900/15 border-purple-400/30 backdrop-blur-[12px]"
                                            : ""
                                    }`}
                                >
                                    <div
                                        className={`inline-block mb-4 px-3 py-1.5 rounded-md text-sm font-semibold ${
                                            plan.highlight ? "bg-purple-900 text-white" : "bg-gray-700"
                                        }`}
                                    >
                                        {plan.title}
                                    </div>
                                    <h3 className="text-3xl font-bold mb-2">{plan.price}</h3>
                                    <p className="text-gray-400 mb-6">
                                        Perfect for marketers / scale up business
                                    </p>
                                    <ul className="text-left mb-6 space-y-2 text-gray-300 text-sm">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-2">
                                                <FaCheck className="text-purple-400 text-sm flex-shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <button
                                        className={`w-full py-3 rounded-full font-semibold transition-colors ${
                                            plan.highlight
                                                ? "bg-purple-600 text-white hover:bg-white hover:text-purple-700"
                                                : "bg-transparent border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white"
                                        }`}
                                    >
                                        {plan.label}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Service Table */}
                    <section className="text-white text-center px-4 sm:px-10 md:px-20 py-16 bg-transparent">
                        <h2 className="text-4xl font-bold mb-12 max-w-6xl mx-auto">
                            Individual Service Table
                        </h2>
                        <div className="overflow-x-auto max-w-6xl mx-auto">
                            <table className="w-full border-collapse text-left min-w-[600px]">
                                <thead>
                                <tr className="border-b border-gray-600">
                                    <th className="p-4 text-gray-300">Service</th>
                                    <th className="p-4 text-gray-300">Market Price</th>
                                    <th className="p-4 text-gray-300">AI Tools</th>
                                    <th className="p-4 text-gray-300">Our Price</th>
                                </tr>
                                </thead>
                                <tbody>
                                {services.map((service, idx) => (
                                    <tr key={idx} className="border-b border-gray-700 hover:bg-purple-900/20 transition">
                                        <td className="p-4">{service.name}</td>
                                        <td className="p-4">{service.market}</td>
                                        <td className="p-4">{service.ai}</td>
                                        <td className="p-4">{service.ours}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </section>
                </div>

                {/* FAQ Footer */}
                <div className="bg-gray-900">
                    <FaqFooter />
                </div>
            </div>
        </>
    );
};

export default Plan;
