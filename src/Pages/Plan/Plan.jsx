import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import FaqFooter from "../../components/faq_footer.jsx";
// import planBg from "../../../src/assets/plan_bkg.svg";

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
            <div className="min-h-screen font-poppins text-white bg-[url('/src/assets/plan_bkg.svg')] bg-no-repeat bg-center bg-contain min-h-[600px] w-full ">
                {/* Wrapper with background image for Navbar, Bundles, and Service Table */}
                <div
                    // style={{
                    //     backgroundImage: "url(${planBg})",
                    //     backgroundRepeat: "no-repeat",
                    //     backgroundPosition: "center",
                    //     backgroundSize: "contain",
                    // }}

                    className="bg-[url('/src/assets/plan_bkg.svg')] bg-repeat bg-center bg-contain min-h-[600px] w-full"
                >
                    {/* Navbar */}
                    <nav className="max-w-full flex justify-between items-center px-4 sm:px-8 md:px-16 py-5 relative z-50 bg-transparent">
                        <a
                            href="#"
                            className="text-[#e1d5f9] font-bold text-[clamp(1rem,2.5vw,2rem)] tracking-wide"
                        >
                            {/* Optional Brand */}
                        </a>
                        <button
                            className="md:hidden flex flex-col gap-1.5 w-9 h-9 p-1.5 justify-center items-center bg-transparent border-none cursor-pointer"
                            aria-label="Toggle Menu"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            <span className="block w-6 h-[3px] bg-white rounded transition-all"></span>
                            <span className="block w-6 h-[3px] bg-white rounded transition-all"></span>
                            <span className="block w-6 h-[3px] bg-white rounded transition-all"></span>
                        </button>
                        <div
                            className={`flex items-center gap-8 transition-all duration-300 md:flex ${
                                menuOpen
                                    ? "absolute top-full left-0 w-full flex-col bg-[#16072d] p-6 pt-8 md:static md:bg-transparent md:p-0"
                                    : "hidden md:flex"
                            }`}
                        >
                            <ul className="flex flex-col md:flex-row gap-8 md:gap-12 w-full md:w-auto mb-6 md:mb-0">
                                {["Home", "About Us", "Custom Service", "Pricing", "Contact"].map(
                                    (link) => (
                                        <li key={link}>
                                            <a
                                                href="#"
                                                className="uppercase font-semibold text-[clamp(0.78rem,1vw,1rem)] text-[#e1d5f9] rounded px-3 py-1 hover:bg-[#1d0537] hover:text-[#d4adfc] transition"
                                            >
                                                {link}
                                            </a>
                                        </li>
                                    )
                                )}
                            </ul>
                            <div className="flex flex-col md:flex-row gap-3 md:gap-4 w-full md:w-auto">
                                <button className="border border-white text-white px-5 py-2 rounded-md font-semibold uppercase text-[clamp(0.72rem,1vw,1rem)] hover:opacity-80 transition w-full md:w-auto">
                                    Log In
                                </button>
                                <button className="bg-gradient-to-r from-[#d946ef] to-[#9333ea] text-white px-5 py-2 rounded-md font-semibold uppercase text-[clamp(0.72rem,1vw,1rem)] hover:opacity-80 transition w-full md:w-auto">
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </nav>

                    {/* Spacer for fixed navbar */}
                    <div className="h-[72px] md:h-[88px]" />

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

                    {/* Service Table Section */}
                    <section className="text-white text-center px-4 sm:px-10 md:px-20 py-16 bg-transparent">
                        <h2 className="text-4xl font-bold mb-12 max-w-6xl mx-auto">
                            Individual Service Table
                        </h2>
                        <div className="overflow-x-auto max-w-6xl mx-auto">
                            <table className="w-full border-collapse text-left min-w-[600px]">
                                <thead>
                                <tr className="border-b border-gray-600">
                                    <th className="p-4 text-gray-300 min-w-[120px]">Service</th>
                                    <th className="p-4 text-gray-300 min-w-[120px]">Market Price</th>
                                    <th className="p-4 text-gray-300 min-w-[120px]">AI Tools</th>
                                    <th className="p-4 text-gray-300 min-w-[120px]">Our Price</th>
                                </tr>
                                </thead>
                                <tbody>
                                {services.map((service, idx) => (
                                    <tr
                                        key={idx}
                                        className="border-b border-gray-700 hover:bg-purple-900/20 transition"
                                    >
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
